import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { InwardcollectionhomeComponent } from './inwardcollectionhome/inwardcollectionhome.component';
// import { InwardCollectionOrderReceivedComponent } from './inward-collection-order-received/components/inward-collection-order-received/inward-collection-order-received.component';
// import { InwardCollectionAmendmentComponent } from './inward-collecion-amendment/components/inward-collection-amendment/inward-collection-amendment.component';
// import { InwardCollectionAdjustmentComponent } from './inward-collection-adjustment/components/inward-collection-adjustment/inward-collection-adjustment.component';
// import { InwardCollectionCancellationComponent } from './inward-collection-cancellation/components/inward-collection-cancellation/inward-collection-cancellation.component';
// import { InwardCollectionAcceptanceComponent } from './inward-collection-acceptance/components/inward-collection-acceptance/inward-collection-acceptance.component';
// import { InwardCollectionDocumentsDeliveryComponent } from './inward-collection-documents-delivery/components/inward-collection-documents-delivery/inward-collection-documents-delivery.component';
// import { InwardCollectionPaymentComponent } from './inward-collection-payment/components/inward-collection-payment/inward-collection-payment.component';
// import { InwardCollectionProductComponent } from './inward-collection-product/inward-collection/components/inward-collection-product.component';

const routes: Routes = [{
  // path: '', component: InwardcollectionhomeComponent, children : [
  //   { path: '', redirectTo: 'Receive/:navItem', pathMatch: 'full' },
  //   {path : 'Receive/:navItem', component : InwardCollectionOrderReceivedComponent, data : {
  //     title : 'Inward Collection Order Received'
  //   }},
  //   {path : 'Product/:navItem', component : InwardCollectionProductComponent, data : {
  //     title : 'Inward Collection Product'
  //   } },
  //   {path : 'Amend/:navItem', component : InwardCollectionAmendmentComponent, data : {
  //     title : 'Inward Collection Amendment'
  //   }},
  //   {path : 'Adjust/:navItem', component : InwardCollectionAdjustmentComponent, data:{
  //     title : 'Inward Collection Adjustment'
  //   }},
  //   {path : 'Cancel/:navItem', component : InwardCollectionCancellationComponent, data : {
  //     title : 'Inward Collection Cancellation'
  //   }},
  //   {path : 'Acceptance/:navItem', component: InwardCollectionAcceptanceComponent, data : {
  //     title : 'Inward Collection Acceptance'
  //   }},
  //   {path : 'Document/:navItem', component : InwardCollectionDocumentsDeliveryComponent, data : {
  //     title : 'Inward Collection Documents Delivery'
  //   }},
  //   {path : 'Payment/:navItem', component : InwardCollectionPaymentComponent, data : {
  //     title : 'Inward Collection Payment'
  //   }}
  // ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InwardcollectionRoutingModule { }

