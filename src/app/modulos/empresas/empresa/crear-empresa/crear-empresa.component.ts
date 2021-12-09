import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configData } from 'src/app/config/configData';
import { EmpresaModel } from 'src/app/modelos/parametros/empresa.model';
import { EmpresaService } from 'src/app/services/parametros/empresa.service';

declare const ShowMensajeGeneral:any;

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private servicioEmpresa : EmpresaService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      razonsocial: ["", [Validators.required]],
      nit: ["", [Validators.required]]          
    });
  }

  GuardarRegistro(){
    let model = new EmpresaModel();
    model.razonsocial = this.dataForm.controls['razonsocial'].value;
    model.nit = this.dataForm.controls['nit'].value;
    
    this.servicioEmpresa.SaveRecord(model).subscribe({
      next: (data: EmpresaModel) => {
        ShowMensajeGeneral(configData.SAVED_MESSAGE);
        this.router.navigate(["/empresas/listar-empresa"]);
      }      
    });
  }

}
