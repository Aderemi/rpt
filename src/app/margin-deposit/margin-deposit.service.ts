//import { ExchangeRate} from './exchange-rates';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
// import { MarginDeposit } from './margin-deposit';
import { MarginDepositType } from './margin-deposit-type';

@Injectable({
    providedIn: 'root'
  })

export class margindepositService
{
    constructor(private http: HttpClient
      // , private globalURL: GlobalUrl
      ) { }
  //   private baseUrl: String = this.globalURL.baseUrl + '/';
  // //  baseUrl: string = GlobalUrl.baseUrl;


  //   public newMarginDepositType(margindeposittype) {
  //     return this.http.post(this.baseUrl + 'api/margindeposittype', margindeposittype);
  
  //   }
  //   public getMarginDepositType(id: number) {
  //     return this.http.get<MarginDepositType>(this.baseUrl + 'api/margindeposittype' + '/' + id);
  //   }
  //   public getMarginDepositTypes() {
  //     return this.http.get<MarginDepositType[]>(this.baseUrl + 'api/margindeposittypes');
  //   }
  //   public updateMarginDepositType(margindeposittype) {
  //     return this.http.put(this.baseUrl + 'api/margindeposittype', margindeposittype);
  //   }
  //   public deleteMarginDepositType(id: number) {
  //     return this.http.delete(this.baseUrl + 'api/margindeposittype' + '/' + id);
  //   }
  //   public query(margindeposittype: MarginDepositType) {
  //     return this.http.post<MarginDepositType[]>(this.baseUrl + 'api/search/margindeposittype', margindeposittype);
  //   }
  //   public newMarginDeposit(margindeposit) 
  //   {
  //       return this.http.post(this.baseUrl + 'api/margindeposit', margindeposit);
    
  //     }
  //     public getMarginDeposit(id: number) {
  //       return this.http.get<MarginDeposit>(this.baseUrl + 'api/margindeposit' + '/' + id);
  //     }
  //     public getMarginDeposits() {
  //       return this.http.get<MarginDeposit[]>(this.baseUrl + 'api/margindeposits');
  //     }
  //     public updateMarginDeposit(margindeposit) {
  //       return this.http.put(this.baseUrl + 'api/margindeposit', margindeposit);
  //     }
  //     public deleteMarginDeposit(id: number) {
  //       return this.http.delete(this.baseUrl + 'api/margindeposit' + '/' + id);
  //     }
  //     public queryMarginDeposit(margindeposit: MarginDeposit) {
  //       return this.http.post<MarginDeposit[]>(this.baseUrl + 'api/search/margindeposit', margindeposit);
  //     }    
}