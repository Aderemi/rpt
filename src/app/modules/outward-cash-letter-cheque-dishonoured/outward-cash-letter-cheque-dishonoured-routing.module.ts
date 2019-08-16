import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterChequeDishonouredHomeComponent } from './outward-cash-letter-cheque-dishonoured-home/outward-cash-letter-cheque-dishonoured-home.component';
import { OutwardCashLetterChequeDishonouredComponent } from './outward-cash-letter-cheque-dishonoured/components/outward-cash-letter-cheque-dishonoured/outward-cash-letter-cheque-dishonoured.component';
// import { OutwardCashLetterChequeDishonouredHomeComponent } from './outward-cash-letter-cheque-dishonoured-home/outward-cash-letter-cheque-dishonoured-home.component';
// import { OutwardCashLetterChequeDishonouredComponent } from './outward-cash-letter-cheque-dishonoured/components/outward-cash-letter-cheque-dishonoured/outward-cash-letter-cheque-dishonoured.component';

const routes: Routes = [

  {path: '', component: OutwardCashLetterChequeDishonouredHomeComponent, children: [
    {path: '', redirectTo:'Createchequedis', pathMatch:'full'},
    {path: 'Createchequedis', component:OutwardCashLetterChequeDishonouredComponent,
    
    data: {
      title: 'Outward Cash Letter Cheque Dishonoured'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterChequeDishonouredRoutingModule { }
