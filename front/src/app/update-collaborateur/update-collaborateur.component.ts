import { Component, OnInit } from '@angular/core';
import { TacheService } from '../services/tache.service';
import { Tache } from '../model/Tache';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaborateurService } from '../services/collaborateur.service';

@Component({
  selector: 'app-update-collaborateur',
  templateUrl: './update-collaborateur.component.html',
  styleUrls: ['./update-collaborateur.component.css']
})
export class UpdateCollaborateurComponent implements OnInit {
  id!:number
  taches!:Array<Tache>

  collupForm=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    id_tache: new FormControl(0),
    
  })
  

  constructor(private collService:CollaborateurService,private tacheService:TacheService,private route:ActivatedRoute,private router:Router){}

  getTaches(){
    this.tacheService.getTaches().subscribe(res=>{
      //  this.collaborateurs=res.body
        console.log(res)
        this.taches= res as unknown as Tache[]
        })
    
   }
   getCollbyId(id:number){
    this.collService.getCollaborateur(id).subscribe(res=>{
      this.collupForm= new FormGroup({
            name: new FormControl(res["name"]),
            email: new FormControl(res["email"]),
            id_tache: new FormControl(res["id_tache"])
            
          })
    },error=>{
      console.log(error)
    })

}

   updateCollaborateur(){
    this.collService.updateCollaborateur(this.id,this.collupForm.value).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })

    this.router.navigate(['/admin/collaborateurs'])

   }


  ngOnInit(): void {
    this.getTaches()
    this.route.params.subscribe(params=>this.id=+params['id'])
    this.getCollbyId(this.id)
    console.log(this.taches)
    
   
  }

}
