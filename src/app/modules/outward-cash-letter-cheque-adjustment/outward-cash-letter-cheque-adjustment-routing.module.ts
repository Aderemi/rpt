import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterChequeAdjustmentHomeComponent } from './outward-cash-letter-cheque-adjustment-home/outward-cash-letter-cheque-adjustment-home.component';
import { OutwardCashLetterChequeAdjustmentComponent } from './outward-cash-letter-cheque-adjustment/components/outward-cash-letter-cheque-adjustment/outward-cash-letter-cheque-adjustment.component';
// import { OutwardCashLetterChequeAdjustmentHomeComponent } from './outward-cash-letter-cheque-adjustment-home/outward-cash-letter-cheque-adjustment-home.component';
// import { OutwardCashLetterChequeAdjustmentComponent } from './outward-cash-letter-cheque-adjustment/components/outward-cash-letter-cheque-adjustment/outward-cash-letter-cheque-adjustment.component';

const routes: Routes = [
  {path: '', component: OutwardCashLetterChequeAdjustmentHomeComponent, children: [
    {path: '', redirectTo:'Createchequeadjustment', pathMatch:'full'},
    {path: 'Createchequeadjustment', component:OutwardCashLetterChequeAdjustmentComponent,
    
    data: {
      title: 'Outward Cash Letter Cheque Adjustment'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterChequeAdjustmentRoutingModule { }
