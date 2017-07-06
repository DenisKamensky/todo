import { Injectable } from '@angular/core';
import { User } from './shared/user';
import { users } from './shared/mock-users';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  users: User[] = users;
  constructor(private _router: Router) { }
  getAuth(login: string, psw: string, event, state: boolean ){

    if(event.type==='submit' || event.keyCode === 13){
      let user = {
        login: login,
        psw: psw
      }
      let matchUser = this.users.find( (usr)=> {
        return usr.login === user.login && usr.psw === user.psw
      })
      if(matchUser){
        localStorage.setItem('currentUser', JSON.stringify({
          isAdmin:  matchUser.isAdmin
        }));
        this._router.navigate(['home']);
        return true;
      }else{
        return false;
      }

    }
    else{
      return true
    }
  }

}
