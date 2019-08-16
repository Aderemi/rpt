import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardBankChequeCancellationHomeComponent } from './outward-bank-cheque-cancellation-home/outward-bank-cheque-cancellation-home.component';
import { OutwardBankChequeCancellationComponent } from './outward-bank-cheque-cancellation/components/outward-bank-cheque-cancellation/outward-bank-cheque-cancellation.component';

const routes: Routes = [

  {path: '', component: OutwardBankChequeCancellationHomeComponent, children: [
    {path: '', redirectTo:'Createbankcheque', pathMatch:'full'},
    {path: 'Createbankcheque', component:OutwardBankChequeCancellationComponent,
    
    data: {
      title: 'Outward Bank Cheque Cancellation'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardBankChequeCancellationRoutingModule { }
