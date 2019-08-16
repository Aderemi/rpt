import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuaranteeIssueRenewalRoutingModule } from './guarantee-issue-renewal-routing.module';
import { GuaranteeIssueRenewalHomeComponent } from './guarantee-issue-renewal-home/guarantee-issue-renewal-home.component';
import { GuaranteeIssueRenewalComponent } from './guarantee-issue-renewal/components/guarantee-issue-renewal/guarantee-issue-renewal.component';
// import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DigitsOnlyDirective } from 'src/app/directives/digits-only.directive';

@NgModule({
  declarations: [GuaranteeIssueRenewalHomeComponent, GuaranteeIssueRenewalComponent, DigitsOnlyDirective],
  imports: [
    CommonModule, FormsModule, 
    // SharedModule,
    GuaranteeIssueRenewalRoutingModule
  ]
})
export class GuaranteeIssueRenewalModule { }
