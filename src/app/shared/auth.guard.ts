import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private _router: Router){
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let cache = localStorage.getItem('currentUser');
    if(cache){
      console.log('ok')
      return true;
    }else{
      this._router.navigate(['sign-in']);
      return false;
    }

  }
}
