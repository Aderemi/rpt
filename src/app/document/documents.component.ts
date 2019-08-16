import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { InstrumentRegister } from '../registration/registration';
// import { DocumentService } from './document.service';
// import { Document } from './document';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
// import { Currency } from '../modules/staticdata/currency/currency';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  // @Input() instrumentRegister  : InstrumentRegister;
  // @Input() enableFromParent : boolean;
  // constructor(private router :Router,private documentService:DocumentService,
  //   private currService:CurrencyService, private confirmationDialogService:ConfirmationDialogService,private modalService:NgbModal) { 
  //     //this.charg.charge = 'hjklkjkjkljhkj';
  //   }
  // doc:Document = new Document();
  // docs: Document[];
  isView:boolean;
  // closeResult:String;
  // isDisabled:boolean;
  // currencies:Currency[];
  // selectedDoc;
  // set(event: any, selectedDoc: any) {
  //   this.selectedDoc = selectedDoc;
  // }
  // linkUrl(url: string){
  //   this.router.navigate([url])
  // }

 
  // editDocument(){
  //   this.documentService.updateDocument(this.doc).subscribe(data => {
  //     console.log(data);
  //     this.ngOnInit();
  //   });
  //   // const isValid = !isNaN(this.selectedCharge.id);
  //   // if (isValid) {
  //   //   console.log('Charge edited');
  //   //   this.router.navigate(['/charge', this.selectedCharge.id]);
  //   // }
  // }

 
  // deleteDocument(charge){
  //   this.documentService.deleteDocument(this.selectedDoc.id).subscribe(data=>{
     
  //     this.ngOnInit();
  //   });
    
  // }

  // createDocument(){
  //   //console.log(this.charg)
    
  //   this.doc.instrumentRegister = this.instrumentRegister;
  //   this.documentService.newDocument(this.doc).subscribe(data =>{
  //     console.log(data)
  //     this.ngOnInit();
   

  //   }),(err=>{
  //     console.log('could not create a document')
  //   })
  // }

  openDocument(document) {
    this.isView = true;

  //   this.modalService.open(document, {size: 'lg'}).result.then((result) => {
  //    // this.advanceSearch();
  //    this.createDocument();
  //    this.doc = new Document();

  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  }


  openDocumentView(charge){
  //   this.doc = this.selectedDoc;
    this.isView = true;
  //   this.modalService.open(charge, { size: 'lg' }).result.then((result) => {

  //     this.editDocument();
  //     console.log(this.selectedDoc);
  //     this.closeResult = `Closed with: ${result}`;
  //     this.ngOnInit();
  //     //this.ngOnInit();
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     this.ngOnInit();
  //   });
  }

  // openDocumentEdit(charge) {
    // this.isView = false;
  //   this.doc = this.selectedDoc;
  //   this.modalService.open(charge, { size: 'lg' }).result.then((result) => {

  //     this.editDocument();
  //     this.doc = new Document();
  //     console.log(this.selectedDoc);
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
  //   .then((confirmed) => {
  //     if (confirmed){
  //       this.deleteDocument(document);
  //       console.log('successfully deleted');

  //     }
  //     console.log('User confirmed:', confirmed); this.deleteDocument(document)
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
  //   this.curr();
  //   let dmt = new Document();
  //   dmt.instrumentRegister = this.instrumentRegister;
  //   this.documentService.getFilter(dmt).subscribe(data=>{
  //   this.docs = data;
     
  //   });

  }
}
