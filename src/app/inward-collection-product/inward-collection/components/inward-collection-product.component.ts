import { Component, OnInit, ChangeDetectorRef } from '@angular/core';





@Component({
  selector: 'app-inward-collection-product',
  templateUrl: './inward-collection-product.component.html',
  styleUrls: ['./inward-collection-product.component.css']
})
export class InwardCollectionProductComponent implements OnInit {
 

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
