import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outward-bank-payment-create',
  templateUrl: './outward-bank-payment-create.component.html',
  styleUrls: ['./outward-bank-payment-create.component.css']
})
export class OutwardBankPaymentCreateComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  storeRecord(){
      this.route.navigateByUrl("/outward-bank-payment/dashboard/currency");
  }
}
