import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
import { PartyCategory } from './party-category';


@Injectable({
  providedIn: 'root'
})
export class PartyCategoryService {

  party:PartyCategory;

  // constructor(private http:HttpClient, private url:GlobalUrl) { }

  // //private baseUrl:String = 'http://localhost:5002';
  //  public newParty(charge){
  //    return this.http.post(this.url.baseUrl+'/api/partyCategory',charge);
 
  //  }
  //  public getParties(){
  //    return this.http.get<PartyCategory[]>(this.url.baseUrl+'/api/partyCategories');
  //  }
  //  public updateParty(charge){
  //    return this.http.put(this.url.baseUrl+'/api/partyCategory',charge);
  //  }
 
  //  public getParty(id:number){
  //    return this.http.get<PartyCategory>(this.url.baseUrl+'/api/partyCategory'+'/'+id);
  //  }
  //  public deleteParty(id:number){
  //    return this.http.delete(this.url.baseUrl+'/api/partyCategories'+'/'+id);
  //  }
  //  getFilter(partycategory){
  //   return this.http.post<PartyCategory[]>(this.url.baseUrl+"/api/partyCategories/filter", partycategory);
  // }
}

