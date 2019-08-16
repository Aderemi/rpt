import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../class/global-url';
import { InstrumentRegister } from './registration';
// import { ProductSubCategory } from '../class/product-sub-category';
// import { Customer } from '../modules/staticdata/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  private registration = new InstrumentRegister();
  trigger = 0;
  view :number;
  data:any;
  constructor(private _http: HttpClient,
    // private url : GlobalUrl
    ) {
    this.view = 0;
  }

  // findAllRegistrations() {
  //   // return this._http.get(this.baseUrl, this.options).pipe(map((res : Response) => res.json()));
  //   return this._http.get<InstrumentRegister[]>(this.url.baseUrl+ '/api/instrumentRegisters');
  // }

  // getData(){
  //   return this.data;
  // }
  // setData(data:any){
  //   this.data = data
  // }
  // createRegistration(registration: InstrumentRegister) {
  //   return this._http.post<InstrumentRegister>(this.url.baseUrl+'/api/instrumentRegister', registration, { observe: 'response' });
  // }
 
  // // modify record
  // updateRegistration(registration: InstrumentRegister) {
  //   // return this._http.put(this.baseUrl, JSON.stringify(bank), this.options).pipe(map((res : Response) => res.json()));
  //   return this._http.put(this.url.baseUrl +"/api/instrumentRegister", registration);
  // }

  // public getRegistrations(){
  //   return this._http.get<InstrumentRegister[]>(this.url.baseUrl+ '/api/instrumentRegister' );
  // }

  // public getCustomerName(customerNumber:String){
  //   return this._http.get<Customer>(this.url.baseUrl +"/api/search/customerNumber/"+ customerNumber)
  // }
 
  // public getfindOneInstrumentRegisterd(id){
  //   return this._http.get<InstrumentRegister>(this.url.baseUrl+'/api/instrumentRegister'+'/'+id );
  // }
  // // getRegistration(id: number) {
  // //   // return this._http.get(this.baseUrl, this.options)
  // //   ///              .pipe(map((response : Response) => response.json()));
  // //   return this._http.get<Registration>(this.baseUrl +'/api/outwardCustPaymentProduct'+ '/' + id);
  // // }
  // deleteRegistration(id: number) {
  //   console.log(' from service, deleting: ' + id);
  //   return this._http.delete(this.url.baseUrl + '/' + id);
  // }

  // setter(registration: InstrumentRegister) {
  //   this.registration = registration;
  //   if (registration.id === undefined) {
  //     this.registration = new InstrumentRegister();
  //   }



  // }

  // getView(){
  //   return this.view
  // }
  // setView(view:number){
  //   this.view = view

  // }
  // getter() {
  //   return this.registration;
  // }

  // getTrigger() {
  //   return this.trigger;
  // }
  // setTrigger(trigger: number) {
  //   this.trigger = trigger;
  // }

  // getFilter(ilc: any){
  //   console.log(ilc);
  //   return this._http.post<ProductSubCategory[]>(this.url.baseUrl+"/api/search/productSubCategories", ilc);
  // }

  // public query(register: InstrumentRegister) {
  //   console.log(register);
  //   return this._http.post<InstrumentRegister[]>(this.url.baseUrl + '/api/search/register', register);
  // }

  // public customerTemplate(custTemp){
  //   return this._http.post<Object[]>(this.url.baseUrl+"/api/customerTemplate/filter", custTemp)
  // }
  // public generalTemplate(genTemp){
  //   return this._http.post<Object[]>(this.url.baseUrl+"/api/generalTemplates/filter", genTemp)
  // }

}

