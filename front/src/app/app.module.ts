import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { TacheComponent } from './tache/tache.component';
import { FormComponent } from './form/form.component';
import { AddtacheComponent } from './addtache/addtache.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { UpdateCollaborateurComponent } from './update-collaborateur/update-collaborateur.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    CollaborateurComponent,
    TacheComponent,
    FormComponent,
    AddtacheComponent,
    UpdateTacheComponent,
    UpdateCollaborateurComponent,
    LoginComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
