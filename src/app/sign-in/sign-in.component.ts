import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  login: string = '';
  password: string = '';
  correctState: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  userLogin(){
    if(this.login === 'user' && this.password == 'password' || this.login === 'admin' && this.password == 'password'){
        //send login data
        this.correctState = true;
    }else{
      this.correctState = false;
    }
  }

}
