import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate{
  constructor(private _router: Router){
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let cache = localStorage.getItem('currentUser');
    if(cache){
      let parsedCache = JSON.parse(cache);
      if(parsedCache.isAdmin){
        return true
      }else{
        this._router.navigate(['home']);
        return false;
      }
    }else{
      this._router.navigate(['home']);
      return false;
    }

  }
}
