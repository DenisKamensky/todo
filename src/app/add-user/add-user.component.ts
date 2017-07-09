import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  userConfirmPassword: string;
  userRole: string = '0';
  userLogin: string;
  @Output()
  canselAdd = new EventEmitter();
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }
  checkPswd(){
    let confirmPsw = document.querySelectorAll('input[type="password"]');
    let classAction = function(callback){
      for(let i = 0; i<confirmPsw.length; i++){
        callback.apply(confirmPsw[i])
      }
    }
    if(this.userPassword != this.userConfirmPassword){
      classAction(function() {
        this.classList.add('add-user__input_invalid');
      });
    }else{
      classAction(function() {
        this.classList.remove('add-user__input_invalid');
      });
    }
  }
  createUser(){
    let correctPsw = document.querySelector('input[type="password"]');
    if(correctPsw.classList.contains('add-user__input_invalid')){
      return false;
    }else{
      this._authService.addUser(this.userFirstName, this.userLastName, this.userLogin, this.userPassword, this.userRole)
    }

  }
  cancel(){
    let data = [this.userFirstName, this.userLastName, this.userLogin, this.userPassword, this.userConfirmPassword, this.userRole];
    for(let item of data){
      item = '';
    }
    this.userRole = '0';
    this.canselAdd.emit();
  }
}
