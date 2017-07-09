import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: any, searchQueryBy: any): any {
    if(searchQueryBy != undefined ){
      if(searchQueryBy.searchBy == null){
        switch(searchQueryBy.role){
          case 'All':
            return users;
          case 'Admin':
            return users.filter( (user)=>{
              return user.isAdmin
            });
          case 'User':
            return users.filter( (user)=>{
              return !user.isAdmin
            });
          default: return users;
        }
      }else{

        switch(searchQueryBy.role){
          case 'All':
            let result: any [] = [] ;
            result = users.filter( (user) => {
              return user.name.toLowerCase().indexOf(searchQueryBy.searchBy.toLowerCase()) != -1 ;
            })
            if(!result.length){
              result = users.filter( (user) => {
                return user.login.toLowerCase().indexOf(searchQueryBy.searchBy.toLowerCase()) != -1 ;
              })
            }
            return result;
          case 'Admin':
            let resultAdmin: any [] = [] ;
            resultAdmin = users.filter( (user) => {
              return user.name.toLowerCase().indexOf(searchQueryBy.searchBy.toLowerCase()) != -1 && user.isAdmin;
            })
            if(!resultAdmin.length){
              resultAdmin = users.filter( (user) => {
                return user.login.toLowerCase().indexOf(searchQueryBy.searchBy.toLowerCase()) != -1 && user.isAdmin;
              })
            }
            return resultAdmin;
          case 'User':
            let resultUser: any [] = [] ;
            resultUser = users.filter( (user) => {
              return user.name.toLowerCase().indexOf(searchQueryBy.searchBy.toLowerCase()) != -1 && !user.isAdmin;
            })
            if(!resultUser.length){
              resultUser = users.filter( (user) => {
                return user.login.toLowerCase().indexOf(searchQueryBy.searchBy.toLowerCase()) != -1 && !user.isAdmin;
              })
            }
            return resultUser;
          default: return users;
        }
      }
    }else{
      return users;
    }

  }

}
