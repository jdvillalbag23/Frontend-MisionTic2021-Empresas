import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionDataModel } from 'src/app/modelos/security/session-data.model';
import { SeguridadService } from 'src/app/services/shared/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeSession: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(
    private servicioSeguridad: SeguridadService
  ) { }

  ngOnInit(): void {
    this.ValidateSessionStatus()
  }

  ValidateSessionStatus() {
    this.subscription = this.servicioSeguridad.GetSessionInfo().subscribe({
      next: (data: SessionDataModel) => {        
          this.activeSession = data.isLoggedIn
      },
      error: (err: any) => {

      }
    });
  }

}
