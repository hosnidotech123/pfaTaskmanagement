import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tache } from '../model/Tache';
import { TacheService } from '../services/tache.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  constructor(private tacheService:TacheService, public authService:AuthenticationService){

  }

  taches:Array<Tache>=[]

  getTaches(){
    this.tacheService.getTaches().subscribe(res=>{
      //  this.collaborateurs=res.body
        console.log(res)
        this.taches= res as unknown as Tache[]
        })
    
   }

   DeleteTache(tache:Tache){
    if(confirm("Etes vous sure")){
     this.tacheService.deleteTache(tache).subscribe({
      next: value=>{
          this.taches=this.taches.filter(t=>t.id!=tache.id)
      }
     })
  }
  }



  ngOnInit(): void {
    this.getTaches()
   
    
  }

}
