import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { CollateralType } from './collateral-type';
// import { CollateralService } from './collateral.service';
// import { ServerMessagePopUpService } from '../services/server-message-pop-up.service';
// import { ServerMessagePopUp } from '../class/server-message-pop-up';


@Component({
  selector: 'app-collateral-type',
  templateUrl: './collateral-type.component.html',
  styleUrls: ['./collateral-type.component.css']
})
export class CollateralTypeComponent implements OnInit {



//   collateraltype:CollateralType = new CollateralType();

//   constructor(private colService: CollateralService, private router: Router, 
//     private activatedroute: ActivatedRoute, private _smp: ServerMessagePopUp) { }



//   createCollateraltype(){
 
//     this.colService.newCollateralType(this.collateraltype).subscribe((data=>{
//       this._smp.popUpAlertMsgSuccess("Collateral Created Successfully");
//       console.log('Collateral types created');
//       this.router.navigate(['/collateraltypes']);
//     }),(err=>{
//       this._smp.popUpAlertError("Failed to create Collateral Successfully");
//       console.log('Error creating Collateral type');
//     }))
//   }

//   gotoCollateraltypes(){
//     debugger
//     this.router.navigate(['/collateraltypes']);
//   //  window.location.href = 'http://localhost:4200/accounttypes';
//   }
// cancel(){
//   debugger
//   this.gotoCollateraltypes();
// }
  ngOnInit() {
  //   this.activatedroute.params.subscribe((data) => {
  //     console.log(data.id);
  //     this.collateraltype.id = data.id;
  //     this.getCollateralTypeById(this.collateraltype.id)
  //   });
  //  // this.accounttype =  this.accounttypeService.getAccounttype();
  }

  // getCollateralTypeById(id){
  //   this.colService.getCollateralType(id).subscribe((data) => 
  //   {
  //     this.collateraltype = data;
  //   }
  // );
  // }  

}

