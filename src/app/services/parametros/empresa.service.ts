import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { configData } from 'src/app/config/configData';
import { EmpresaModel } from 'src/app/modelos/parametros/empresa.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string = configData.PORT;
  tk : string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) { 
      this.tk = this.localStorageService.GetToken();
     }

  GetRecordList(): Observable<EmpresaModel[]> {
    return this.http.get<EmpresaModel[]>(`${this.url}/empresas`);
  }

  SearchRecord(id: string): Observable<EmpresaModel> {
    return this.http.get<EmpresaModel>(`${this.url}/empresas/${id}`);
  }

  SaveRecord(data: EmpresaModel): Observable<EmpresaModel> {
    return this.http.post<EmpresaModel>(`${this.url}/empresas`, {
      razonsocial: data.razonsocial,
      nit: data.nit
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })}
    );
  }

  UpdateRecord(data: EmpresaModel): Observable<EmpresaModel> {
    return this.http.put<EmpresaModel>(`${this.url}/empresas/${data.id}`, {
      razonsocial: data.razonsocial,
      nit: data.nit
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })}
    );
  }

  RemoveRecord(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/empresas/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })});
  }
}
