import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from '../services/tache.service';
import { Tache } from '../model/Tache';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {

  id!:number
  tache!: Tache;
  tacheupdate!:Tache

  tacheupForm=new FormGroup({
    description: new FormControl(''),
    date_debut: new FormControl(''),
    date_fin: new FormControl(''),
    completed: new FormControl(false)
    
  })
  
  
  constructor(private route:ActivatedRoute , private tacheService:TacheService,private router:Router){}


   getTachebyId(id:number){
      this.tacheService.getTache(id).subscribe(res=>{
        this.tacheupForm= new FormGroup({
              description: new FormControl(res["description"]),
              date_debut: new FormControl(res["date_debut"]),
              date_fin: new FormControl(res["date_fin"]),
              completed: new FormControl(res["completed"])
            })
      },error=>{
        console.log(error)
      })

  }
  updateTache(){
    this.tacheService.updateTache(this.id,this.tacheupForm.value).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })

    this.router.navigate(['admin/taches'])

  }


  
  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.getTachebyId(this.id)
 

  }
  


}
