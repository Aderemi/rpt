import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OutwardBankChequeCancellationRoutingModule } from './outward-bank-cheque-cancellation-routing.module';
import { OutwardBankChequeCancellationHomeComponent } from './outward-bank-cheque-cancellation-home/outward-bank-cheque-cancellation-home.component';
import { OutwardBankChequeCancellationComponent } from './outward-bank-cheque-cancellation/components/outward-bank-cheque-cancellation/outward-bank-cheque-cancellation.component';
import { DigitsOnlyDirective } from 'src/app/directives/digits-only.directive';

@NgModule({
  declarations: [OutwardBankChequeCancellationHomeComponent, OutwardBankChequeCancellationComponent
    // ,DigitsOnlyDirective
    ],
  imports: [
    CommonModule, FormsModule,
    OutwardBankChequeCancellationRoutingModule
  ]
})
export class OutwardBankChequeCancellationModule { }
