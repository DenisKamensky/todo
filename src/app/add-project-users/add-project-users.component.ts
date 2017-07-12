import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../shared/project';
import { User } from '../shared/user';
import { AuthService } from '../auth.service';
import { HomeProjectService } from '../home-project.service';

@Component({
  selector: 'app-add-project-users',
  templateUrl: './add-project-users.component.html',
  styleUrls: ['./add-project-users.component.scss']
})
export class AddProjectUsersComponent implements OnInit {
  @Input()
  project: Project;
  allUsers: User[];
  userWithStatus: any[];
  @Output()
  closeModal = new EventEmitter();
  constructor( private _authService: AuthService, private _homeProjectService: HomeProjectService) { }

  ngOnInit() {
    this.getAllUsers();
    this.getUserStatusOnProject();
  }
  getUsersOnProject(){

  }
  getAllUsers(){
    this.allUsers = this._authService.getUsers();
  }
  getUserStatusOnProject(){
    this.userWithStatus = this._homeProjectService.getUserStatusOnProject(this.allUsers, this.project.id);
  }
  cancel(){
    this.closeModal.emit()
  }
  saveUserStatus(){
    this._homeProjectService.setUserStatusOnProject(this.project.id, this.userWithStatus)
  }
}
