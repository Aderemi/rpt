import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Currency } from '../modules/staticdata/currency/currency';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { MarginDeposit } from './margin-deposit';
// import { MarginDepositType } from './margin-deposit-type';
// import { margindepositService } from './margin-deposit.service';
// import { ServerMessagePopUp } from '../class/server-message-pop-up';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InstrumentRegister } from '../registration/registration';

@Component({
  selector: 'app-margin-deposit',
  templateUrl: './margin-deposit.component.html',
  styleUrls: ['./margin-deposit.component.css']
})
export class MarginDepositComponent implements OnInit {
  
  @Input() instrumentRegister : InstrumentRegister;
  @Input() enableFromParent : boolean;
  @Input() externalId : Number;

  // margindeposit:MarginDeposit = new MarginDeposit();
  // margintypes : MarginDepositType[];
  // //used for currency Listing
  // currencies : Currency[];
  constructor(
    // private marginService: margindepositService, private router: Router, 
    // private activatedroute: ActivatedRoute,    
    // private _activeModal: NgbActiveModal,
    // private currencyService : CurrencyService,private _smp: ServerMessagePopUp
    ) { }



//   createMarginDeposit(){
  
//     debugger
//     this.marginService.newMarginDeposit(this.margindeposit).subscribe((data=>{
//       console.log('Margin deposit created');
//       this._smp.popUpAlertMsgSuccess('Margin Deposit Created Successfully');
//      // this.router.navigate(['/margindeposits']);
//      this._activeModal.dismiss();
//      //this._activeModal.
     
//     }),(err=>{
//       console.log('Error creating margin deposit ');
//       this._smp.popUpAlertError(err);
//     }))
//   }

//   gotoMarginDeposits(){
//     this.router.navigate(['/margindeposits']);
//   //  window.location.href = 'http://localhost:4200/accounttypes';
//   }
// cancel(){
//   this.gotoMarginDeposits();
// }
  ngOnInit() {
//     this.activatedroute.params.subscribe((data) => {
//       console.log(data.id);
//       this.margindeposit.id = data.id;
//       this.margindeposit.instrumentRegister = this.instrumentRegister;
//       debugger
//       if (this.instrumentRegister)
//       {
//         this.margindeposit.id = this.externalId;
//       }

//       this.getCurrencies();
//       this.getMarginDepositTypes();
//       this.getMarginDepositById(this.margindeposit.id)      
      
//     });
//    // this.accounttype =  this.accounttypeService.getAccounttype();
//   }
//   getCurrencies()
//   {
//     this.currencyService.getCurrencies().subscribe((data=>{
//       this.currencies = data;
//       console.log(data);
    
//     }),(err=>{
 
//     }));
  }

//   getMarginDepositTypes()
//   {
//     this.marginService.getMarginDepositTypes().subscribe((data=>{
//       this.margintypes = data;
//       console.log(data);
    
//     }),(err=>{
 
//     }));
//   }  
//   getMarginDepositById(id){
//     this.marginService.getMarginDeposit(id).subscribe((data) => 
//     {
//       this.margindeposit = data;
//     }
//   );
//   }  
//   equals(o1, o2) {
//     if (o1 != null && o2 != null) {
//       console.log("-------------------")
//       console.log(o1.code)
//       console.log(o2.code)
//       console.log(o1.code == o2.code)
//       console.log("-------------------")
//       return o1.code == o2.code ? true : false;
//     }
//     return false;
//   }
}
