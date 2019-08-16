import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterAdjustmentComponent } from './outward-cash-letter-adjustment/components/outward-cash-letter-adjustment/outward-cash-letter-adjustment.component';
import { OutwardCashLetterAdjustmentHomeComponent } from './outward-cash-letter-adjustment-home/outward-cash-letter-adjustment-home.component';

const routes: Routes = [

  {path: '', component: OutwardCashLetterAdjustmentHomeComponent, children: [
    {path: '', redirectTo:'Createadjustment', pathMatch:'full'},
    {path: 'Createadjustment', component:OutwardCashLetterAdjustmentComponent,
    
    data: {
      title: 'Outward Cash Letter Adjustment'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterAdjustmentRoutingModule { }
