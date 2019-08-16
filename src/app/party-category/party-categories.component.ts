import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';
// import { PartyCategory } from './party-category';
// import { InstrumentRegister } from '../registration/registration';
// 
// import { PartyCategoryService } from './party-category.service';
// import { Currency } from '../modules/staticdata/currency/currency';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';

@Component({
  selector: 'app-party-categories',
  templateUrl: './party-categories.component.html',
  styleUrls: ['./party-categories.component.css']
})
export class PartyCategoriesComponent implements OnInit {
  isView : boolean;
  // party: PartyCategory = new PartyCategory();
  // parties: PartyCategory[];
  // isDisabled : boolean;
  // @Input() instrumentRegister  : InstrumentRegister;
  // @Input() enableFromParent : boolean;
  // currencies:Currency[];
  constructor(
    // private currService: CurrencyService, private confirmationDialogService:ConfirmationDialogService,private router: Router, private modalService: NgbModal, private partyService: PartyCategoryService,
     private activatedRoute: ActivatedRoute) {
    this.isView = false;
   }
  closeResult: String;
 


  // selectedPartyCategory;

  // set(event: any, selectedPartyCategory: any) {
  //   this.selectedPartyCategory = selectedPartyCategory;
  //   console.log(this.selectedPartyCategory);
  // }

  // linkUrl(url: string) {
  //   this.router.navigate([url])
  // }

  // getPartyById(id) {
  //   this.partyService.getParty(id).subscribe(data => {
  //     this.party = data;

  //   })
  // }

  // editParty() {
  //   this.partyService.updateParty(this.party).subscribe(data => {
  //     console.log(data);
  //     this.ngOnInit();
  //   });
  //   //this.ngOnInit();
  //   // const isValid = !isNaN(this.selectedPartyCategory.id);
  //   // if (isValid) {
  //   //   this.party = this.selectedPartyCategory;

  //   //   console.log(this.party);
  //   //   //this.router.navigate(['/partyCategory', this.selectedPartyCategory.id]);
  //   //   this.ngOnInit();
  //   // }
  // }

  // enable(){
  // if ("N/A" === this.party.financialInvolvementType){
  //     this.isDisabled = true;
  //    }
  // else{
  //     this.isDisabled = false;
  //     }
  // }


  // currency(){
  //   this.currService.getCurrencies().subscribe(data=>{
  //     this.currencies = data;
  //     console.log(data);
  //   })
  // }
  // cancel() {
  //   this.router.navigate(['/partyCategories']);
  // }

  // createParty() {
  //   this.party.instrumentRegister = this.instrumentRegister; 
  //   console.log(this.instrumentRegister);
  //   this.partyService.newParty(this.party).subscribe(data => {
  //     console.log('Successfully created party');
  //     this.ngOnInit();

  //   }), (err => {
  //     console.log('could not create a charge')
  //   })
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

  openPartyCategory(partyCategory) {
  //   //const isValid = !isNaN(this.selectedPartyCategory.id);
    this.isView = false;
  //   this.modalService.open(partyCategory, { size: 'lg' }).result.then((result) => {
  //     // this.advanceSearch();
  //     this.createParty();
  //     this.party = new PartyCategory();
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });

  //   this.ngOnInit();
  }


  openPartyCategoryView(partyCategory){
  //   this.party = this.selectedPartyCategory;
    this.isView = true;
  //   this.modalService.open(partyCategory, { size: 'lg' }).result.then((result) => {

  //     this.editParty();
  //     console.log(this.selectedPartyCategory);
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });
  }

  // openPartyCategoryEdit(partyCategory) {
  //   this.isView = false;
  //   this.party = this.selectedPartyCategory;
  //   this.modalService.open(partyCategory, { size: 'lg' }).result.then((result) => {

  //     this.editParty();
  //     console.log(this.selectedPartyCategory);
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });


  // }
  ngOnInit() {
  //   this.currency();
  //   let prtcat = new PartyCategory();
  //   prtcat.instrumentRegister = this.instrumentRegister;
  //   this.partyService.getFilter(prtcat).subscribe(data => {
  //     this.parties = data;
  //     console.log(this.parties);
  //   })
  //   // this.activatedRoute.params.subscribe((data) => {
  //   //   console.log(data.id);
  //   //   this.party.id = data.id;
  //   //   this.getPartyById(this.party.id);
  //   // });


  }

  // delete(){
  //   this.partyService.deleteParty(this.selectedPartyCategory.id).subscribe(data=>{
  //     console.log('Delete Successful');
  //     this.ngOnInit();

  //   })
  // }
  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', 'Do you wish to delete this party category?')
  //     .then((confirmed) => {
  //       if (confirmed){
  //         this.delete();
  //         console.log('successfully deleted');

  //       }
  //       console.log('P confirmed:', confirmed); 
       
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }
}
