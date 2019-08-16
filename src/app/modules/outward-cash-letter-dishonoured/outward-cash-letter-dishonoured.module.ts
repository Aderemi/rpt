import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterDishonouredRoutingModule } from './outward-cash-letter-dishonoured-routing.module';
import { OutwardCashLetterDishonouredHomeComponent } from './outward-cash-letter-dishonoured-home/outward-cash-letter-dishonoured-home.component';
import { OutwardCashLetterDishonouredComponent } from './outward-cash-letter-dishonoured/components/outward-cash-letter-dishonoured/outward-cash-letter-dishonoured.component';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OutwardCashLetterDishonouredHomeComponent, OutwardCashLetterDishonouredComponent],
  imports: [
    CommonModule,FormsModule,
    // SharedModule,
    OutwardCashLetterDishonouredRoutingModule
  ]
})
export class OutwardCashLetterDishonouredModule { }
