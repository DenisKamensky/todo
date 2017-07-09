import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {
  role: string = 'All';
  searchBy: string;
  @Output()
  userSearch = new EventEmitter();
  @Output()
  newUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeQuery(){
    this.userSearch.emit({
      searchBy: this.searchBy,
      role: this.role
    });
  }
  addUser(){
    this.newUser.emit();
  }

}
