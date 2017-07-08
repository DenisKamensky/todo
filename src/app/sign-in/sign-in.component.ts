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
      this.correctState = this._authService.getAuth(this.login, this.password, event, this.correctState);
  }

}
