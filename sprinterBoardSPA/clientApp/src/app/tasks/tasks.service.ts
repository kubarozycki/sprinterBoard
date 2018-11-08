import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class TasksService {
  constructor(private http: HttpClient) { }
  private tasksUrl = environment.url + 'tasks'

  getTasks() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    const helper = new JwtHelperService();

    if (navigator.onLine) {
      const decodedToken = helper.decodeToken(localStorage.getItem("auth_token"));
      debugger;
      return this.http.get(this.tasksUrl + "/GetAll?username=" + decodedToken.unique_name, { headers: headers })
    }
    else {
      return of(JSON.parse(localStorage.getItem("tasks")));
    }

  }
  getTask(id) {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.tasksUrl + "/GetDetails/" + id, { headers })
  }


  addTask(task: Task) {
    delete task.Id;
    debugger;
    console.log(navigator.onLine);
    if (navigator.onLine) {
      const httpOptions = {
        headers: new HttpHeaders(
        )
      };

      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(localStorage.getItem("auth_token"));
      task.UserId = decodedToken.unique_name;
      let authToken = localStorage.getItem('auth_token');
      httpOptions.headers.append('Authorization', `Bearer ${authToken}`)
      return this.http.post(this.tasksUrl, task, httpOptions)
    }
    else {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.push(task);
    }


  }
  updateTask(task: Task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
      )
    };
    let authToken = localStorage.getItem('auth_token');
    httpOptions.headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.put(this.tasksUrl, task, httpOptions);
  }
  removeTask(task: Task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
      )
    };
    return this.http.delete(this.tasksUrl + "/delete/" + task.Id, httpOptions);
  }


}
