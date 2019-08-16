import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { InstrumentRegister } from '../registration/registration';
// import { ForeignExchangeDeal } from './foreign-exchange-deal';
// import { ForeignExchangeDealsService } from './foreign-exchange-deals.service';
// import { Currency } from '../modules/staticdata/currency/currency';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { ServerMessagePopUp } from '../class/server-message-pop-up';


@Component({
  selector: 'app-foreign-exchange-deal',
  templateUrl: './foreign-exchange-deal.component.html',
  styleUrls: ['./foreign-exchange-deal.component.css']
})
export class ForeignExchangeDealComponent implements OnInit {
//   @Input() instrumentRegister  : InstrumentRegister;
//   foreignExchangeDeal:ForeignExchangeDeal = new ForeignExchangeDeal(); 
//   currencies:Currency[];
//   erx:string;
//   constructor(private router:Router, private smp:ServerMessagePopUp, private currService:CurrencyService, private fxService:ForeignExchangeDealsService, private activatedRoute:ActivatedRoute) { }


//   createForeignExchDeals(){
//     this.foreignExchangeDeal.instrumentRegister = this.instrumentRegister;
//     console.log('Successfully created Foreign Exchange Deals');
//     this.fxService.newFx(this.foreignExchangeDeal).subscribe((data =>{
//       console.log('Successfully created Foreign Exchange Deals');
      
//       this.router.navigate(['/foreignExchangeDeals']);
//       if (data.status == 200){
//         this.smp.popUpAlertSuccess();
//       }

//     }),
//     (err=>{
//      // console.log(JSON.stringify(err.error)+ "Server response");
//       this.erx = "";
//      this.erx += "<div class='pop-upx-div'>";
//     // console.log(err.prototype);
//      for (let  i in err.error){
//       this.erx += "<li class='pop-up'><span class='fa fa-close' style='color : red;'></span> "
//       +err.error[i]+
//       "</li>";
//      }

//       this.erx += "</div>";
//       this.smp.popUpAlertError(this.erx);
//       console.log('could not create a foreign exchange deal');
//     })
//   )}

//   linkUrl(url: string){
//     this.router.navigate([url])
//   }
//   getFxById(id){
//     this.fxService.getFx(id).subscribe(data=>{
//       this.foreignExchangeDeal=data;

//     })
//   }
//   cancel(){
//     this.router.navigate(['/foreignExchangeDeals']);
//   }
  ngOnInit() {
   
//     this.activatedRoute.params.subscribe((data) => {
//       console.log(data.id);
//       this.foreignExchangeDeal.id = data.id;
//       this.getFxById(this.foreignExchangeDeal.id);
//   });
 
//   this.curr();
}

// curr(){
//   this.currService.getCurrencies().subscribe(data=>{
//     this.currencies = data;
// });

// }

}