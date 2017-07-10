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
  constructor(private _location: Location, private _authService: AuthService) { }

  ngOnInit() {
  let response: User =   this.getCurrentUser();
   this.login = response.login;
   this.firstName = response.name;
   this.lastName = response.secondName;
  }
  cancel(){
    this._location.back();
  }
  getCurrentUser(){
   return  this._authService.getCurrentUser();
  }
}
