import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterChequeInquiryRoutingModule } from './outward-cash-letter-cheque-inquiry-routing.module';
import { OutwardCashLetterChequeInquiryHomeComponent } from './outward-cash-letter-cheque-inquiry-home/outward-cash-letter-cheque-inquiry-home.component';
import { OutwardCashLetterChequeInquiryComponent } from './outward-cash-letter-cheque-inquiry/components/outward-cash-letter-cheque-inquiry/outward-cash-letter-cheque-inquiry.component';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OutwardCashLetterChequeInquiryHomeComponent, OutwardCashLetterChequeInquiryComponent],
  imports: [
    CommonModule,FormsModule,
    // SharedModule,
    OutwardCashLetterChequeInquiryRoutingModule
  ]
})
export class OutwardCashLetterChequeInquiryModule { }
