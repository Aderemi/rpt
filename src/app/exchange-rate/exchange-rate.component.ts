import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from './exchange-rate';
import { ExchangeRateService } from './exchange-ratetype.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { ReferenceCurrency } from '../currency/reference-currency';
// import { ReferenceCurrencyService } from '../currency/reference-currency.service';
import { ExchangeRatetype } from './exchange-ratetype';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  exchangerate:ExchangeRate = new ExchangeRate();
  ratetypes : ExchangeRatetype[];
  //used for currency Listing
  // currencies : ReferenceCurrency[];
  constructor(private exchrateService: ExchangeRateService, private router: Router, 
    private activatedroute: ActivatedRoute,
    // private currencyService : ReferenceCurrencyService
    ) { }



  createExchRatetype(){
  
    this.exchrateService.newExchRate(this.exchangerate).subscribe((data=>{
      console.log('Exchange rate created');
      this.router.navigate(['/exchangerates']);
    }),(err=>{
      console.log('Error creating exchange rate ');
    }))
  }

  gotoExchangeRates(){
    this.router.navigate(['/exchangerates']);
  //  window.location.href = 'http://localhost:4200/accounttypes';
  }
cancel(){
  this.gotoExchangeRates();
}
  ngOnInit() {
    this.activatedroute.params.subscribe((data) => {
      console.log(data.id);
      this.exchangerate.id = data.id;
      this.getExchangeRateById(this.exchangerate.id)
      // this.getCurrencies();
      this.getExchangeRateTypes();
      
    });
   // this.accounttype =  this.accounttypeService.getAccounttype();
  }
  // getCurrencies()
  // {
  //   this.currencyService.getCurrencies().subscribe((data=>{
  //     this.currencies = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));
  // }

  getExchangeRateTypes()
  {
    this.exchrateService.getExchRatetypes().subscribe((data=>{
      this.ratetypes = data;
      console.log(data);
    
    }),(err=>{
 
    }));
  }  
  getExchangeRateById(id){
    this.exchrateService.getExchangeRate(id).subscribe((data) => 
    {
      this.exchangerate = data;
    }
  );
  }  

}
