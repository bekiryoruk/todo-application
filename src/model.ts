export class Todo {
  public id: number;
  public description: string;
  public isDone: boolean;

  constructor(id: number, description: string, isDone: boolean = false) {
    this.id = id;
    this.description = description;
    this.isDone = isDone;
  }
}
