import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionDataModel } from 'src/app/modelos/security/session-data.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { SeguridadService } from 'src/app/services/shared/seguridad.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private localStorageService : LocalStorageService,
    private securityService : SeguridadService,
    private router : Router
  ) { }

  ngOnInit(): void {
    let session = this.localStorageService.RemoveSessionData();
    if(session){
      this.securityService.RefreshSessionInfo(new SessionDataModel());
      this.router.navigate(["/home"]);
    }
  }

}
