import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  actions:Array<any>=[
    // {title:"home","path":"home",icon:"house"},
    // {title:"products","path":"products",icon:"search"},
    // {title:"new-product","path":"newproduct",icon:"plus-circle"},
    {title:"Collaborateur",path:"/collaborateurs",icon:"bi bi-person"},
    {title:"Taches",path:"taches",icon:"bi bi-list-task"},
    {title:"Form",path:"form",icon:"bi bi-card-list"},
    {title:"AddTask",path:"addtask",icon:"bi bi-clipboard-plus"},
    
  ]
     currentAction:any
  setCurrentAction=(action:any)=>{
      this.currentAction=action
  }

}
