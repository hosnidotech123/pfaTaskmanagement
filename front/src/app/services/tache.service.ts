import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../model/Tache';
 



@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }

public getTaches(): Observable<Tache>{
    return this.http.get<Tache>(`http://localhost:8085/tache`)
}
public getTache(id:number): Observable<Tache>{
  return this.http.get<Tache>(`http://localhost:8085/tache/${id}`)
}

public updateTache(id:number,tache:any){
  return this.http.put(`http://localhost:8085/tache/${id}`,tache)
}
    
public saveTache(tache: Tache):Observable<Tache> {
  return this.http.post<Tache>(`http://localhost:8085/tache`,tache)
  
}

public deleteTache(tache:Tache){
  return this.http.delete<any>(`http://localhost:8085/tache/${tache.id}`)
}






}
