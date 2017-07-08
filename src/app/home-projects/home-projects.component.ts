import { Component, OnInit, Input } from '@angular/core';
import { HomeProjectService } from '../home-project.service';
@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent implements OnInit {
  projects = [];
  @Input()
  projectName: string = '';
  constructor( private _homeProjectService: HomeProjectService ) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects(){
      this.projects = this._homeProjectService.getHomeProjects()
  }
  getQuery(value){
    console.log(value)
  }
}
