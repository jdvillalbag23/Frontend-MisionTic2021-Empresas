import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from 'src/app/guardianes/autenticado.guard';
import { NoautenticadoGuard } from 'src/app/guardianes/noautenticado.guard';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { ListaEmpleadoComponent } from './empleados/lista-empleado/lista-empleado.component';
import { RemoverEmpleadoComponent } from './empleados/remover-empleado/remover-empleado.component';
import { CambiarPasswordComponent } from './general/cambiar-password/cambiar-password.component';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { RecuperarPasswordComponent } from './general/recuperar-password/recuperar-password.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NoautenticadoGuard]
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "cambiar-password",
    component: CambiarPasswordComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "recuperar-password",
    component: RecuperarPasswordComponent,
    canActivate: [NoautenticadoGuard]
  },
  {
    path: "crear-empleado",
    component: CrearEmpleadoComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "editar-empleado/:id",
    component: EditarEmpleadoComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "lista-empleado",
    component: ListaEmpleadoComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "remover-empleado/:id",
    component: RemoverEmpleadoComponent,
    canActivate: [AutenticadoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
