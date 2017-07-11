import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeProjectService } from '../home-project.service';
import { AuthService } from '../auth.service'
import { iProject } from '../shared/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  id: number;
  project: iProject;
  isAdmin: boolean = false;
  taskModal: boolean = false;
  taskName: string;
  taskDescr: string;
  private sub: any;
  constructor(private _route: ActivatedRoute, private _homeProjectService: HomeProjectService, private _authService: AuthService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.project = this.getProject();
    this.getRole()
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getProject(): iProject{
   return  this._homeProjectService.getCurrentProject(this.id);
  }
  getRole(){
     this.isAdmin = this._authService.getCurrentUserRole()
  }
  modalTask(){
    this.taskModal = true;
  }
  addTask(){
    this._homeProjectService.createTask(this.id, this.taskName, this.taskDescr);
    this.taskName = '';
    this.taskDescr = '';
  }
  cancel(){
    this.taskModal = false;
  }
}
