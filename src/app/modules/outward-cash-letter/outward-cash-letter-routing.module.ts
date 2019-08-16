import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardCashLetterHomeComponent } from './outward-cash-letter-home/outward-cash-letter-home.component';
import { OutwardCashLetterCreationComponent } from './outward-cash-letter-creation/components/outward-cash-letter-creation/outward-cash-letter-creation.component';

const routes: Routes = [
  {path: '', component: OutwardCashLetterHomeComponent, children: [
    {path: '', redirectTo:'Create', pathMatch:'full'},
    {path: 'Create', component:OutwardCashLetterCreationComponent,
    
    data: {
      title: 'Outward Cash Letter Creation'
    }
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutwardCashLetterRoutingModule { }
