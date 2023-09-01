import { Component, OnInit } from '@angular/core';
import { TacheService } from '../services/tache.service';
import { Tache } from '../model/Tache';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollaborateurService } from '../services/collaborateur.service';
import { Collaborateur } from '../model/Collaborateur';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  collForm!: FormGroup;

  constructor(private tacheService:TacheService,private fb:FormBuilder,private cService:CollaborateurService){}

   taches:Array<Tache>=[]

   getTache(){
    this.tacheService.getTaches().subscribe(res=>{
      //  this.collaborateurs=res.body
        console.log(res)
        this.taches= res as unknown as Tache[]
        })
    
   }

   saveCollaborateur(){
      
        const collaborateur:Collaborateur=this.collForm.value
        //   alert(JSON.stringify(collaborateur))
          // this.collForm.reset()
          this.cService.saveCollaborateur(collaborateur).subscribe(res=>{
            console.log(res)
            this.collForm.reset()
          },
          error=>{
            console.log(error)
          })
        // console.log(collaborateur)
   }


  ngOnInit(): void {
    this.getTache()
    this.collForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      id_tache: [null, Validators.required],
    });

    
  }

}
