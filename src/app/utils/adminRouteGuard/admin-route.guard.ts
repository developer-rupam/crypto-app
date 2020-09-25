import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {PROJECTNAMEALIAS} from '../init'

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuard implements CanActivate {

  constructor( public router:Router){}
  
  canActivate(): boolean {
   if(localStorage.getItem(PROJECTNAMEALIAS + '_admin_id') != undefined){
      return true
   }else{
      this.router.navigate(['/admin'])
      return false;
   }
  }
  
}
