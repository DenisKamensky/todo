import { Injectable } from '@angular/core';
import { projects } from './shared/mock-projects'
import { Project, iProject } from './shared/project';
import { Task } from './shared/task';

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
  createTask(projectId: number, taskName: string, taskDescr: string){
    let curProject = projects.find( (project)=>{return project.id == projectId });
    let lastId:number;
    if(curProject.tasks != null && curProject.tasks.length){
      lastId = curProject.tasks[curProject.tasks.length -1 ].id;
      ++lastId
    }else{
      lastId = 0;
    }
    let date = Date.now()

    let newTask: Task= new Task(taskName, lastId, taskDescr,[], date, curProject.id);
    if(curProject.tasks != null){
      curProject.tasks.push(newTask);
    }else{
      curProject.tasks = [];
      curProject.tasks.push(newTask);
    }
    console.log(curProject)
  }
  getCurrentTask(parentId: number, taskId: number): Task{
    let curProject: iProject =  projects.find((project)=>{return project.id == parentId});
    let curTask: Task = curProject.tasks.find( (task)=>{
      return task.id == taskId
    })
    return curTask;
  }
}
