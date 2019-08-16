import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

import * as $ from 'jquery';
// import 'datatables.net';
import { UpdateruleCategory } from './updaterule-category';
import { UpdateRuleService } from './updaterule.service';

@Component({
  selector: 'app-updaterule-categorys',
  templateUrl: './updaterule-categorys.component.html',
  styleUrls: ['./updaterule-categorys.component.css']
})
export class UpdateruleCategorysComponent implements OnInit {

  Rulecategorys: UpdateruleCategory[];
  rulecategory = new UpdateruleCategory();
  dataTable: any;
  selectedUpdateRule: any;

  constructor(private router: Router, private ruleService: UpdateRuleService,
    // private confirmationDialogService: ConfirmationDialogService, 
    private chRef: ChangeDetectorRef) { }


 

  deleteUpdateRule() {
    if (this.selectedUpdateRule.id) {
      this.ruleService.deleteUpdateruleCategory(this.selectedUpdateRule.id).subscribe(data => {
        console.log('Update Rule Category Deleted');
        this.ngOnInit();

      });
    }



  }

  editUpdateRuleCategory() {
    const isValid = !isNaN(this.selectedUpdateRule.id);
    if (isValid) {
      console.log('Update Rule Category edited');
      this.router.navigate(['/updaterulecategory', this.selectedUpdateRule.id]);
    }


  }

  set(event: any, updatecategoryrule: any) {
    console.log('Update rule category selected' + updatecategoryrule);

    this.selectedUpdateRule = updatecategoryrule;
         
  }

  search() {
    console.log('searching update rule !!');
    this.ruleService.query(this.rulecategory).subscribe((data => {
      this.Rulecategorys = data;
      console.log(data);
      this.chRef.detectChanges();

      const table = $('table');
      // this.dataTable = table.DataTable();

    }), (err => {
      console.log('Update Rule search error ' + err);
    }));
  }

  // public openConfirmationDialog() {

  //   this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedUpdateRule.code}?`)
  //     .then((confirmed) => {
  //       console.log('User confirmed:', confirmed); this.deleteUpdateRule();
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  ngOnInit() {
    this.ruleService.getUpdateruleCategorys().subscribe(data => {
      console.log(data);
      this.Rulecategorys = data;
      this.chRef.detectChanges();

      const table: any = $('#myTable');
      this.dataTable = table.DataTable();         
    }, (error) => {
      console.log(error);
    });

 
  }

}
