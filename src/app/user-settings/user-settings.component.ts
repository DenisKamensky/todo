import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  login: string;
  firstName: string;
  lastName: string;
  oldPsw: string;
  printedOldPsw: string;
  newPsw: string;
  confirmNewPsw: string;
  modal: boolean = false;
  id: number = +JSON.parse(localStorage.getItem('currentUser')).id;
  status: string = '';
  constructor(private _location: Location, private _authService: AuthService) { }

  ngOnInit() {
  let response: User =   this.getCurrentUser();
   this.login = response.login;
   this.firstName = response.name;
   this.lastName = response.secondName;
   this.oldPsw = response.psw;
  }
  cancel(){
    this._location.back();
  }
  getCurrentUser(){
   return  this._authService.getCurrentUser();
  }
  checkOldPsw(){
    let pswInput = document.querySelector('input[name="oldPsw"]');
    if(this.printedOldPsw.length >= this.oldPsw.length && this.printedOldPsw != this.oldPsw){
      pswInput.classList.add('user-settings__field-password-value_invalid');
    }else if(this.printedOldPsw.length < this.oldPsw.length){
      pswInput.classList.remove('user-settings__field-password-value_invalid');
    }else if(this.printedOldPsw.length == this.oldPsw.length && this.printedOldPsw == this.oldPsw){
      pswInput.classList.remove('user-settings__field-password-value_invalid');
    }
  }
  confirmPsw(){
    let newPsw = document.querySelector('input[name="newPsw"]');
    let confirmNewPsw = document.querySelector('input[name="confirmNewPsw"]');
    let submit = document.querySelector('button[type="submit"]');
    if(this.confirmNewPsw != this.newPsw){
      newPsw.classList.add('user-settings__field-password-value_invalid');
      confirmNewPsw.classList.add('user-settings__field-password-value_invalid');
      submit.setAttribute('disabled','true');
    }else{
      newPsw.classList.remove('user-settings__field-password-value_invalid');
      confirmNewPsw.classList.remove('user-settings__field-password-value_invalid');
      submit.removeAttribute('disabled');
    }
  }
  changeUser(){

    let self = this;
    this._authService.changeUser(this.login, this.firstName, this.lastName , this.newPsw, this.id)
      .then(()=>{
        console.log(1)
        self.modal = true,
        self.status = 'User settings was succsessfully changed';
       })
      .catch(()=>{
        self.modal = true,
        self.status = 'Somthing wrong... please update this page, and try again'
      })
  }
  closeModal(){
    this.modal = false;
  }
}
