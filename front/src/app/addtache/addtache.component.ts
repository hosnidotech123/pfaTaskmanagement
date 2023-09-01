import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tache } from '../model/Tache';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrls: ['./addtache.component.css']
})
export class AddtacheComponent implements OnInit {
  
  
   tacheForm!: FormGroup;

  constructor(private fb: FormBuilder,private tacheService:TacheService) {}
 

  


  ngOnInit(): void {
    this.tacheForm=this.fb.group({
      description:this.fb.control('',[Validators.required]),
      completed:this.fb.control(false,[Validators.required]),
      date_debut:this.fb.control(null,[Validators.required]),
      date_fin:this.fb.control(null,[Validators.required])

    })
  }

  saveTache(){
    if(this.tacheForm.valid){
      const tache:Tache=this.tacheForm.value
      this.tacheService.saveTache(tache).subscribe((res)=>{
        console.log('API Response:', res);
        this.tacheForm.reset()

      },
      error => {
        console.error('API Error:', error);
        // Handle error
      })
    }
      
   }


 

   
   



}
