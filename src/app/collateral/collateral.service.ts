//import { ExchangeRate} from './exchange-rates';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
import { CollateralType } from './collateral-type';
// import { Collateral } from './collateral';

@Injectable({
    providedIn: 'root'
  })

export class CollateralService
{
//     constructor(private http: HttpClient, private globalURL: GlobalUrl) { }
//     private baseUrl: String = this.globalURL.baseUrl + '/';
//   //  baseUrl: string = GlobalUrl.baseUrl;


//     public newCollateralType(collateraltype) {
//       return this.http.post(this.baseUrl + 'api/collateraltype', collateraltype);
  
//     }
//     public getCollateralType(id: number) {
//       return this.http.get<CollateralType>(this.baseUrl + 'api/collateraltype' + '/' + id);
//     }
//     public getCollateralTypes() {
//       return this.http.get<CollateralType[]>(this.baseUrl + 'api/collateraltypes');
//     }
//     public updateCollateralType(collateraltype) {
//       return this.http.put(this.baseUrl + 'api/collateraltype', collateraltype);
//     }
//     public deleteCollateralType(id: number) {
//       return this.http.delete(this.baseUrl + 'api/collateraltype' + '/' + id);
//     }
//     public query(collateraltype: CollateralType) {
//       return this.http.post<CollateralType[]>(this.baseUrl + 'api/search/collateraltype', collateraltype);
//     }
//     public newCollateral(collateral) 
//     {
//         return this.http.post(this.baseUrl + 'api/collateral', collateral);
    
//       }
//       public getCollateral(id: number) {
//         return this.http.get<Collateral>(this.baseUrl + 'api/collateral' + '/' + id);
//       }
//       public getCollaterals() {
//         return this.http.get<Collateral[]>(this.baseUrl + 'api/collaterals');
//       }
//       public updateCollateral(collateral) {
//         return this.http.put(this.baseUrl + 'api/collateral', collateral);
//       }
//       public deleteCollateral(id: number) {
//         return this.http.delete(this.baseUrl + 'api/collateral' + '/' + id);
//       }
//       public queryCollateral(collateral: Collateral) {
//         return this.http.post<Collateral[]>(this.baseUrl + 'api/search/collateral', collateral);
      // }    
}