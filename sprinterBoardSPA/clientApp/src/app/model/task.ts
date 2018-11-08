export class Task {
  constructor(id: any = null, name: string = "", description: string = "") {
    this.Id = id;
    this.Name = name;
    this.Description = description;
  }
  Id: any;
  Name: string;
  Description: string;
  UserId: string;
}
