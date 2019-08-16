import { Component, OnInit } from '@angular/core';
import { ExchangeRatetype } from './exchange-ratetype';
import { ExchangeRateService } from './exchange-ratetype.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchange-rate-type',
  templateUrl: './exchange-rate-type.component.html',
  styleUrls: ['./exchange-rate-type.component.css']
})
export class ExchangeRateTypeComponent implements OnInit {



  exchangeratetype:ExchangeRatetype = new ExchangeRatetype();
  constructor(private exchrateService: ExchangeRateService, private router: Router, 
    private activatedroute: ActivatedRoute) { }



  createExchRatetype(){
  
    this.exchrateService.newExchRatetype(this.exchangeratetype).subscribe((data=>{
      console.log('Exchange rate types created');
      this.router.navigate(['/exchangeratetypes']);
    }),(err=>{
      console.log('Error creating exchange rate type');
    }))
  }

  gotoExchangeRatetypes(){
    this.router.navigate(['/exchangeratetypes']);
  //  window.location.href = 'http://localhost:4200/accounttypes';
  }
cancel(){
  this.gotoExchangeRatetypes();
}
  ngOnInit() {
    this.activatedroute.params.subscribe((data) => {
      console.log(data.id);
      this.exchangeratetype.id = data.id;
      this.getExchangeRateTypeById(this.exchangeratetype.id)
    });
   // this.accounttype =  this.accounttypeService.getAccounttype();
  }

  getExchangeRateTypeById(id){
    this.exchrateService.getExchangeRatetype(id).subscribe((data) => 
    {
      this.exchangeratetype = data;
    }
  );
  }  

}

