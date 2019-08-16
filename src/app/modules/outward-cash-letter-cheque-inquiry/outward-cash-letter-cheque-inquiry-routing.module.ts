import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterChequeInquiryHomeComponent } from './outward-cash-letter-cheque-inquiry-home/outward-cash-letter-cheque-inquiry-home.component';
import { OutwardCashLetterChequeInquiryComponent } from './outward-cash-letter-cheque-inquiry/components/outward-cash-letter-cheque-inquiry/outward-cash-letter-cheque-inquiry.component';

const routes: Routes = [

  {path: '', component: OutwardCashLetterChequeInquiryHomeComponent, children: [
    {path: '', redirectTo:'Createchequeinquiry', pathMatch:'full'},
    {path: 'Createchequeinquiry', component:OutwardCashLetterChequeInquiryComponent,
    
    data: {
      title: 'Outward Cash Letter Cheque Inquiry'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterChequeInquiryRoutingModule { }
