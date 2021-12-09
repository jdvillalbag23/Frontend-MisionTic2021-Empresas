import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configData } from 'src/app/config/configData';
import { EmpleadoModel } from 'src/app/modelos/parametros/empleado.model';
import { EmpleadoService } from 'src/app/services/parametros/empleado.service';
declare const ShowMensajeGeneral:any;

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private servicioEmpleado : EmpleadoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.BuscarRegistro();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      id: ["",[Validators.required]],
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

  BuscarRegistro(){
    let id = this.route.snapshot.params["id"];
    this.servicioEmpleado.SearchRecord(id).subscribe({
      next: (data: EmpleadoModel) => {
        this.dataForm.controls["id"].setValue(data.id);
        this.dataForm.controls["nombres"].setValue(data.nombres);
        this.dataForm.controls["apellidos"].setValue(data.apellidos);
        this.dataForm.controls["telefono"].setValue(data.telefono);
        this.dataForm.controls["direccion"].setValue(data.direccion);
        this.dataForm.controls["email"].setValue(data.email);
        this.dataForm.controls["edad"].setValue(data.edad);
        this.dataForm.controls["sueldo"].setValue(data.sueldo);
        this.dataForm.controls["empresaId"].setValue(data.empresaId);
      }
    });
  }


  GuardarEmpleado(){
    let model = new EmpleadoModel();
    model.id = this.dataForm.controls['id'].value;
    model.nombres = this.dataForm.controls['nombres'].value;
    model.apellidos = this.dataForm.controls['apellidos'].value;
    model.telefono = this.dataForm.controls['telefono'].value;
    model.direccion = this.dataForm.controls['direccion'].value;
    model.email = this.dataForm.controls['email'].value;
    model.edad = this.dataForm.controls['edad'].value;    
    model.sueldo = parseInt(this.dataForm.controls['sueldo'].value);   
    model.empresaId = this.dataForm.controls['empresaId'].value;
    this.servicioEmpleado.UpdateRecord(model).subscribe({
      next: (data: EmpleadoModel) => {
        ShowMensajeGeneral(configData.UPDATED_MESSAGE)
        this.router.navigate(["/seguridad/lista-empleado"]);
      }
    });
  }

}
