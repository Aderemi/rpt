import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardBankPaymentRoutingModule } from './outward-bank-payment-routing.module';
import { OutwardBankPaymentComponent } from './component/outward-bank-payment.component';
import { OutwardBankPaymentDashboardComponent } from './component/outward-bank-payment-dashboard/outward-bank-payment-dashboard.component';
import { OutwardBankPaymentCreateComponent } from './component/outward-bank-payment-create/outward-bank-payment-create.component';
import { NoRecordSectionComponent } from 'src/app/snippets/components/responses/no-record/no-record-section.component';
import { ObpCurrencyComponent } from './component/outward-bank-payment-dashboard/obp-currency/obp-currency.component';
import { ObpBasicInformationComponent } from './component/outward-bank-payment-dashboard/obp-basic-information/obp-basic-information.component';
import { ObpChargesComponent } from './component/outward-bank-payment-dashboard/obp-charges/obp-charges.component';
import { ObpConfigurationComponent } from './component/outward-bank-payment-dashboard/obp-configuration/obp-configuration.component';
import { ObpMilestoneComponent } from './component/outward-bank-payment-dashboard/obp-milestone/obp-milestone.component';
import { ObpControlAccountComponent } from './component/outward-bank-payment-dashboard/obp-control-account/obp-control-account.component';
import { ObpBusinessProcessComponent } from './component/outward-bank-payment-dashboard/obp-business-process/obp-business-process.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OutwardBankPaymentComponent,
    OutwardBankPaymentDashboardComponent,
    OutwardBankPaymentCreateComponent,
    NoRecordSectionComponent,
    ObpCurrencyComponent,
    ObpBasicInformationComponent,
    ObpChargesComponent,
    ObpConfigurationComponent,
    ObpMilestoneComponent,
    ObpControlAccountComponent,
    ObpBusinessProcessComponent
  ],
  imports: [
    CommonModule,
    OutwardBankPaymentRoutingModule
  ]
})
export class OutwardBankPaymentModule { }
