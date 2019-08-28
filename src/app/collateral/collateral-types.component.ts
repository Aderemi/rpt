import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';
// import { CollateralType } from './collateral-type';
// import { CollateralService } from './collateral.service';


@Component({
  selector: 'app-collateral-types',
  templateUrl: './collateral-types.component.html',
  styleUrls: ['./collateral-types.component.css']
})
export class CollateralTypesComponent implements OnInit {

//   Collateraltypes: CollateralType[] = [];
//   collateraltype = new CollateralType();
//   dataTable: any;
//   selectedCollateraltype: any;

  constructor(
  // private router: Router, private colService: CollateralService,
//     private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef
) { }




//   deleteCollateraltype() {
//     if (this.selectedCollateraltype.id) {
//       this.colService.deleteCollateralType(this.selectedCollateraltype.id).subscribe(editorData => {
//         console.log('Collateral Type Deleted');
//         this.ngOnInit();

//       });
//     }

//   }

//   editCollateraltype() {
//     const isValid = !isNaN(this.selectedCollateraltype.id);
//     if (isValid) {
//       console.log('Collateral Type edited');
//       this.router.navigate(['/collateraltype', this.selectedCollateraltype.id]);
//     }


//   }

//   set(event: any, collateraltype: any) {
//     console.log('Collateral type selected' + collateraltype);
//     this.selectedCollateraltype = collateraltype;

//   }

//   search() {
//     console.log('searching Collateral type !!');
//     this.colService.query(this.collateraltype).subscribe((editorData => {
//       this.Collateraltypes = editorData;
//       console.log(editorData);
//       this.chRef.detectChanges();

//       const table = $('table');
//       this.dataTable = table.DataTable();

//     }), (err => {
//       console.log('Collateral search error ' + err);
//     }));
//   }

//   public openConfirmationDialog() {

//     this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedCollateraltype.code}?`)
//       .then((confirmed) => {
//         console.log('User confirmed:', confirmed); this.deleteCollateraltype();
//       })
//       .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
//   }

  ngOnInit() {
//    // debugger
//     this.colService.getCollateralTypes().subscribe(editorData => {
//       console.log(editorData);
//       this.Collateraltypes = editorData;
//       this.chRef.detectChanges();

//       const table: any = $('#myTable');
//       this.dataTable = table.DataTable();
//     }, (error) => {
//       console.log(error);
//     });

//     console.log(this.Collateraltypes);
  }

//   addCollateraltypes(){
//    // debugger
//     this.router.navigate(['/collateraltype']);
//   //  window.location.href = 'http://localhost:4200/accounttypes';
//   }

}
/*
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SystemParameter } from './system-parameter';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemParameterService } from './system-parameter.service';
import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-system-parameters',
  templateUrl: './system-parameters.component.html',
  styleUrls: ['./system-parameters.component.css']
})
export class SystemParametersComponent implements OnInit {

  SysPararmeters: SystemParameter[];
  sysparameter = new SystemParameter();
  dataTable: any;
  selectedSysParameter: any;

  constructor(private router: Router, private sysService: SystemParameterService,
    private confirmationDialogService: ConfirmationDialogService, private chRef: ChangeDetectorRef) { }




  deleteSysParameter() {
    if (this.selectedSysParameter.id) {
      this.sysService.deleteSysParameter(this.selectedSysParameter.id).subscribe(editorData => {
        console.log('System Parameter  Deleted');
        this.ngOnInit();

      });
    }



  }

  editSysParameter() {
    const isValid = !isNaN(this.selectedSysParameter.id);
    if (isValid) {
      console.log('System Parameter edited');
      this.router.navigate(['/systemparameter', this.selectedSysParameter.id]);
    }

  }

  set(event: any, sysparameter: any) {
    console.log('System Parameter  selected' + sysparameter);
    this.selectedSysParameter = sysparameter;

  }

  search() {
    console.log('searching System Parameter !!');
    this.sysService.querySysParameter(this.sysparameter).subscribe((editorData => {
      this.SysPararmeters = editorData;
      console.log(editorData);
      this.chRef.detectChanges();

      const table = $('table');
      this.dataTable = table.DataTable();

    }), (err => {
      console.log('System Parameter search error ' + err);
    }));
  }

  public openConfirmationDialog() {

    this.confirmationDialogService.confirm('Confirm delete', `Do you wish to delete ${this.selectedSysParameter.name}?`)
      .then((confirmed) => {
        console.log('User confirmed:', confirmed); this.deleteSysParameter();
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  ngOnInit() {
    this.sysService.getSysParameters().subscribe(editorData => {
      console.log(editorData);
      this.SysPararmeters = editorData;
      this.chRef.detectChanges();

      const table: any = $('#myTable');
      this.dataTable = table.DataTable();
    }, (error) => {
      console.log(error);
    });


  }
}
*/
