import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configData } from 'src/app/config/configData';
import { UserModel } from 'src/app/modelos/security/user.model';
import { SeguridadService } from 'src/app/services/shared/seguridad.service';
import {MD5} from "crypto-js";
import { SessionDataModel } from 'src/app/modelos/security/session-data.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { Router } from '@angular/router';
declare const ShowMensajeGeneral:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 
  constructor(
    private fb: FormBuilder,
    private securityService : SeguridadService,
    private localStorageService : LocalStorageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      usuario: ["", [Validators.required, Validators.email, Validators.minLength(configData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(configData.PASSWORD_MIN_LENGHT)]]
    });
  }

  login(){
    if(this.dataForm.invalid){
      ShowMensajeGeneral(configData.INVALID_DATA)
    }else{
      let credenciales = new UserModel();
      credenciales.usuario = this.dataForm.controls['usuario'].value;
      credenciales.password = MD5(this.dataForm.controls['password'].value).toString();
      this.securityService.login(credenciales).subscribe({
        next: (data: SessionDataModel) => {
        console.log(data);
        let saved = this.localStorageService.SaveSessionData(data);
        data.isLoggedIn = true;
        this.securityService.RefreshSessionInfo(data);
        this.router.navigate(["/home"]);
      }, 
      error: (error:any) => {

      },
      complete: () => {

      }
    });
    }
  }
}
