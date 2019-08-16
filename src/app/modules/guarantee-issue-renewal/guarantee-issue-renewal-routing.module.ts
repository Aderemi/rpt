import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuaranteeIssueRenewalHomeComponent } from './guarantee-issue-renewal-home/guarantee-issue-renewal-home.component';
import { GuaranteeIssueRenewalComponent } from './guarantee-issue-renewal/components/guarantee-issue-renewal/guarantee-issue-renewal.component';

const routes: Routes = [
  {path: '', component: GuaranteeIssueRenewalHomeComponent, children: [
    {path: '', redirectTo:'Createrenewal', pathMatch:'full'},
    {path: 'Createrenewal', component:GuaranteeIssueRenewalComponent,
    
    data: {
      title: 'Guarantee Issue Renewal'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuaranteeIssueRenewalRoutingModule { }
