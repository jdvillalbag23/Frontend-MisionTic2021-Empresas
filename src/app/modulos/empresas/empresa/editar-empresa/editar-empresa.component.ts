import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configData } from 'src/app/config/configData';
import { EmpresaModel } from 'src/app/modelos/parametros/empresa.model';
import { EmpresaService } from 'src/app/services/parametros/empresa.service';

declare const ShowMensajeGeneral:any;

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private servicioEmpresa : EmpresaService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.BuscarRegistro();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      razonsocial: ["", [Validators.required]],
      nit: ["", [Validators.required]]          
    });
  }

  BuscarRegistro(){
    let id = this.route.snapshot.params["id"];
    this.servicioEmpresa.SearchRecord(id).subscribe({
      next: (data: EmpresaModel) => {
        this.dataForm.controls["id"].setValue(data.id);
        this.dataForm.controls["razonsocial"].setValue(data.razonsocial);
        this.dataForm.controls["nit"].setValue(data.nit);
      }
    });
  }

  GuardarRegistro(){
    let model = new EmpresaModel();
    model.razonsocial = this.dataForm.controls['razonsocial'].value;
    model.nit = this.dataForm.controls['nit'].value;
    model.id = this.dataForm.controls['id'].value;
    this.servicioEmpresa.UpdateRecord(model).subscribe({
      next: (data: EmpresaModel) => {
        ShowMensajeGeneral(configData.UPDATED_MESSAGE);
        this.router.navigate(["/empresas/listar-empresa"]);
      }
    });
  }

}
