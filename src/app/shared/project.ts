export interface iProject{
  name: string,
  id: number,
  tasks?: any[],
}

export class Project implements iProject{
  constructor( public name, public id){}
}
