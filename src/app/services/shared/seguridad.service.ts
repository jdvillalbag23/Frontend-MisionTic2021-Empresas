import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionDataModel } from 'src/app/modelos/security/session-data.model';
import { configData } from '../../config/configData';
import { UserModel } from '../../modelos/security/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  sessionInforSubject = new BehaviorSubject<SessionDataModel>(new SessionDataModel());
  url: string = configData.PORT;
  constructor(private http: HttpClient,
    private localStorageService : LocalStorageService,
    
    ) {
      this.verifyActiveSession();
  }

  verifyActiveSession(): boolean{
    let info = this.localStorageService.GetSessionInfo();
    if(info){
      info.isLoggedIn = true;
      this.RefreshSessionInfo(info);
      return true;
    }else{
      return false;
    }
  }
  
  RefreshSessionInfo(data: SessionDataModel){
    this.sessionInforSubject.next(data)
  }

  GetSessionInfo(){
    return this.sessionInforSubject.asObservable();
  }

  login(data: UserModel): Observable<SessionDataModel> {
    return this.http.post<SessionDataModel>(`${this.url}/identificarEmpleados`, {
      usuario: data.usuario,
      clave: data.password
    });
  }


  
}
