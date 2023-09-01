import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../model/Collaborateur';
import { Tache } from '../model/Tache';
import { CollaborateurService } from '../services/collaborateur.service';
import { TacheService } from '../services/tache.service';
import { AuthenticationService } from '../services/authentication.service';




@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

   constructor(private cService:CollaborateurService , private tacheSerive:TacheService , public authService:AuthenticationService){

   }

   collaborateurs:Array<Collaborateur>=[]
   taches:Array<Tache>=[]
    
  
  
   getCollaborateurs(){
    this.cService.getCollaborateurs().subscribe(res=>{
      //  this.collaborateurs=res.body
        this.collaborateurs= res as unknown as Collaborateur[]
      
    })
    
   } 


   getTache(){
    this.tacheSerive.getTaches().subscribe(res=>{
      //  this.collaborateurs=res.body

        this.taches= res as unknown as Tache[]
        })
    
   }

   DeleteCollaborateur(coll:Collaborateur){
    if(confirm("Etes vous sure")){
     this.cService.deleteCollaborateur(coll).subscribe({
      next: value=>{
          this.collaborateurs=this.collaborateurs.filter(t=>t.id!=coll.id)
      }
     })
  }
  }

   getTachebyIdColl(id:number):Tache|Tache{
    for(let tache of this.taches){
        if(tache.id==id){
          return tache;
        }
    }
       return this.taches[0]
   }

     
  ngOnInit(): void {
    this.getCollaborateurs()
    this.getTache()
  }

  

  


}
