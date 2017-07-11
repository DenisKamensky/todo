export interface iComment{
  author: number,
  text: string,
  date: number
}
export class Comment implements iComment{
  constructor(public author, public text: string, public date: number){}
}
