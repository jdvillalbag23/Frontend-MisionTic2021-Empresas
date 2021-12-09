import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { configData } from 'src/app/config/configData';
import { EmpleadoModel } from 'src/app/modelos/parametros/empleado.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url: string = configData.PORT;
  tk : string = "";
  filter : string = `?filter={"include":[{"relation":"empresa"}]}`;

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) { 
      this.tk = this.localStorageService.GetToken();
     }

  GetRecordList(): Observable<EmpleadoModel[]>{
    return this.http.get<EmpleadoModel[]>(`${this.url}/empleados${this.filter}`);
  }

  SearchRecord(id: string): Observable<EmpleadoModel> {
    return this.http.get<EmpleadoModel>(`${this.url}/empleados/${id}`);
  }

  SaveRecord(data: EmpleadoModel): Observable<EmpleadoModel>{
    return this.http.post<EmpleadoModel>(`${this.url}/empleados`, {
      nombres: data.nombres,
      apellidos: data.apellidos,
      telefono: data.telefono,
      direccion: data.direccion,
      email: data.email,
      edad: data.edad,      
      sueldo: data.sueldo,      
      empresaId: data.empresaId
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  UpdateRecord(data: EmpleadoModel): Observable<EmpleadoModel> {
    return this.http.put<EmpleadoModel>(`${this.url}/empleados/${data.id}`, {
      nombres: data.nombres,
      apellidos: data.apellidos,
      telefono: data.telefono,
      direccion: data.direccion,
      email: data.email,
      edad: data.edad,      
      sueldo: data.sueldo,      
      empresaId: data.empresaId
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })}
    );
  }

  RemoveRecord(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/empleados/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })});
  }
}