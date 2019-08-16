import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Milestone } from '../class/milestone';

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {

  baseUrl:String = `http://localhost:8080/api`;
  private milestone:Milestone = new Milestone();
 
   constructor(private _http:HttpClient) { 
 
    
   }
 
   getMilestones(){

     return this._http.get<Milestone[]>(this.baseUrl+ '/milestones');
   }
 
   getMilestone(id:number){
     return this._http.get<Milestone>(this.baseUrl+ '/milestone'+ '/' + id);
   }
 
   deleteMilestone(id:number){
     return this._http.delete(this.baseUrl+ '/milestone/' + id);
   }
 
   createMilestone(milestone){
     return this._http.post(this.baseUrl+ '/milestone', milestone);
   }
 
   updateMilestone(milestone){
     return this._http.post(this.baseUrl+ '/milestone', milestone);
   }
 
   setter(milestone:Milestone){
     this.milestone = milestone;
   }
   getter(){
     return this.milestone;
   }
}
