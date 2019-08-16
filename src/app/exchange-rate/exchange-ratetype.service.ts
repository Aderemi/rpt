import { ExchangeRatetype } from './exchange-ratetype';
//import { ExchangeRate} from './exchange-rates';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from './exchange-rate';

@Injectable({
    providedIn: 'root'
  })

export class ExchangeRateService
{
    private exchratetype: ExchangeRatetype;
    private exchrate: ExchangeRate;
    constructor(private http: HttpClient) { }
    private baseUrl: String = 'http://localhost:5002/';


    public newExchRatetype(exchratetype) {
      return this.http.post(this.baseUrl + 'api/exchratetype', exchratetype);
  
    }
    public getExchangeRatetype(id: number) {
      return this.http.get<ExchangeRatetype>(this.baseUrl + 'api/exchratetype' + '/' + id);
    }
    public getExchRatetypes() {
      return this.http.get<ExchangeRatetype[]>(this.baseUrl + 'api/exchratetypes');
    }
    public updateExchangeRatetype(exchratetype) {
      return this.http.put(this.baseUrl + 'api/exchratetype', exchratetype);
    }
    public deleteExchangeRatetype(id: number) {
      return this.http.delete(this.baseUrl + 'api/exchratetype' + '/' + id);
    }
    public query(exchratetype: ExchangeRatetype) {
      return this.http.post<ExchangeRatetype[]>(this.baseUrl + 'api/search/exchratetype', exchratetype);
    }
    public newExchRate(exchrate) 
    {
        return this.http.post(this.baseUrl + 'api/exchrate', exchrate);
    
      }
      public getExchangeRate(id: number) {
        return this.http.get<ExchangeRate>(this.baseUrl + 'api/exchrate' + '/' + id);
      }
      public getExchRates() {
        return this.http.get<ExchangeRate[]>(this.baseUrl + 'api/exchrates');
      }
      public updateExchangeRate(exchrate) {
        return this.http.put(this.baseUrl + 'api/exchrate', exchrate);
      }
      public deleteExchangeRate(id: number) {
        return this.http.delete(this.baseUrl + 'api/exchrate' + '/' + id);
      }
      public queryExchangeRate(exchrate: ExchangeRate) {
        return this.http.post<ExchangeRate[]>(this.baseUrl + 'api/search/exchrate', exchrate);
      }    
}