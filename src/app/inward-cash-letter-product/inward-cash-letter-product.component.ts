import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-inward-cash-letter-product',
  templateUrl: './inward-cash-letter-product.component.html',
  styleUrls: ['./inward-cash-letter-product.component.css']
})
export class InwardCashLetterProductComponent implements OnInit {

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

 ngOnInit(){
  this.savBtn = true;
  this.savCloBtn = true;
  this.canBtn = true;

  // debugger;
 }

}
