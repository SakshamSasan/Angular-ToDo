import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import Task from 'src/app/Task';
import { Observable } from 'rxjs';
import { UrlHandlingStrategy } from '@angular/router';

let options={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task):Observable<Task>{
    let url = `http://localhost:3000/tasks/${task.id}`
    return this.http.delete<Task>(url)
  }

  toggleTask(task:Task):Observable<Task>{
    let url = `http://localhost:3000/tasks/${task.id}`
    return this.http.put<Task>(url,task,options)
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,options)
  }

}
