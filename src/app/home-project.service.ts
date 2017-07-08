import { Injectable } from '@angular/core';
import { projects } from './shared/mock-projects'

@Injectable()
export class HomeProjectService {
  projects = projects;
  constructor() { }
  getHomeProjects(){
    return this.projects
  }
}
