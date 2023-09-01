import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  userForm! :FormGroup

  constructor(private fb:FormBuilder , private authService:AuthenticationService, private router:Router ){

    }

  


  ngOnInit(): void {
      this.userForm=this.fb.group({
        username: this.fb.control(''),
        password: this.fb.control('')
      })

  }

  handleLogin() {
    let username=this.userForm.value.username
    let password=this.userForm.value.password
    this.authService.Login(username,password).subscribe({
      next:(appUser)=>{
        this.authService.authenticateUser(appUser).subscribe({
          next:()=>{
              this.router.navigateByUrl('/admin/collaborateurs')
          }
        })

      },error:()=>{

      }
    })
   
  }
      
  

}
