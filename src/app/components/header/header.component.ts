import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string='Task Tracker'
  showAddTask:boolean;
 

  constructor(private ui:UiService, private router:Router){

  }
  ngOnInit(): void {
    this.ui.onToggle().subscribe(val=>this.showAddTask=val)
  }
  toggleAddTask(){
    this.ui.toggleAddtask()
  }
  isOnRoute(route:string):boolean{
    return this.router.url==route
  }
}
