import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterDetailsInquiryRoutingModule } from './outward-cash-letter-details-inquiry-routing.module';
import { OutwardCashLetterDetailsInquiryHomeComponent } from './outward-cash-letter-details-inquiry-home/outward-cash-letter-details-inquiry-home.component';
import { OutwardCashLetterDetailsInquiryComponent } from './outward-cash-letter-details-inquiry/components/outward-cash-letter-details-inquiry/outward-cash-letter-details-inquiry.component';
import { FormsModule } from '@angular/forms';
import { DigitsOnlyDirective } from 'src/app/directives/digits-only.directive';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OutwardCashLetterDetailsInquiryHomeComponent, OutwardCashLetterDetailsInquiryComponent, DigitsOnlyDirective],
  imports: [
    CommonModule, FormsModule,
    // SharedModule,
    OutwardCashLetterDetailsInquiryRoutingModule
  ]
})
export class OutwardCashLetterDetailsInquiryModule { }
