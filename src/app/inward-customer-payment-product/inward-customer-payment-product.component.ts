import { Component, OnInit, ChangeDetectorRef } from '@angular/core';





@Component({
  selector: 'app-inward-customer-payment-product',
  templateUrl: './inward-customer-payment-product.component.html',
  styleUrls: ['./inward-customer-payment-product.component.css']
})
export class InwardCustomerPaymentProductComponent implements OnInit {
 
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

  ngOnInit(){}

}






































