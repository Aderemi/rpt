import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warrant-product',
  templateUrl: './warrant-product.component.html',
  styleUrls: ['./warrant-product.component.css']
})
export class WarrantProductComponent implements OnInit {


  // view elemnt control
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