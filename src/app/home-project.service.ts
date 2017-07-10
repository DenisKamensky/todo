import { Injectable } from '@angular/core';
import { projects } from './shared/mock-projects'
import { Project, iProject } from './shared/project'

@Injectable()
export class HomeProjectService {
  projects = projects;
  constructor() { }
  getHomeProjects(){
    return this.projects
  }
  createProject(projectName: string){
    let projects = this.projects;
    let lastId: number = projects[projects.length-1].id;
    let currentId:number = ++lastId;
    let newProject:iProject = new Project(projectName, currentId);
    projects.push(newProject);
  }
  getCurrentProject(id:number){
    let curProject: iProject =  projects.find((project)=>{return project.id == id});
    return curProject;
  }
}
