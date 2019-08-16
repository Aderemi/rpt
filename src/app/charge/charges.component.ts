import { Component, OnInit, Input } from '@angular/core';
import { ChargeComponent } from './charge.component';
import { Router } from '@angular/router';

// import { ConfirmationDialogService } from '../services/confirmation-dialog.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InstrumentRegister } from '../registration/registration';
import { ChargeService } from './charge.service';
import { Charge } from './charge';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { Currency } from '../modules/staticdata/currency/currency';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {
  @Input() instrumentRegister : InstrumentRegister;
  @Input() enableFromParent : boolean;
  constructor(private router :Router,private chargeService:ChargeService,
    // private currService:CurrencyService, 
    // private confirmationDialogService:ConfirmationDialogService,
    // private modalService:NgbModal
    ) { 
      //this.charg.charge = 'hjklkjkjkljhkj';
    }
  charg:Charge = new Charge();
  chargess:Charge[];
  isView:boolean;
  closeResult:String;
  isDisabled:boolean;
  // currencies:Currency[];
  selectedCharge;
  set(event: any, selectedCharge: any) {
    this.selectedCharge = selectedCharge;
  }
  linkUrl(url: string){
    this.router.navigate([url])
  }

  enable(){
    if ("N/A" === this.charg.pendChanType){
        this.isDisabled = true;
       }
    else{
        this.isDisabled = false;
        }
    }
  // editCharge(){
  //   this.chargeService.updateCharge(this.charg).subscribe(data => {
  //     console.log(data);
  //     this.ngOnInit();
  //   });
  //   // const isValid = !isNaN(this.selectedCharge.id);
    // if (isValid) {
    //   console.log('Charge edited');
    //   this.router.navigate(['/charge', this.selectedCharge.id]);
    // }
  // }

 
  // deleteCharge(charge){
  //   this.chargeService.deleteCharge(this.selectedCharge.id).subscribe(data=>{
  //     console.log('Charge Deleted');
  //     //this.router.navigate(['/charges']);
  //     //this.gotoAccounts();
  //     this.ngOnInit();
  //   });
    
  // }

  // createCharge(){
  //   console.log(this.charg)
  //   this.charg.instrumentRegister = this.instrumentRegister;
  //   this.chargeService.newCharge(this.charg).subscribe(data =>{
  //     console.log('Successfully created charge');
  //     console.log(data)
  //     this.ngOnInit();
  //     //this.router.navigate(['/outwardCustPaymt#charge']);

  //   }),(err=>{
  //     console.log('could not create a charge')
  //   })
  // }

  // openCharge(charge) {

  //   this.modalService.open(charge, {size: 'lg'}).result.then((result) => {
  //    // this.advanceSearch();
  //    this.createCharge();
  //    this.charg = new Charge();

  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }


  openChargeView(charge){
  //   this.charg = this.selectedCharge;
    this.isView = true;
  //   this.modalService.open(charge, { size: 'lg' }).result.then((result) => {

  //     this.editCharge();
  //     console.log(this.selectedCharge);
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });
  }
// 
  openChargeEdit(charge) {
    this.isView = false;
  //   this.charg = this.selectedCharge;
  //   this.modalService.open(charge, { size: 'lg' }).result.then((result) => {

  //     this.editCharge();
  //     this.charg = new Charge();
  //     console.log(this.selectedCharge);
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });


  }

  // public openConfirmationDialog(charg) {
    
  //   this.confirmationDialogService.confirm('Confirm delete', 'Do you wish to delete this Branch?')
  //   .then((confirmed) => {
  //     console.log('User confirmed:', confirmed); this.deleteCharge(charg)
  //   })
  //   .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
 
  // curr(){
  //   this.currService.getCurrencies().subscribe(data=>{
  //     this.currencies = data;
  //   })
  // }
  ngOnInit() {
  //   console.log(this.instrumentRegister)
  //   this.curr();
  //   let ch = new Charge();
  //   ch.instrumentRegister = this.instrumentRegister;
  //   this.chargeService.getFilter(ch).subscribe(data=>{
  //   this.chargess = data;
  //   console.log(this.chargess)
     
  //   });

  }
}
