import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  login: string = '';
  password: string = '';
  correctState: boolean = true;
  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }
  userLogin(event){

      // if(this.login === 'user' && this.password == 'password' || this.login === 'admin' && this.password == 'password'){
      //     //send login data
      //     this.correctState = true;
      //     this._router.navigate(['home']);
      // }else{
      //   this.correctState = false;
      //}
      this.correctState = this._authService.getAuth(this.login, this.password, event, this.correctState);

  }

}
