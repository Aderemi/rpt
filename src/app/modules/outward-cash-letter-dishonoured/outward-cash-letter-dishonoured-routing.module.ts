import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterDishonouredHomeComponent } from './outward-cash-letter-dishonoured-home/outward-cash-letter-dishonoured-home.component';
import { OutwardCashLetterDishonouredComponent } from './outward-cash-letter-dishonoured/components/outward-cash-letter-dishonoured/outward-cash-letter-dishonoured.component';

const routes: Routes = [
  {path: '', component: OutwardCashLetterDishonouredHomeComponent, children: [
    {path: '', redirectTo:'Createdishonoured', pathMatch:'full'},
    {path: 'Createdishonoured', component:OutwardCashLetterDishonouredComponent,
    
    data: {
      title: 'Outward Cash Letter Dishonoured'
    }
  }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterDishonouredRoutingModule { }
