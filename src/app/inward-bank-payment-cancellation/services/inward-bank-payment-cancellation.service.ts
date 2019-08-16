import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from 'src/app/class/global-url';

@Injectable({
  providedIn: 'root'
})
export class InwardBankPaymentCancellationService {

  
  constructor(private _http: HttpClient, 
    // private url : GlobalUrl
    ) { }


  // createInwardBankPaymentCancel(inwardCancel){
  //   return this._http.post<any>(this.url.baseUrl+"/api/inwardBankPaymentCancellation",inwardCancel, {observe : 'response'});
  // }
}
