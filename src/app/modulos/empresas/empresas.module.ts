import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
import { ListarEmpresaComponent } from './empresa/listar-empresa/listar-empresa.component';
import { RemoverEmpresaComponent } from './empresa/remover-empresa/remover-empresa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    ListarEmpresaComponent,
    RemoverEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EmpresasModule { }
