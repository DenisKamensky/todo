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
          isAdmin:  matchUser.isAdmin,
          id: matchUser.id
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
  getCurrentUserRole(): boolean{
    return JSON.parse(localStorage.getItem('currentUser')).isAdmin;
  }
  getUsers():User[]{
    return users;
  }
  addUser(name:string, lastName: string, login: string, psw: string, role:string){
    let isAdmin:boolean = parseInt(role) ? true : false;
    let lastId = this.users[this.users.length-1].id;
    let id = ++lastId;
    let newUser = new User(name, lastName, login, psw, isAdmin, id);
    this.users.push(newUser);
  }
  getCurrentUser(){
    let id: string = JSON.parse(localStorage.getItem('currentUser')).id;
    let currentUser = users.find((user)=>{
      return user.id == +id;
    });
    return currentUser;
  }
  changeUser(login: string, name: string, lastName: string, psw: string, id: number){
    return new Promise((resolve,reject)=>{
      for(let i = 0; i<users.length; i++){
        if(users[i].id == id){
          try{
            let tempUser = users[i];
            tempUser.name = name;
            tempUser.login = login;
            tempUser.secondName = lastName;
            tempUser.psw = psw;
            resolve();
          }catch(e){
            reject();
          }
        }
      }
    })
  }
  getCommentAuthor(id: number): User{
    let author: User = users.find( (user)=>{ return user.id == id});
    return author;
  }
}
