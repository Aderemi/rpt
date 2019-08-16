import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterChequeHomeComponent } from './outward-cash-letter-cheque-home/outward-cash-letter-cheque-home.component';
import { OutwardCashLetterChequeCreationComponent } from './outward-cash-letter-cheque-creation/components/outward-cash-letter-cheque-creation/outward-cash-letter-cheque-creation.component';

const routes: Routes = [
  {path: '', component: OutwardCashLetterChequeHomeComponent, children: [
    {path: '', redirectTo:'Createcheque', pathMatch:'full'},
    {path: 'Createcheque', component:OutwardCashLetterChequeCreationComponent,
    
    data: {
      title: 'Outward Cash Letter Cheque Creation'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterChequeRoutingModule { }
