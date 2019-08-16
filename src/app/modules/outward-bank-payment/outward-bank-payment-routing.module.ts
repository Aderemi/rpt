import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardBankPaymentComponent } from './component/outward-bank-payment.component';
import { OutwardBankPaymentDashboardComponent } from './component/outward-bank-payment-dashboard/outward-bank-payment-dashboard.component';
import { ObpCurrencyComponent } from './component/outward-bank-payment-dashboard/obp-currency/obp-currency.component';
import { ObpBasicInformationComponent } from './component/outward-bank-payment-dashboard/obp-basic-information/obp-basic-information.component';
import { ObpChargesComponent } from './component/outward-bank-payment-dashboard/obp-charges/obp-charges.component';
import { ObpConfigurationComponent } from './component/outward-bank-payment-dashboard/obp-configuration/obp-configuration.component';
import { ObpMilestoneComponent } from './component/outward-bank-payment-dashboard/obp-milestone/obp-milestone.component';
import { ObpControlAccountComponent } from './component/outward-bank-payment-dashboard/obp-control-account/obp-control-account.component';
import { ObpBusinessProcessComponent } from './component/outward-bank-payment-dashboard/obp-business-process/obp-business-process.component';
import { OutwardBankPaymentCreateComponent } from './component/outward-bank-payment-create/outward-bank-payment-create.component';

const routes: Routes = [
  {path: '', component: OutwardBankPaymentComponent},
  {path: 'create', component: OutwardBankPaymentCreateComponent},
  {path: 'dashboard', component: OutwardBankPaymentDashboardComponent, children:[
      {path: 'basic-information', component: ObpBasicInformationComponent},
      {path: 'charges', component: ObpChargesComponent },
      {path: 'currency', component: ObpCurrencyComponent},
      {path: 'configuration', component: ObpConfigurationComponent },
      {path: 'milestones', component: ObpMilestoneComponent},
      {path: 'control-account', component: ObpControlAccountComponent },
      {path: 'business-process', component: ObpBusinessProcessComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardBankPaymentRoutingModule { }
