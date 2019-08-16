
//import { ExchangeRate} from './exchange-rates';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UpdateRule } from './updaterule';
import { UpdateruleCategory } from './updaterule-category';

@Injectable({
    providedIn: 'root'
  })

export class UpdateRuleService
{
    // private updaterule: UpdateRule;
    private updaterulecategory: UpdateruleCategory;
    constructor(private http: HttpClient) { }
    private baseUrl: String = 'http://localhost:5002/';


    public newUpdateruleCategory(updatecategoryrule) {
      return this.http.post(this.baseUrl + 'api/updatecategoryrule', updatecategoryrule);
  
    }
    public getUpdateruleCategory(id: number) {
      return this.http.get<UpdateruleCategory>(this.baseUrl + 'api/updatecategoryrule' + '/' + id);
    }
    public getUpdateruleCategorys() {
      return this.http.get<UpdateruleCategory[]>(this.baseUrl + 'api/updatecategoryrules');
    }
    public updateUpdateruleCategory(updaterulecategory) {
      return this.http.put(this.baseUrl + 'api/updatecategoryrule', updaterulecategory);
    }
    public deleteUpdateruleCategory(id: number) {
      return this.http.delete(this.baseUrl + 'api/updatecategoryrule' + '/' + id);
    }
    public query(updatecategoryrule: UpdateruleCategory) {
      return this.http.post<UpdateruleCategory[]>(this.baseUrl + 'api/search/updatecategoryrule', updatecategoryrule);
    }
    public newUpdateRule(updaterule) 
    {
        return this.http.post(this.baseUrl + 'api/updaterule', updaterule);
    
      }
      // public getUpdateRule(id: number) {
      //   return this.http.get<UpdateRule>(this.baseUrl + 'api/updaterule' + '/' + id);
      // }
      // public getUpdateRules() {
      //   return this.http.get<UpdateRule[]>(this.baseUrl + 'api/updaterules');
      // }
      public updateUpdateRule(updaterule) {
        return this.http.put(this.baseUrl + 'api/updaterule', updaterule);
      }
      public deleteUpdateRule(id: number) {
        return this.http.delete(this.baseUrl + 'api/updaterule' + '/' + id);
      }
      // public queryUpdateRule(updaterule: UpdateRule) {
      //   return this.http.post<UpdateRule[]>(this.baseUrl + 'api/search/updaterule', updaterule);
      // }    
}