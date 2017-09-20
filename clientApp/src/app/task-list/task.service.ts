import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class TaskService {
    constructor(private http:Http){}
    private tasksUrl='http://localhost:5000/api/tasks'
   
            getTasks() : Observable<any[]> {
        
                 // ...using get request
                 return this.http.get(this.tasksUrl)
                                // ...and calling .json() on the response to return data
                                 .map((res:Response) => res.json())
                                 //...errors if any
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
            }
            addTask(task:any):Observable<any>{
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });
                return this.http.post(this.tasksUrl, task, options)
                           .map((response:Response)=>{return response;})
                           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            }
}