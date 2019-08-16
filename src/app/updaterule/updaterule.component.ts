import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Currency } from '../modules/staticdata/currency/currency';
// import { CurrencyService } from '../modules/staticdata/currency/currency.service';
import { UpdateRule } from './updaterule';
import { UpdateRuleService } from './updaterule.service';
import { UpdateruleCategory } from './updaterule-category';

@Component({
  selector: 'app-updaterule',
  templateUrl: './updaterule.component.html',
  styleUrls: ['./updaterule.component.css']
})
export class UpdateruleComponent implements OnInit {
  // updaterule:UpdateRule = new UpdateRule();
  // updaterulecategorys : UpdateruleCategory[];
  //used for currency Listing
  // currencies : Currency[];
  constructor(private ruleService: UpdateRuleService, private router: Router, 
    private activatedroute: ActivatedRoute,
    // private currencyService : CurrencyService
    ) { }



//   createUpdateRule(){
  
//     this.ruleService.newUpdateRule(this.updaterule).subscribe((data=>{
//       console.log('Update Rule created');
//       this.router.navigate(['/updaterules']);
//     }),(err=>{
//       console.log('Error creating update rule ');
//     }))
//   }

//   gotoUpdateRules(){
//     this.router.navigate(['/updaterules']);
//   //  window.location.href = 'http://localhost:4200/accounttypes';
//   }
// cancel(){
//   this.gotoUpdateRules();
// }
  ngOnInit() {
    // this.activatedroute.params.subscribe((data) => {
    //   console.log(data.id);
    //   this.updaterule.id = data.id;
    //   // this.getUpdateRuleById(this.updaterule.id);
    //  // this.getCurrencies();
    //   this.getUpdateRuleCategorys();
      
    // });
   // this.accounttype =  this.accounttypeService.getAccounttype();
  }
  // getCurrencies()
  // {
  //   this.currencyService.getCurrencies().subscribe((data=>{
  //     this.currencies = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));
  // }

  // getUpdateRuleCategorys()
  // {
  //   this.ruleService.getUpdateruleCategorys().subscribe((data=>{
  //     this.updaterulecategorys = data;
  //     console.log(data);
    
  //   }),(err=>{
 
  //   }));
  // }  
  // getUpdateRuleById(id){
  //  // debugger
  //   this.ruleService.getUpdateRule(id).subscribe((data => 
  //   {
  //     this.updaterule = data;
  //     console.log(this.updaterule);
  //   }
  // ),(err=>{
 
  // }));
  // }  


  equals(o1, o2) {
    if(o1 != null && o2 != null){
      // console.log("-------------------")
      // console.log(o1.code)
      // console.log(o2.code)
      // console.log(o1.code == o2.code)
      // console.log("-------------------")
     return  o1.code == o2.code ? true : false;
    }
    return false;
  }

}
