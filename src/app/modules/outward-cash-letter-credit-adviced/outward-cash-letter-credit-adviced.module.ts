import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterCreditAdvicedRoutingModule } from './outward-cash-letter-credit-adviced-routing.module';
import { OutwardCashLetterCreditAdvicedHomeComponent } from './outward-cash-letter-credit-adviced-home/outward-cash-letter-credit-adviced-home.component';
import { OutwardCashLetterCreditAdvicedComponent } from './outward-cash-letter-credit-adviced/components/outward-cash-letter-credit-adviced/outward-cash-letter-credit-adviced.component';
import { FormsModule } from '@angular/forms';
import { DigitsOnlyDirective } from 'src/app/directives/digits-only.directive';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OutwardCashLetterCreditAdvicedHomeComponent, OutwardCashLetterCreditAdvicedComponent,DigitsOnlyDirective],
  imports: [
    CommonModule,FormsModule,
    // SharedModule,
    OutwardCashLetterCreditAdvicedRoutingModule
  ]
})
export class OutwardCashLetterCreditAdvicedModule { }
