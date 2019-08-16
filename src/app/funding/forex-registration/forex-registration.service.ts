import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../../../class/global-url';
// import { ForexRegistration } from './forex-registration';
// import { ProductSubCategory } from '../../../class/product-sub-category';
// import { ForexRequest } from '../forex-request/forex-request';

@Injectable({
  providedIn: 'root'
})
export class ForexRegistrationService {

  constructor(private http:HttpClient
    // ,private url:GlobalUrl
    ) { }

  // public createForexRegistration(fxRegistration){
  //   return this.http.post<ForexRegistration>(this.url.baseUrl+'/api/forexRegistration',fxRegistration);

  // }
  // public getRegisteredFxRequests(){
  //   return this.http.get<ForexRegistration[]>(this.url.baseUrl+'/api/forexRegistrations');
  // }
  // public updateRegisteredFxRequest(fxBidSession){
  //   return this.http.put(this.url.baseUrl+'/api/forexRegistration',fxBidSession);
  // }

  // public getRegisteredFxRequest(id:number){
  //   return this.http.get<ForexRegistration>(this.url.baseUrl+'/api/forexRegistration'+'/'+id);
  // }
  // public deleteRegisteredFxRequest(id:number){
  //   return this.http.delete(this.url.baseUrl+'/api/forexRegistration'+'/'+id);
  // }
  // getFilter(code: any){
  //   return this.http.get<ProductSubCategory[]>(this.url.baseUrl+'/api/search/productSubCategoriesCode' +'/'+ code);
  // }
  
  // public getFxRequests(request: any) {
  //   return this.http.post<ForexRequest[]>(this.url.baseUrl + '/api/search/forexRegistration', request);
  // }


}
