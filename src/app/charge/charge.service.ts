import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
// import { Charge } from './charge';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {
  // charge:Charge;

  constructor(private http:HttpClient, 
    // private url:GlobalUrl
    ) { }

  //private baseUrl:String = 'http://localhost:5002';
  
  //  public newCharge(charge){
  //    return this.http.post(this.url.baseUrl +'/api/charge',charge);
 
  //  }
  //  public getCharges(){
  //    return this.http.get<Charge[]>(this.url.baseUrl+'/api/charges');
  //  }
  //  public updateCharge(charge){
  //    return this.http.put(this.url.baseUrl+'/api/charges',charge);
  //  }
 
  //  public getCharge(id:number){
  //    return this.http.get<Charge>(this.url.baseUrl+'/api/charge'+'/'+id);
  //  }
  //  public deleteCharge(id:number){
  //    return this.http.delete(this.url.baseUrl+'/api/charges'+'/'+id);
  //  }
  //  getFilter(charge){
  //    console.log(charge)
  //   return this.http.post<Charge[]>(this.url.baseUrl+"/api/charges/filter", charge);
  // }

}
