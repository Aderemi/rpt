import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  naira:number=0;
  dollar: number=0;
  rate:number=0;

  constructor() { }

  ngOnInit() {  
    
  }
  calNaira(){
    this.naira = this.rate * this.dollar;
  }
  calDollar(){
    this.dollar = this.naira / this.rate;
  }

  calExchange(){
    this.naira = this.rate * this.dollar;
  }
  calBoth(){
    this.calNaira();
    this.calDollar();
  }

  print(){
    alert(this.naira +" " +"naira" + "=" + this.dollar + " " +"dollars");
  }
}
