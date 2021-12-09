import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configData } from 'src/app/config/configData';
import { EmpleadoModel } from 'src/app/modelos/parametros/empleado.model';
import { EmpleadoService } from 'src/app/services/parametros/empleado.service';

declare const ShowMensajeGeneral:any;

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private servicioEmpleado : EmpleadoService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      nombres: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      email: ["", [Validators.required]],
      edad: ["", [Validators.required]],
      sueldo: ["", [Validators.required]],      
      empresaId:["", [Validators.required]]       
    });
  }

  GuardarEmpleado(){
    let model = new EmpleadoModel();
    model.nombres = this.dataForm.controls['nombres'].value;
    model.apellidos = this.dataForm.controls['apellidos'].value;
    model.telefono = this.dataForm.controls['telefono'].value;
    model.direccion = this.dataForm.controls['direccion'].value;
    model.email = this.dataForm.controls['email'].value;
    model.edad = this.dataForm.controls['edad'].value;    
    model.sueldo = parseInt(this.dataForm.controls['sueldo'].value);   
    model.empresaId = this.dataForm.controls['empresaId'].value;
    this.servicioEmpleado.SaveRecord(model).subscribe({
      next: (data: EmpleadoModel) => {
        ShowMensajeGeneral(configData.SAVED_MESSAGE)
        this.router.navigate(["/seguridad/lista-empleado"]);
      }
    });
  }

}
