import { Task } from './task'
export interface iProject{
  name: string,
  id: number,
  tasks?: Task [],
}

export class Project implements iProject{
  constructor( public name, public id){}
}
