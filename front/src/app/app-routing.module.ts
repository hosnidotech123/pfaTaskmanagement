import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CollaborateurComponent } from "./collaborateur/collaborateur.component";
import { TacheComponent } from "./tache/tache.component";
import { FormComponent } from "./form/form.component";
import { AddtacheComponent } from "./addtache/addtache.component";
import { UpdateTacheComponent } from "./update-tache/update-tache.component";
import { UpdateCollaborateurComponent } from "./update-collaborateur/update-collaborateur.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthenticationGuard } from "src/guards/authentication.guard";


const routes:Routes=[
    // {path:"home",component:HomeComponent},
    // {path:"products",component:ProductsComponent},
    // {path:"newproduct",component:NewProductComponent},
    // {path:"updateproduct/:id",component:UpdateProductComponent},
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"admin",component:AdminComponent,canActivate:[AuthenticationGuard],
        children:[
            {path:"collaborateurs",component:CollaborateurComponent},
            {path:"taches",component:TacheComponent},
            {path:"form",component:FormComponent},
            {path:"addtask",component:AddtacheComponent},
            {path:"updatetache/:id",component:UpdateTacheComponent},
            {path:"updatecollaborateur/:id",component:UpdateCollaborateurComponent},
            ]
    }


]

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)

export class AppRoutingModule{}