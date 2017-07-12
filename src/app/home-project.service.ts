import { Injectable } from '@angular/core';
import { projects } from './shared/mock-projects'
import { Project, iProject } from './shared/project';
import { Task } from './shared/task';
import { Comment } from './shared/coment';


@Injectable()
export class HomeProjectService {
  projects = projects;
  constructor() { }
  getHomeProjects(){
    return this.projects
  }
  createProject(projectName: string, authorId: number){
    let projects = this.projects;
    let lastId: number = projects[projects.length-1].id;
    let currentId:number = ++lastId;
    let teamList: number [] = [];
    teamList.push(authorId)
    let newProject:iProject = new Project(projectName, currentId, teamList);
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
  }
  getCurrentTask(parentId: number, taskId: number): Task{
    let curProject: iProject =  projects.find((project)=>{return project.id == parentId});
    let curTask: Task = curProject.tasks.find( (task)=>{
      return task.id == taskId
    })
    return curTask;
  }
  addComment( taskId: number, userId: number ,projectId: number, commentText: string){
    let date = Date.now();
    let newComment: Comment = new Comment(userId, commentText, date);
    let curTask = this.getCurrentTask(projectId, taskId);
    curTask.comments.push(newComment);

  }
  getUserStatusOnProject(userList, projectId: number){
    let allUsers = userList;
    let curProject: iProject =  projects.find((project)=>{return project.id == projectId});
    let step: number = 0;
    allUsers.forEach( (user)=>{
      let userId = user.id;
      if(curProject.projectTeam.indexOf(user.id)!=-1){
        user.projectStatus = true;
      }else{
        user.projectStatus = false;
      }
    })
    return allUsers;
  }

  setUserStatusOnProject(projectId: number, users: any []){
    let curProject: iProject =  projects.find((project)=>{return project.id == projectId});
    let newTeam = [];
    users.forEach( (user)=>{
      if(user.projectStatus){
        newTeam.push(user.id)
      }
    });
    curProject.projectTeam = newTeam;
  }
}
