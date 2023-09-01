import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaborateur } from '../model/Collaborateur';
import { Tache } from '../model/Tache';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor( private http:HttpClient) { }



public getCollaborateurs(): Observable<Collaborateur>{
    return this.http.get<Collaborateur>(`http://localhost:8085/collaborateur`)
}

public getCollaborateur(id:number): Observable<Collaborateur>{
  return this.http.get<Collaborateur>(`http://localhost:8085/collaborateur/${id}`)
}

public saveCollaborateur(collaborateur:Collaborateur):Observable<Collaborateur> {
return this.http.post<Collaborateur>(`http://localhost:8085/collaborateur`,collaborateur)

}

public updateCollaborateur(id:number,coll:any){
  return this.http.put(`http://localhost:8085/collaborateur/${id}`,coll)
}

public deleteCollaborateur(coll:Collaborateur){
  return this.http.delete<any>(`http://localhost:8085/collaborateur/${coll.id}`)
}






// public checkTask=(task:Task):Observable<Task>=>{
// return this.http.patch<Task>(`http://localhost:3000/products/${task.id}`,{
//   checked:!product.checked
// })
// }

// public deleteCollaborateur(collaborateur:Collaborateur){
// return this.http.delete<any>(`http://localhost:3000/collaborateur/${collaborateur.id}`)
// }

// saveProduct(collaborateur: Collaborateur):Observable<Collaborateur> {
// return this.http.post<Product>(`http://localhost:3000/collaborateur`,collaborateur)

// }

// public searchProduct(keyword:string):Observable<Array<Product>>{
// return this.http.get<Array<Product>>(`http://localhost:3000/products?name_like=${keyword}`)
// }






}
