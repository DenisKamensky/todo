import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAdmin :boolean = false;
  constructor(private _authService: AuthService){ }

  ngOnInit() {
    this.userRole();
  }
  userRole(){
    this.isAdmin = this._authService.getCurrentUserRole();
  }
}
