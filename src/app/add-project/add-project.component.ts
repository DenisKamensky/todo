import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeProjectService } from '../home-project.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  @Output()
  closeForm = new EventEmitter();
  userId: number;
  taskName: string = '';
  constructor(private _homeProjectService: HomeProjectService, private _authService: AuthService) { }

  ngOnInit() {
    this.getUserId();
  }
  cancel(){
    this.taskName = '';
    this.closeForm.emit();
  }
  getUserId(){
    this.userId = this._authService.getCurrentUser().id;
  }
  createProject(){
    this._homeProjectService.createProject(this.taskName, this.userId)
    this.taskName = '';
    this.closeForm.emit();
  }

}
