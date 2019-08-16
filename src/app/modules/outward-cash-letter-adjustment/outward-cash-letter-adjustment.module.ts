import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterAdjustmentRoutingModule } from './outward-cash-letter-adjustment-routing.module';

import { FormsModule } from '@angular/forms';
import { OutwardCashLetterAdjustmentHomeComponent } from './outward-cash-letter-adjustment-home/outward-cash-letter-adjustment-home.component';
import { OutwardCashLetterAdjustmentComponent } from './outward-cash-letter-adjustment/components/outward-cash-letter-adjustment/outward-cash-letter-adjustment.component';
// import { DigitsOnlyDirective } from 'src/app/directives/digits-only.directive';

@NgModule({
  declarations: [OutwardCashLetterAdjustmentHomeComponent, OutwardCashLetterAdjustmentComponent, 
    // DigitsOnlyDirective
  ],
  imports: [
    CommonModule,FormsModule,
    OutwardCashLetterAdjustmentRoutingModule
  ]
})
export class OutwardCashLetterAdjustmentModule { }
