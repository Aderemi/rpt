import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuaranteeIssueReleaseRoutingModule } from './guarantee-issue-release-routing.module';
import { GuaranteeIssueReleaseHomeComponent } from './guarantee-issue-release-home/guarantee-issue-release-home.component';
import { GuaranteeIssueReleaseComponent } from './guarantee-issue-release/components/guarantee-issue-release/guarantee-issue-release.component';
import { FormsModule } from '@angular/forms';
import { DigitsOnlyDirective } from 'src/app/directives/digits-only.directive';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GuaranteeIssueReleaseHomeComponent, GuaranteeIssueReleaseComponent, DigitsOnlyDirective],
  imports: [
    CommonModule, FormsModule, 
    // SharedModule,
    GuaranteeIssueReleaseRoutingModule
  ]
})
export class GuaranteeIssueReleaseModule { }
