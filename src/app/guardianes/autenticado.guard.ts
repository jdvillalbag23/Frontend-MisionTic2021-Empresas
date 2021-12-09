import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
  
  constructor(
    private localStorageService : LocalStorageService,
    private router : Router
  ){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.localStorageService.GetToken();
    if(token == ""){
      this.router.navigate(["/seguridad/login"]);
      return false;
    }else{
      return true;
    }

  }
  
}
