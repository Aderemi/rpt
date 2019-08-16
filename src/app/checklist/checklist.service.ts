import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
// import { Checklist } from './checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  // checklist:Checklist;

  
  // constructor(private http:HttpClient,private url:GlobalUrl) { }

  // //private baseUrl:String = 'http://localhost:5002';
  //  public newChecklist(checklist){
  //    return this.http.post(this.url.baseUrl+'/api/checklist',checklist);
 
  //  }
  //  public getChecklists(){
  //    return this.http.get<Checklist[]>(this.url.baseUrl+'/api/checklists');
  //  }
  //  public updateChecklist(checklist){
  //    return this.http.put(this.url.baseUrl+'/api/checklists',checklist);
  //  }
 
  //  public getChecklist(id:number){
  //    return this.http.get<Checklist>(this.url.baseUrl+'/api/checklist'+'/'+id);
  //  }
  //  public deleteChecklist(id:number){
  //    return this.http.delete(this.url.baseUrl+'/api/checklist'+'/'+id);
  //  }
 

}
