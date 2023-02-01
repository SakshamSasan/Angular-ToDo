import { Component, Input, Output, EventEmitter } from '@angular/core';
import Task from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onToggleTask:EventEmitter<Task> = new EventEmitter()
  faTrash=faTrash
  faCircle=faCircle

  onDelete(task:Task){
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task){
    this.onToggleTask.emit(task)
  }
}
