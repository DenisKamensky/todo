import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchBy;
  modal: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onUserSearch(event){
    this.searchBy = event;
  }
  modalUser(){
    this.modal = true;
  }
  closeModal(){
    this.modal = false;
  }
}
