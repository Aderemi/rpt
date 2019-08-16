import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterChequeAdjustmentRoutingModule } from './outward-cash-letter-cheque-adjustment-routing.module';
import { OutwardCashLetterChequeAdjustmentHomeComponent } from './outward-cash-letter-cheque-adjustment-home/outward-cash-letter-cheque-adjustment-home.component';
import { OutwardCashLetterChequeAdjustmentComponent } from './outward-cash-letter-cheque-adjustment/components/outward-cash-letter-cheque-adjustment/outward-cash-letter-cheque-adjustment.component';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OutwardCashLetterChequeAdjustmentHomeComponent, OutwardCashLetterChequeAdjustmentComponent],
  imports: [
    CommonModule,FormsModule,
    // SharedModule,
    OutwardCashLetterChequeAdjustmentRoutingModule
  ]
})
export class OutwardCashLetterChequeAdjustmentModule { }
