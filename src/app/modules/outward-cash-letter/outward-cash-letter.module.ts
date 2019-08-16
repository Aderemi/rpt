import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwardCashLetterRoutingModule } from './outward-cash-letter-routing.module';
import { OutwardCashLetterHomeComponent } from './outward-cash-letter-home/outward-cash-letter-home.component';

import { FormsModule } from '@angular/forms';
import { OutwardCashLetterCreationComponent } from './outward-cash-letter-creation/components/outward-cash-letter-creation/outward-cash-letter-creation.component';
import { DigitsOnlyDirective } from 'src/app/directives/digits-only.directive';

@NgModule({
  declarations: [OutwardCashLetterHomeComponent,
  OutwardCashLetterCreationComponent,DigitsOnlyDirective],
  imports: [
    CommonModule, FormsModule,
    OutwardCashLetterRoutingModule
  ]
})
export class OutwardCashLetterModule { }
