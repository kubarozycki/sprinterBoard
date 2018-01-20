import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Request } from '@angular/http/src/static_request';
import { error } from 'util';
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
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

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


  addTask(task: any): Observable<any> {
    delete task.Id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.tasksUrl, task, options)
      .map((response: Response) => { return response; })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  updateTask(task: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.tasksUrl, task, options)
      .map((response: Response) => { return response; })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  // TODO: add task model !!!
}
