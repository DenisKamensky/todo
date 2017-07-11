import {iComment} from './coment'
export class Task{
  constructor(public name: string, public id: number, public description: string, public comments: iComment [], public date: number, public parentId: number){}
}
