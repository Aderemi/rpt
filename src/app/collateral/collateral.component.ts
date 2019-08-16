import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Currency } from '../modules/staticdata/currency/currency';

// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { ServerMessagePopUp } from '../class/server-message-pop-up';
// import { Collateral } from './collateral';
// import { CollateralType } from './collateral-type';
// import { CollateralService } from './collateral.service';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { InstrumentRegister } from '../registration/registration';

@Component({
  selector: 'app-collateral',
  templateUrl: './collateral.component.html',
  styleUrls: ['./collateral.component.css']
})
export class CollateralComponent implements OnInit {

//   @Input() instrumentRegister : InstrumentRegister;
//   @Input() enableFromParent : boolean;
//   @Input() externalId : Number;
    
//   collateral:Collateral = new Collateral();
//   margintypes : CollateralType[];
//   //used for currency Listing
//   currencies : Currency[];
//   constructor(private marginService: CollateralService, private router: Router, 
//     private activatedroute: ActivatedRoute,
//     private _activeModal: NgbActiveModal,
//     private currencyService : CurrencyService,private _smp: ServerMessagePopUp) { }



//   createCollateral(){
  
//     debugger
//     this.marginService.newCollateral(this.collateral).subscribe((data=>{
//       console.log('Collateral created');
//       this._smp.popUpAlertMsgSuccess('Collateral Created Successfully');
//       this.router.navigate(['/collaterals']);
//     }),(err=>{
//       console.log('Error creating Collateral ');
//       this._smp.popUpAlertError(err);
//      // this._activeModal.
//     }))
//   }

//   gotoCollaterals(){
//     this.router.navigate(['/collaterals']);
//   //  window.location.href = 'http://localhost:4200/accounttypes';
//   }
// cancel(){
//   this.gotoCollaterals();
// }
  ngOnInit() {

    
//     this.activatedroute.params.subscribe((data) => {
//       console.log(data.id);
//       this.collateral.id = data.id;
//       this.collateral.instrumentRegister = this.instrumentRegister;
//       debugger
//       if (this.instrumentRegister)
//       {
//         this.collateral.id = this.externalId;
//       }        
//       this.getCollateralById(this.collateral.id)
//       this.getCurrencies();
//       this.getCollateralTypes();
      
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

//   getCollateralTypes()
//   {
//     this.marginService.getCollateralTypes().subscribe((data=>{
//       this.margintypes = data;
//       console.log(data);
    
//     }),(err=>{
 
//     }));
//   }  
//   getCollateralById(id){
//     this.marginService.getCollateral(id).subscribe((data) => 
//     {
//       this.collateral = data;
//     }
//   );
//   }  

}
