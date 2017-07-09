import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../shared/user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input()
  searchQueryBy;
  users:User [];
  constructor(private _authService: AuthService ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.users= this._authService.getUsers();
  }

}
