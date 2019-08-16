import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { MarginDepositType } from './margin-deposit-type';
// import { margindepositService } from './margin-deposit.service';

@Component({
  selector: 'app-margin-deposit-type',
  templateUrl: './margin-deposit-type.component.html',
  styleUrls: ['./margin-deposit-type.component.css']
})
export class MarginDepositTypeComponent implements OnInit {



  // margindeposittype:MarginDepositType = new MarginDepositType();

  constructor(
    // private marginService: margindepositService, 
    private router: Router, 
    private activatedroute: ActivatedRoute) { }



  createMarginDeposittype(){
  // debugger
  //   this.marginService.newMarginDepositType(this.margindeposittype).subscribe((data=>{
  //     debugger
  //     console.log('Margin Deposit types created');
  //     this.router.navigate(['/margindeposittypes']);
  //   }),(err=>{
  //     debugger
  //     console.log('Error creating margin deposit type');
  //   }))
  }

//   gotoMarginDeposittypes(){
//     this.router.navigate(['/margindeposittypes']);
//   //  window.location.href = 'http://localhost:4200/accounttypes';
//   }
// cancel(){
//   this.gotoMarginDeposittypes();
// }
  ngOnInit() {
  //   this.activatedroute.params.subscribe((data) => {
  //     console.log(data.id);
  //     this.margindeposittype.id = data.id;
  //     this.getMarginDepositTypeeById(this.margindeposittype.id)
  //   });
  //  // this.accounttype =  this.accounttypeService.getAccounttype();
  }

  // getMarginDepositTypeeById(id){
  //   this.marginService.getMarginDepositType(id).subscribe((data) => 
  //   {
  //     this.margindeposittype = data;
  //   }
  // );
  // }  

}

