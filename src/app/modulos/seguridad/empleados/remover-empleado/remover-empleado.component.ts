import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configData } from 'src/app/config/configData';
import { EmpleadoModel } from 'src/app/modelos/parametros/empleado.model';
import { EmpleadoService } from 'src/app/services/parametros/empleado.service';

declare const ShowMensajeGeneral:any;

@Component({
  selector: 'app-remover-empleado',
  templateUrl: './remover-empleado.component.html',
  styleUrls: ['./remover-empleado.component.css']
})
export class RemoverEmpleadoComponent implements OnInit {

  id: string = "";
  nombres: string = "";
  apellidos: string = "";
  telefono: string = "";
  direccion: string = "";
  email: string = "";
  edad: string = "";
  sueldo: number = 0;
  empresaId: string = "";

  constructor(
    private router: Router,
    private servicioEmpleado: EmpleadoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro() {
    let id = this.route.snapshot.params["id"];
    this.servicioEmpleado.SearchRecord(id).subscribe({
      next: (data: EmpleadoModel) => {
        if (data.id && data.nombres && data.apellidos && data.telefono && data.direccion
          && data.email && data.edad && data.sueldo && data.empresaId) {
          this.id = data.id;
          this.nombres = data.nombres;
          this.apellidos = data.apellidos;
          this.telefono = data.telefono;
          this.direccion = data.direccion;
          this.email = data.email;
          this.edad = data.edad;
          this.sueldo = data.sueldo;
          this.empresaId = data.empresaId;
        }

      }
    });
  }

  RemoverEmpleado() {
    
    this.servicioEmpleado.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowMensajeGeneral(configData.REMOVED_MESSAGE)
        this.router.navigate(["/seguridad/lista-empleado"]);
      }
    });
  }

}
