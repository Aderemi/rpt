import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { ForeignExchangeDeal } from './foreign-exchange-deal';
// import { InstrumentRegister } from '../registration/registration';

// import { ForeignExchangeDealsService } from './foreign-exchange-deals.service';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { Currency } from '../modules/staticdata/currency/currency';


@Component({
  selector: 'app-foreign-exchange-deals',
  templateUrl: './foreign-exchange-deals.component.html',
  styleUrls: ['./foreign-exchange-deals.component.css']
})
export class ForeignExchangeDealsComponent implements OnInit {
  // @Input() instrumentRegister : InstrumentRegister;
  // @Input() enableFromParent : boolean;
  // forex: ForeignExchangeDeal = new ForeignExchangeDeal();
  // currencies: Currency[];
  // erx: string;
  // fxDs: any[] = [];
  // isView: boolean

  // constructor(private currService: CurrencyService, private router: Router, private fxService: ForeignExchangeDealsService,
  //   private confirmationDialogService: ConfirmationDialogService, private modalService: NgbModal, private activatedRoute: ActivatedRoute) { }
  // // foreingExchangeDeals:ForeignExchangeDeal = new ForeignExchangeDeal();


  ngOnInit() {


  //   this.curr();
  //   let fx = new ForeignExchangeDeal();
  //   fx.instrumentRegister = this.instrumentRegister;
  //   this.fxService.getFilter(fx).subscribe(data => {
  //    // console.log(data);
  //     let body = JSON.stringify(data);
  //    // console.log(body);
  //     this.fxDs = JSON.parse(body);
  //     // this.fxDeals = data;
  //   });
  }

  // closeResult: String;
  
  // selectedFxDeal
  // set(event: any, selectedFxDeal: any) {
  //   this.selectedFxDeal = selectedFxDeal;
  //   //console.log(this.selectedFxDeal.id)
  // }
  // linkUrl(url: string) {
  //   this.router.navigate([url])
  // }

  // deleteFxDeal(charge) {
  //   this.fxService.deleteFx(this.selectedFxDeal.id).subscribe(data => {
  //     console.log('Fx Deal Deleted');
  //     //this.router.navigate(['/charges']);
  //     //this.gotoAccounts();
  //     this.ngOnInit();
  //   });

  // }

  // editDocument() {
  //   this.fxService.updateFx(this.forex).subscribe(data => {
  //     console.log(data);
  //     this.ngOnInit();
  //   });
  //   // const isValid = !isNaN(this.selectedCharge.id);
  //   // if (isValid) {
  //   //   console.log('Charge edited');
  //   //   this.router.navigate(['/charge', this.selectedCharge.id]);
  //   // }
  // }


  // deleteDocument(charge) {
  //   this.fxService.deleteFx(this.selectedFxDeal.id).subscribe(data => {

  //     this.ngOnInit();
  //   });

  // }

  // openFxDeal(document) {

  //   this.modalService.open(document, { size: 'lg' }).result.then((result) => {
  //     // this.advanceSearch();
  //     this.createForeignExchDeals();
  //     this.forex = new ForeignExchangeDeal();

  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }


  // openFxDealView(charge) {
  //   this.forex = this.selectedFxDeal;
  //   this.isView = true;
  //   this.modalService.open(charge, { size: 'lg' }).result.then((result) => {

  //     this.editDocument();
  //     //console.log(this.selectedDoc);
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });
  // }

  // openFxDealEdit(charge) {
  //   //console.log("xxxxxxxx",charge);
  //   this.isView = false;
  //   this.forex = this.selectedFxDeal;
  //   console.log(this.forex);
  //   this.modalService.open(charge, { size: 'lg' }).result.then((result) => {

  //     this.editDocument();
  //     this.forex = new ForeignExchangeDeal();
  //    // console.log(this.selectedDoc);
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });


  // }

  // public openConfirmationDialog(document) {

  //   this.confirmationDialogService.confirm('Confirm delete', 'Do you wish to delete this Branch?')
  //     .then((confirmed) => {
  //       if (confirmed) {
  //         this.deleteDocument(document);
  //         console.log('successfully deleted');

  //       }
  //       console.log('User confirmed:', confirmed); this.deleteDocument(document)
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }


  // createForeignExchDeals() {
  //   this.forex.instrumentRegister = this.instrumentRegister;
  //   this.fxService.newFx(this.forex).subscribe(data => {
  //     this.ngOnInit();
  //   }), (err => {
  //     console.log('could not create a foreign exchange deal')
  //   });
  // }

  // openFxDeals(fxDeal) {

  //   this.modalService.open(fxDeal, { size: 'lg' }).result.then((result) => {
  //     // this.advanceSearch();
  //     this.createForeignExchDeals();

  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }



  // // getFxById(id) {
  // //   this.fxService.getFx(id).subscribe(data => {
  // //     this.forex = data;

  // //   })
  // // }

  // curr() {
  //   this.currService.getCurrencies().subscribe(data => {
  //     this.currencies = data;
  //   });
  // }
}