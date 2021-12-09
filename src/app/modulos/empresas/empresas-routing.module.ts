import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from 'src/app/guardianes/autenticado.guard';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
import { ListarEmpresaComponent } from './empresa/listar-empresa/listar-empresa.component';
import { RemoverEmpresaComponent } from './empresa/remover-empresa/remover-empresa.component';

const routes: Routes = [
  {
    path: "crear-empresa",
    component: CrearEmpresaComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "editar-empresa/:id",
    component: EditarEmpresaComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "listar-empresa",
    component: ListarEmpresaComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: "remover-empresa/:id",
    component: RemoverEmpresaComponent,
    canActivate: [AutenticadoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
