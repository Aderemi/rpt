import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { UpdateruleCategory } from './updaterule-category';
// import { UpdateRuleService } from './updaterule.service';

@Component({
  selector: 'app-updaterule-category',
  templateUrl: './updaterule-category.component.html',
  styleUrls: ['./updaterule-category.component.css']
})
export class UpdateruleCategoryComponent implements OnInit {



  // updaterulecategory:UpdateruleCategory = new UpdateruleCategory();
  constructor(
    // private ruleService: UpdateRuleService, private router: Router, 
    private activatedroute: ActivatedRoute) { }



  // createUpdateRuleCategory(){
  
  //   this.ruleService.newUpdateruleCategory(this.updaterulecategory).subscribe((data=>{
  //     console.log('Update Rule Category created');
  //     this.router.navigate(['/updaterulecategorys']);
  //   }),(err=>{
  //     console.log('Error creating update rule categorys');
  //   }))
  // }

  // gotoUpdateruleCategorys(){
  //   this.router.navigate(['/updaterulecategorys']);
  // //  window.location.href = 'http://localhost:4200/accounttypes';
  // }
// cancel(){
//   this.gotoUpdateruleCategorys();
// }
  ngOnInit() {
    // this.activatedroute.params.subscribe((data) => {
    //   console.log(data.id);
    //   this.updaterulecategory.id = data.id;
    //   this.getUpdateruleCategoryById(this.updaterulecategory.id)
    // });
   // this.accounttype =  this.accounttypeService.getAccounttype();
  }

  // getUpdateruleCategoryById(id){
  //   this.ruleService.getUpdateruleCategory(id).subscribe((data) => 
  //   {
  //     this.updaterulecategory = data;
  //   }
  // );
  // }  

}

