import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { Checklist } from './checklist';
// import { ChecklistService } from './checklist.service';
import { InstrumentRegister } from '../registration/registration';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.css']
})
export class ChecklistsComponent implements OnInit {

  constructor(
    // private router: Router, private checklistService: ChecklistService,
    // private confirmationDialogService: ConfirmationDialogService,private modalService:NgbModal
    ) { }
  // checklist: Checklist = new Checklist();;
  // checklists: Checklist[];
  closeResult:String;


  @Input() instrumentRegister : InstrumentRegister;
  @Input() enableFromParent : boolean;
  selectedChecklist
  // set(event: any, selectedChecklist: any) {
  //   this.selectedChecklist = selectedChecklist;
  // }
  // linkUrl(url: string) {
  //   this.router.navigate([url])
  // }
  // editChecklist() {
  //   const isValid = !isNaN(this.selectedChecklist.id);
  //   if (isValid) {
  //     console.log('Checklist edited');
  //     this.router.navigate(['/checklist', this.selectedChecklist.id]);
  //   }
  // }

  // createChecklist(){
  //   this.checklistService.newChecklist(this.checklist).subscribe(data=>{
  //     console.log('Checklist created');
  //     this.router.navigate(['/checklists'])

  //   }),(err =>{
  //     console.log('Could not create checklist');
  //   });
  // }
  // openChecklist(checklist) {

  //   this.modalService.open(checklist, {size: 'lg'}).result.then((result) => {
  //    // this.advanceSearch();
  //    this.createChecklist();

  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
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
  // deleteChecklist(charge) {
  //   this.checklistService.deleteChecklist(this.selectedChecklist.id).subscribe(data => {
  //     console.log('Charge Deleted');
  //     //this.router.navigate(['/charges']);
  //     //this.gotoAccounts();
  //     this.ngOnInit();
  //   });

  // }

  // public openConfirmationDialog(charge) {

  //   this.confirmationDialogService.confirm('Confirm delete', 'Do you wish to delete this Branch?')
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteChecklist(charge)
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
    // this.checklistService.getChecklists().subscribe(data => {
    //   this.checklists = data;

    // });

  }

}
