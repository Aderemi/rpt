import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterChequeDishonouredRoutingModule } from './outward-cash-letter-cheque-dishonoured-routing.module';
import { OutwardCashLetterChequeDishonouredHomeComponent } from './outward-cash-letter-cheque-dishonoured-home/outward-cash-letter-cheque-dishonoured-home.component';
import { OutwardCashLetterChequeDishonouredComponent } from './outward-cash-letter-cheque-dishonoured/components/outward-cash-letter-cheque-dishonoured/outward-cash-letter-cheque-dishonoured.component';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OutwardCashLetterChequeDishonouredHomeComponent, OutwardCashLetterChequeDishonouredComponent],
  imports: [
    CommonModule,FormsModule,
    // SharedModule,
    OutwardCashLetterChequeDishonouredRoutingModule
  ]
})
export class OutwardCashLetterChequeDishonouredModule { }
