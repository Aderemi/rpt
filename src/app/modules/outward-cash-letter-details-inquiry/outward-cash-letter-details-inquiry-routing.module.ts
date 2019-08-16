import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterDetailsInquiryHomeComponent } from './outward-cash-letter-details-inquiry-home/outward-cash-letter-details-inquiry-home.component';
import { OutwardCashLetterDetailsInquiryComponent } from './outward-cash-letter-details-inquiry/components/outward-cash-letter-details-inquiry/outward-cash-letter-details-inquiry.component';

const routes: Routes = [
  {path: '', component: OutwardCashLetterDetailsInquiryHomeComponent, children: [
    {path: '', redirectTo:'Createdetailsinquiry', pathMatch:'full'},
    {path: 'Createdetailsinquiry', component:OutwardCashLetterDetailsInquiryComponent,
    
    data: {
      title: 'Outward Cash Letter Details Inquiry'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterDetailsInquiryRoutingModule { }
