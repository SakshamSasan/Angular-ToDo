import { Component, Output, EventEmitter,OnInit } from '@angular/core';
import Task from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() submitForm:EventEmitter<Task> = new EventEmitter()
  showAddTask:boolean;
  text:string;
  day:string;
  reminder:boolean=false;

  constructor(private ui:UiService){

  }
  ngOnInit(): void {
    this.ui.onToggle().subscribe(val=>this.showAddTask=val)
  }

  onSubmit(){
    if(!this.text||!this.day){
      alert('Please enter both Description and Day fields');
      return;
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.submitForm.emit(newTask)
    //set values of form back to default
    this.text=''
    this.day=''
    this.reminder=false
  }
}
