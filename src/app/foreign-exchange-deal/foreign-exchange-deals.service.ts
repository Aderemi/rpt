import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
import { ForeignExchangeDeal } from './foreign-exchange-deal';


@Injectable({
  providedIn: 'root'
})
export class ForeignExchangeDealsService {
  foreignExchDeals: ForeignExchangeDeal;

  constructor(private http: HttpClient
    // , private url: GlobalUrl
    ) { }

  // //private baseUrl:String = 'http://localhost:5002';
  // public newFx(fxDeals) {
  //   return this.http.post(this.url.baseUrl + '/api/foreignExchangeDeal', fxDeals, { observe: 'response' });

  // }
  // public getFxDeals() {
  //   return this.http.get<ForeignExchangeDeal[]>(this.url.baseUrl + '/api/foreignExchangeDeals');
  // }
  // public updateFx(charge) {
  //   return this.http.put(this.url.baseUrl + '/api/foreignExchangeDeals', charge);
  // }

  // public getFx(id: number) {
  //   return this.http.get<ForeignExchangeDeal>(this.url.baseUrl + '/api/foreignExchangeDeal' + '/' + id);
  // }
  // public deleteFx(id: number) {
  //   return this.http.delete(this.url.baseUrl + '/api/foreignExchangeDeal' + '/' + id);
  // }
  // getFilter(fx){
  //   return this.http.post<ForeignExchangeDeal[]>(this.url.baseUrl+"/api/fxdeals/filter", fx);
  // }
}