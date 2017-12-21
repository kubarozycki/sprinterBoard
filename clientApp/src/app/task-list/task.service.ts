import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {environment} from '../../environments/environment';
import { Request } from '@angular/http/src/static_request';
import { error } from 'util';
@Injectable()
export class TaskService {
    constructor(private http:Http){}
    private tasksUrl=environment.url+'tasks'
   
            getTasks() : Observable<any[]> {
        
                 // ...using get request
                 return this.http.get(this.tasksUrl+"/GetAll/")
                                // ...and calling .json() on the response to return data
                                 .map((res:Response) => res.json())
                                 //...errors if any
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
            }
            getTask(id) : Observable<any[]>{
                
                return this.http.get(this.tasksUrl+"/GetDetails/"+id)
                                .map((res:Response)=>res.json())
                                .catch(err =>  { 
                                    return Observable.throw(err); // observable needs to be returned or exception raised
                                 })
                                
            }


            addTask(task:any):Observable<any>{
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });
                return this.http.post(this.tasksUrl, task, options)
                           .map((response:Response)=>{return response;})
                           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            }
            updateTask(task:any):Observable<any>{
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });
                return this.http.put(this.tasksUrl,task,options)
                .map((response:Response)=>{return response;})
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            }


            // TODO: add task model !!!
}