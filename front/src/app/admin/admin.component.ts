import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public authService:AuthenticationService , private router:Router){

  }

  ngOnInit(): void {
    
  }

  handleLogout(){
    this.authService.logout().subscribe({
      next:()=>{
        this.router.navigateByUrl('/login')
      }
    })
  }

  actions:Array<any>=[
    // {title:"home","path":"home",icon:"house"},
    // {title:"products","path":"products",icon:"search"},
    // {title:"new-product","path":"newproduct",icon:"plus-circle"},
    {title:"Collaborateur",path:"collaborateurs",icon:"bi bi-person"},
    {title:"Taches",path:"taches",icon:"bi bi-list-task"},
    {title:"Form",path:"form",icon:"bi bi-card-list"},
    {title:"AddTask",path:"addtask",icon:"bi bi-clipboard-plus"},
    
  ]

}
