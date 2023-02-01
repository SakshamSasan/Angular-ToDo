import { Component,OnInit } from '@angular/core';
import Task from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks:Task[];
  constructor(private taskService:TaskService){

  }
  ngOnInit():void{
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks=tasks
    })
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((e)=>e.id!=task.id)
    })
  }
  toggleTask(task:Task){
    task.reminder = !task.reminder
    this.taskService.toggleTask(task).subscribe()
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task)
    })
  }
}
