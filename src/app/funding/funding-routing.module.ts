import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForexRegistrationComponent } from './forex-registration/forex-registration.component';
import { ForexRequestComponent } from './forex-request/forex-request.component';
import { ForexSourceComponent } from './forex-source/forex-source.component';
import { ForexBidCollationBatchComponent } from './forex-bid-collation-batch/forex-bid-collation-batch.component';
import { ForexBidCollationBatchRequestComponent } from './forex-bid-collation-batch-request/forex-bid-collation-batch-request.component';
import { ForexBidAllocationBatchComponent } from './forex-bid-allocation-batch/forex-bid-allocation-batch.component';
import { ForexInterestDistributionComponent } from './forex-interest-distribution/forex-interest-distribution.component';
import { ForexAllocationDetailsInquiryComponent } from './forex-allocation-details-inquiry/forex-allocation-details-inquiry.component';
import { ForexBidSessionComponent } from './forex-bid-session/forex-bid-session.component';
import { ForexProductComponent } from './forex-product/forex-product.component';
import { FundingHomeComponent } from './funding-home/funding-home.component';
import { DomAccountForexAllocationComponent } from './dom-account-forex-allocation/dom-account-forex-allocation.component';

const routes: Routes = [
  {
    path: '', component: FundingHomeComponent, children: [
      { path: '', redirectTo: 'forex', pathMatch: 'full' },
      {
        path: 'forex', component: ForexRegistrationComponent,
        data: {
          title: 'Forex ',
          breadcrumb: 'forex'
        }
      },
      {
        path: 'forexRequest/:navItem', component: ForexRequestComponent,
        data: {
          title: 'Forex Request'
        }
      },
      {
        path: 'forexSource', component: ForexSourceComponent,
        data: {
          title: 'Forex Source'
        }
      },
      {
        path: 'forexBidCollationBatch', component: ForexBidCollationBatchComponent,
        data: {
          title: 'Forex Bid Collation Batch',
          breadcrumb: 'Bid Collation'
        }
      },
      {
        path: 'forexBidCollationBatchRequest', component: ForexBidCollationBatchRequestComponent,
        data: {
          title: 'Forex Bid Collation Batch'
        }
      },
      { path: 'fxProduct/:navItem', component: ForexProductComponent },

      {
        path: 'forexBidAllocationBatchRequest', component: ForexBidAllocationBatchComponent,
        data: {
          title: 'Forex Bid Allocation Batch'
        }
      },
      {
        path: 'domAccountForexAllocation', component: DomAccountForexAllocationComponent,
        data: {
          title: 'DOM Account Forex Allocation'
        }
      },
      {
        path: 'forexInterestDistribution', component: ForexInterestDistributionComponent,
        data: {
          title: 'Forex Interest Distribution'
        }
      },
      {
        path: 'forexAllocaionDetails', component: ForexAllocationDetailsInquiryComponent,
        data: {
          title: 'DOM Account Forex Allocation'
        }
      },
      {
        path: 'forexBidSession', component: ForexBidSessionComponent,
        data: {
          title: 'Forex Bid Session'
        }
      },
      {
        path: 'forex', component: ForexRegistrationComponent,
        data: {
          title: 'Forex '
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundingRoutingModule { }
