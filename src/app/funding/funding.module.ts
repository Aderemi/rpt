import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundingRoutingModule } from './funding-routing.module';
import { FormsModule } from '@angular/forms';
import { ForexRegistrationComponent } from './forex-registration/forex-registration.component';
import { ForexBidAllocationBatchComponent } from './forex-bid-allocation-batch/forex-bid-allocation-batch.component';
import { ForexAllocationComponent } from './forex-allocation/forex-allocation.component';
import { DomAccountForexAllocationComponent } from './dom-account-forex-allocation/dom-account-forex-allocation.component';
import { ForexAllocationDetailsInquiryComponent } from './forex-allocation-details-inquiry/forex-allocation-details-inquiry.component';
import { ForexInterestDistributionComponent } from './forex-interest-distribution/forex-interest-distribution.component';
import { ForexBidSessionComponent } from './forex-bid-session/forex-bid-session.component';
import { ForexBidCollationBatchRequestComponent } from './forex-bid-collation-batch-request/forex-bid-collation-batch-request.component';
import { ForexProductComponent } from './forex-product/forex-product.component';
import { ForexRequestComponent } from './forex-request/forex-request.component';
import { ForexSourceComponent } from './forex-source/forex-source.component';
import { ForexBidCollationBatchComponent } from './forex-bid-collation-batch/forex-bid-collation-batch.component';
import { ForexInterestDistributionRecipientComponent } from './forex-interest-distribution-recipient/forex-interest-distribution-recipient.component';
import { FundingHomeComponent } from './funding-home/funding-home.component';
import { ForexUnutilizedBalanceRepatriationComponent } from './forex-unutilized-balance-repatriation/forex-unutilized-balance-repatriation.component';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { ForexRegistrationComponent } from './forex-registration/forex-registration.component';
// import { ReferenceDefinitionComponent } from 'src/app/reference-definition/reference-definition.component';
// import { ForexBidAllocationBatchComponent } from './forex-bid-allocation-batch/forex-bid-allocation-batch.component';
// import { ForexAllocationComponent } from './forex-allocation/forex-allocation.component';
// import { ForexAllocationDetailsInquiryComponent } from './forex-allocation-details-inquiry/forex-allocation-details-inquiry.component';
// import { ForexInterestDistributionComponent } from './forex-interest-distribution/forex-interest-distribution.component';
// import { ForexBidSessionComponent } from './forex-bid-session/forex-bid-session.component';
// import { ForexBidCollationBatchRequestComponent } from './forex-bid-collation-batch-request/forex-bid-collation-batch-request.component';
// import { ForexProductComponent } from './forex-product/forex-product.component';
// import { ForexRequestComponent } from './forex-request/forex-request.component';
// import { ForexSourceComponent } from './forex-source/forex-source.component';
// import { ForexBidCollationBatchComponent } from './forex-bid-collation-batch/forex-bid-collation-batch.component';
// import { ForexInterestDistributionRecipientComponent } from './forex-interest-distribution-recipient/forex-interest-distribution-recipient.component';
// import { RelatedTaskBarComponent } from 'src/app/related-task-bar/related-task-bar.component';
// import { FundingHomeComponent } from './funding-home/funding-home.component';
// // import { ForexUnutilizedBalanceRepatriationComponent } from './forex-unutilized-balance-repatriation/forex-unutilized-balance-repatriation.component';
// import { DomAccountForexAllocationComponent } from './dom-account-forex-allocation/dom-account-forex-allocation.component';
// import { ForexUnutilizedBalanceRepatriationComponent } from './forex-unutilized-balance-repatriation/forex-unutilized-balance-repatriation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FundingRoutingModule,
    // SharedModule
  ],
  declarations: [
    ForexRegistrationComponent,
    // ReferenceDefinitionComponent,
    ForexBidAllocationBatchComponent,
    ForexAllocationComponent,
    DomAccountForexAllocationComponent,
    ForexAllocationDetailsInquiryComponent,
    ForexInterestDistributionComponent,
    ForexBidSessionComponent,
    ForexBidCollationBatchRequestComponent,
    ForexProductComponent,
    ForexRequestComponent,
    ForexSourceComponent,
    ForexBidCollationBatchComponent,
    ForexInterestDistributionRecipientComponent,
    FundingHomeComponent,
    ForexUnutilizedBalanceRepatriationComponent
  ]
})
export class FundingModule { }
