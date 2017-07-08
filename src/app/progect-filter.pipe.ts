import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform( projects: any, projectName?: any): any {
    if( projectName == undefined || !projectName.length){
      return projects
    }else{
      return projects.filter((project)=>{
        if(project.name.toLowerCase().indexOf(projectName.toLowerCase()) != -1){
          return project;
        }
      });
    }

  }

}
