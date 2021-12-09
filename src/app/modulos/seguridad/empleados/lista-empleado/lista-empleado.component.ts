import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/modelos/parametros/empleado.model';
import { EmpleadoService } from 'src/app/services/parametros/empleado.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {
  
  p: number = 1;
  pageSize: number = 4;
  totalPages: number = 0;

  employList : EmpleadoModel[] = []
  constructor(
    private empleadoService : EmpleadoService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.empleadoService.GetRecordList().subscribe({
      next: (data: EmpleadoModel[]) => {
        this.employList = data ;
        this.totalPages = this.employList.length;
      }
    });
  }

}
