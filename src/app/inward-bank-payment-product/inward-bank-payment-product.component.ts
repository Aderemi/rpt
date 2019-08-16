import { Component, OnInit, ChangeDetectorRef } from '@angular/core';





@Component({
  selector: 'app-inward-bank-payment-product',
  templateUrl: './inward-bank-payment-product.component.html',
  styleUrls: ['./inward-bank-payment-product.component.css']
})
export class InwardBankPaymentProductComponent implements OnInit {

 
  show = true;
 

  //view elemnt control
  ref: boolean;
  cod: boolean;
  des: boolean;
  sub: boolean;
  sta: boolean;
  efe: boolean;
  savBtn: boolean = true;
  savCloBtn: boolean = true;
  vieBtn: boolean;
  appBtn: boolean;
  canBtn: boolean = true;
  cloBtn: boolean;
  modBtn: boolean;
  subBtn: boolean;

 

  
  constructor() {
     
  }
  ngOnInit(){

  }
}
