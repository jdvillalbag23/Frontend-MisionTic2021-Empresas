import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configData } from 'src/app/config/configData';
import { EmpresaModel } from 'src/app/modelos/parametros/empresa.model';
import { EmpresaService } from 'src/app/services/parametros/empresa.service';

declare const ShowMensajeGeneral:any;

@Component({
  selector: 'app-remover-empresa',
  templateUrl: './remover-empresa.component.html',
  styleUrls: ['./remover-empresa.component.css']
})
export class RemoverEmpresaComponent implements OnInit {

  id: string = "";
  razonsocial: string = "";
  nit: string = "";

  constructor(
    private router: Router,
    private servicioEmpresa: EmpresaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro() {
    let id = this.route.snapshot.params["id"];
    this.servicioEmpresa.SearchRecord(id).subscribe({
      next: (data: EmpresaModel) => {
        if (data.id && data.razonsocial && data.nit) {
          this.id = data.id;
          this.razonsocial = data.razonsocial;
          this.nit = data.nit;
        }
      }
    });
  }

  EliminarRegistro() {    
    this.servicioEmpresa.RemoveRecord(this.id).subscribe({
      next: (data: any) => {    
        ShowMensajeGeneral(configData.REMOVED_MESSAGE)
        this.router.navigate(["/empresas/listar-empresa"]);
      }
    });
  }
}
