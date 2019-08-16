import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-outward-bank-payment',
  templateUrl: './outward-bank-payment.component.html',
  styleUrls: ['./outward-bank-payment.component.css']
})
export class OutwardBankPaymentComponent implements OnInit {

  isEmpty : boolean = true;
  constructor() { }

  ngOnInit() {
    // this.isEmpty = false;
    this.isEmpty = true;
  }

}
