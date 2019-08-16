import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterChequeRoutingModule } from './outward-cash-letter-cheque-routing.module';
// import { OutwardCashLetterChequeHomeComponent } from './outward-cash-letter-cheque-home/outward-cash-letter-cheque-home.component';
// import { OutwardCashLetterChequeCreationComponent } from './outward-cash-letter-cheque-creation/components/outward-cash-letter-cheque-creation/outward-cash-letter-cheque-creation.component';
import { FormsModule } from '@angular/forms';
import { OutwardCashLetterChequeHomeComponent } from './outward-cash-letter-cheque-home/outward-cash-letter-cheque-home.component';
import { OutwardCashLetterChequeCreationComponent } from './outward-cash-letter-cheque-creation/components/outward-cash-letter-cheque-creation/outward-cash-letter-cheque-creation.component';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OutwardCashLetterChequeHomeComponent, OutwardCashLetterChequeCreationComponent],
  imports: [
    CommonModule,FormsModule,
    // SharedModule,
    OutwardCashLetterChequeRoutingModule
  ]
})
export class OutwardCashLetterChequeModule { }
