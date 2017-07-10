import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeProjectService } from '../home-project.service';
import { iProject } from '../shared/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  id: number;
  project: iProject;
  private sub: any;
  constructor(private _route: ActivatedRoute, private _homeProjectService: HomeProjectService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.project = this.getProject();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getProject(): iProject{
   return  this._homeProjectService.getCurrentProject(this.id);
  }
}
