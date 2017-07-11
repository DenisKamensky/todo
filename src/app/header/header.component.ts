import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { HomeProjectService } from '../home-project.service';
import { iProject } from '../shared/project';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAdmin :boolean = false;
  onTaskPage: boolean = false;
  @Input()
  projectId:number;
  project: iProject;
  constructor(private _authService: AuthService, private _homeProjectService: HomeProjectService){ }

  ngOnInit() {
    this.userRole();
    this.checkLink();
    this.getProjectLink();
  }
  userRole(){
    this.isAdmin = this._authService.getCurrentUserRole();
  }
  checkLink(){
    return location.href.indexOf('task') !=-1 ? this.onTaskPage =  true : this.onTaskPage =  false;
  }
  getProjectLink(){
    if(this.onTaskPage){
      this.project = this._homeProjectService.getCurrentProject(this.projectId);
    }
  }
}
