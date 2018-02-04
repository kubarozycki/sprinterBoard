import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Request } from '@angular/http/src/static_request';
import { error } from 'util';
import { Task } from '../model/task';
@Injectable()
export class TasksService {
  constructor(private http: Http) { }
  private tasksUrl = environment.url + 'tasks'

  getTasks(): Observable<any[]> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.tasksUrl + "/GetAll/", {headers})
      .map((res: Response) => res.json())
      .catch((error: any)=> Observable.throw(error));
  }
  getTask(id): Observable<any[]> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.tasksUrl + "/GetDetails/" + id, { headers })
      .map((res: Response) => res.json())
      .catch(err => {
        return Observable.throw(err);
      })

  }


  addTask(task: Task): Observable<any> {
    delete task.Id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.tasksUrl, task, options)
      .map((response: Response) => { return response; })
      .catch((error: any) => Observable.throw(error));
  }
  updateTask(task: Task): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.tasksUrl, task, options)
      .map((response: Response) => { return response; })
      .catch((error: any) => Observable.throw(error));
  }
  removeTask(task: Task): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.tasksUrl+"/delete/"+task.Id, options)
      .map((response: Response) => { return response; })
      .catch((error: any) => Observable.throw(error));
  }


}
