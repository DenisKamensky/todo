import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../shared/task';
import { User } from '../shared/user';
import { HomeProjectService } from '../home-project.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  id: number;
  parentId: number;
  private sub: any;
  task: Task;

  constructor(private _route: ActivatedRoute, private _homeProjectService: HomeProjectService, private _authService: AuthService ) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.parentId = +params['parentId']
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getCurrentTask();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getCurrentTask(){
    this.task = this._homeProjectService.getCurrentTask(this.parentId, this.id);
  }

}
