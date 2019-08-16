import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuaranteeIssueReleaseHomeComponent } from './guarantee-issue-release-home/guarantee-issue-release-home.component';
import { GuaranteeIssueReleaseComponent } from './guarantee-issue-release/components/guarantee-issue-release/guarantee-issue-release.component';

const routes: Routes = [
  {path: '', component: GuaranteeIssueReleaseHomeComponent, children: [
    {path: '', redirectTo:'Createrel', pathMatch:'full'},
    {path: 'Createrel', component:GuaranteeIssueReleaseComponent,
    
    data: {
      title: 'Guarantee Issue Release'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuaranteeIssueReleaseRoutingModule { }
