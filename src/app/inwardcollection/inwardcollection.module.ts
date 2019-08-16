import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InwardcollectionRoutingModule } from './inwardcollection-routing.module';
// import { InwardcollectionhomeComponent } from './inwardcollectionhome/inwardcollectionhome.component';
// import { InwardCollectionAcceptanceComponent } from './inward-collection-acceptance/components/inward-collection-acceptance/inward-collection-acceptance.component';
// import { InwardCollectionAdjustmentComponent } from './inward-collection-adjustment/components/inward-collection-adjustment/inward-collection-adjustment.component';
// import { InwardCollectionAmendmentComponent } from './inward-collecion-amendment/components/inward-collection-amendment/inward-collection-amendment.component';
// import { InwardCollectionCancellationComponent } from './inward-collection-cancellation/components/inward-collection-cancellation/inward-collection-cancellation.component';
// import { InwardCollectionOrderReceivedComponent } from './inward-collection-order-received/components/inward-collection-order-received/inward-collection-order-received.component';
// import { InwardCollectionDocumentsDeliveryComponent } from './inward-collection-documents-delivery/components/inward-collection-documents-delivery/inward-collection-documents-delivery.component';
// import { InwardCollectionDetailsInquiryComponent } from './inward-collection-details-inquiry/components/inward-collection-details-inquiry/inward-collection-details-inquiry.component';
// import { InwardCollectionMasterComponent } from './inward-collection-master/components/inward-collection-master/inward-collection-master.component';
// import { InwardCollectionProductComponent } from './inward-collection-product/inward-collection/components/inward-collection-product.component';
// import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
// import { InwardCollectionPaymentComponent } from './inward-collection-payment/components/inward-collection-payment/inward-collection-payment.component';

@NgModule({
  declarations: [
    // InwardcollectionhomeComponent,
    // InwardCollectionProductComponent,
    // InwardCollectionAcceptanceComponent,
    // InwardCollectionAdjustmentComponent,
    // InwardCollectionAmendmentComponent,
    // InwardCollectionCancellationComponent,
    // InwardCollectionOrderReceivedComponent,
    // InwardCollectionDocumentsDeliveryComponent,
    // InwardCollectionDetailsInquiryComponent,
    // InwardCollectionMasterComponent,
    // InwardCollectionPaymentComponent
    
  ],
  imports: [
    CommonModule,
    InwardcollectionRoutingModule,
    // SharedModule, 
    FormsModule
  ]
})
export class InwardcollectionModule { }
