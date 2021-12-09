import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { CambiarPasswordComponent } from './general/cambiar-password/cambiar-password.component';
import { RecuperarPasswordComponent } from './general/recuperar-password/recuperar-password.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { ListaEmpleadoComponent } from './empleados/lista-empleado/lista-empleado.component';
import { RemoverEmpleadoComponent } from './empleados/remover-empleado/remover-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    CambiarPasswordComponent,
    RecuperarPasswordComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    ListaEmpleadoComponent,
    RemoverEmpleadoComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SeguridadModule { }
