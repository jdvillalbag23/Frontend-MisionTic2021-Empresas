import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from 'src/app/modelos/parametros/empresa.model';
import { EmpresaService } from 'src/app/services/parametros/empresa.service';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {

  p: number = 1;
  pageSize: number = 4;
  totalPages: number = 0;
  empresaList : EmpresaModel[] = [];
  constructor(
    private empresaService : EmpresaService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.empresaService.GetRecordList().subscribe({
      next: (data: EmpresaModel[]) => {
        this.empresaList = data ;
        this.totalPages = this.empresaList.length;
      }
    });
  }

}
