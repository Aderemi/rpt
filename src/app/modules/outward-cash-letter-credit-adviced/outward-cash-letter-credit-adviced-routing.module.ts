import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterCreditAdvicedHomeComponent } from './outward-cash-letter-credit-adviced-home/outward-cash-letter-credit-adviced-home.component';
import { OutwardCashLetterCreditAdvicedComponent } from './outward-cash-letter-credit-adviced/components/outward-cash-letter-credit-adviced/outward-cash-letter-credit-adviced.component';

const routes: Routes = [
  {path: '', component: OutwardCashLetterCreditAdvicedHomeComponent, children: [
    {path: '', redirectTo:'Createcreditadviced', pathMatch:'full'},
    {path: 'Createcreditadviced', component:OutwardCashLetterCreditAdvicedComponent,
    
    data: {
      title: 'Outward Cash Letter Credit Adviced'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterCreditAdvicedRoutingModule { }
