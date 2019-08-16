import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-import-letter-credit-product',
  templateUrl: './import-letter-credit-product.component.html',
  styleUrls: ['./import-letter-credit-product.component.css']
})
export class ImportLetterCreditProductComponent implements OnInit {


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
   
 }

}
