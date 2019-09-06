import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OutwardBankPaymentComponent } from './modules/outward-bank-payment/component/outward-bank-payment.component';
import {OutwardBankChequeCancellationComponent} from './modules/outward-bank-cheque-cancellation/outward-bank-cheque-cancellation/components/outward-bank-cheque-cancellation/outward-bank-cheque-cancellation.component';
import {OutwardCashLetterCreationComponent} from './modules/outward-cash-letter/outward-cash-letter-creation/components/outward-cash-letter-creation/outward-cash-letter-creation.component';
import { ImportLetterCreditProductComponent } from './import-letter-credit-product/import-letter-credit-product.component';
import { InwardBankPaymentProductComponent } from './inward-bank-payment-product/inward-bank-payment-product.component';
import { InwardCashLetterProductComponent } from './inward-cash-letter-product/inward-cash-letter-product.component';
import { InwardCollectionProductComponent } from './inward-collection-product/inward-collection-product.component';
import { InwardCustomerPaymentProductComponent } from './inward-customer-payment-product/inward-customer-payment-product.component';
import { WarrantProductComponent } from './warrant-product/warrant-product.component';
import { GuaranteeReceivedProductComponent } from './guarantee-received-product/guarantee-received-product.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
// import { InstrumentComponent } from './instrument/instrument.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceRegistrationComponent } from './service-registration/service-registration.component';
import { InstrumentprocessingComponent } from './instrumentprocessing/instrumentprocessing.component';
import { InwardCollectionAmendmentComponent } from './inwardcollection/inward-collecion-amendment/components/inward-collection-amendment/inward-collection-amendment.component';
import { InwardCollectionAcceptanceComponent } from './inwardcollection/inward-collection-acceptance/components/inward-collection-acceptance/inward-collection-acceptance.component';
import { InwardCollectionAdjustmentComponent } from './inwardcollection/inward-collection-adjustment/components/inward-collection-adjustment/inward-collection-adjustment.component';
import { InwardCollectionCancellationComponent } from './inwardcollection/inward-collection-cancellation/components/inward-collection-cancellation/inward-collection-cancellation.component';
import { InwardCollectionDetailsInquiryComponent } from './inwardcollection/inward-collection-details-inquiry/components/inward-collection-details-inquiry/inward-collection-details-inquiry.component';
import { InwardCollectionDocumentsDeliveryComponent } from './inwardcollection/inward-collection-documents-delivery/components/inward-collection-documents-delivery/inward-collection-documents-delivery.component';
import { InwardCollectionOrderReceivedComponent } from './inwardcollection/inward-collection-order-received/components/inward-collection-order-received/inward-collection-order-received.component';
import { InwardCollectionPaymentComponent } from './inwardcollection/inward-collection-payment/components/inward-collection-payment/inward-collection-payment.component';
import { ExchangeRateTypeComponent } from './exchange-rate/exchange-rate-type.component';
import { ExchangeRateTypesComponent } from './exchange-rate/exchange-rate-types.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { ExchangeRatesComponent } from './exchange-rate/exchange-rates.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { UpdateruleCategoryComponent } from './updaterule/updaterule-category.component';
import { UpdateruleCategorysComponent } from './updaterule/updaterule-categorys.component';
import { UpdateruleComponent } from './updaterule/updaterule.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { WarrantComponent } from './warrant/warrant.component';
import { InwardBankPaymentComponent } from './inward-bank-payment/inward-bank-payment/inward-bank-payment.component';
import { InwardBankPaymentCancellationComponent } from './inward-bank-payment-cancellation/components/inward-bank-payment-cancellation/inward-bank-payment-cancellation.component';
import { AdhocNotificationComponent } from './adhoc-notification/adhoc-notification.component';
import { NotificationCategoryComponent } from './notification-category/notification-category.component';
import { NotificationTypeComponent } from './notification-type/notification-type.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { SpecialPrinterClassComponent } from './special-printer-class/special-printer-class.component';
import { SpecialPrinterComponent } from './special-printer/special-printer.component';
import { AssignedBusinessProcessComponent } from './assigned-business-process/assigned-business-process.component';
import { AssignedChargeComponent } from './assigned-charge/assigned-charge.component';
import { AssignedConfigurationComponent } from './assigned-configuration/assigned-configuration.component';
import { AssignedControlAccountComponent } from './assigned-control-account/assigned-control-account.component';
import { AssignedCurrencyComponent } from './assigned-currency/assigned-currency.component';
import { AssignedFieldComponent } from './assigned-field/assigned-field.component';
import { AssignedMappingComponent } from './assigned-mapping/assigned-mapping.component';
import { AssignedMilestoneComponent } from './assigned-milestone/assigned-milestone.component';
import { AssignedSectionComponent } from './assigned-section/assigned-section.component';
import { InstrumentSampleComponent } from './instrument-sample/instrument-sample.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ChargeComponent } from './charge/charge.component';
import { ChargesComponent } from './charge/charges.component';
import { ChecklistsComponent } from './checklist/checklists.component';
import { DocumentsComponent } from './document/documents.component';
import { PartyCategoriesComponent } from './party-category/party-categories.component';
import { MarginDepositsComponent } from './margin-deposit/margin-deposits.component';
import { MarginDepositComponent } from './margin-deposit/margin-deposit.component';
import { MarginDepositTypesComponent } from './margin-deposit/margin-deposit-types.component';
import { MarginDepositTypeComponent } from './margin-deposit/margin-deposit-type.component';
import { CollateralsComponent } from './collateral/collaterals.component';
import { CollateralComponent } from './collateral/collateral.component';
import { CollateralTypesComponent } from './collateral/collateral-types.component';
import { CollateralTypeComponent } from './collateral/collateral-type.component';
import { ModalComponent } from './modal/modal.component';
import { ReportSheetsComponent } from './report-sheets/report-sheets.component';
import { ModalsComponent } from './modals/modals.component';
import { CarouselComponent } from './carousel/carousel.component';
import { QueryBuilderComponent } from './report-sheets/query-builder/query-builder.component';
import { TemplateComponent } from './report-sheets/template/template.component';
import { GroupComponent } from './report-sheets/group/group.component';
import { ConnectionComponent } from './report-sheets/connection/connection.component';
import { RulesComponent } from './rules/rules.component';
// import { NotificationMessageTemplateComponent } from './notification-message-template/notification-message-template.component';

const routes: Routes = [
  {path: '', component : HomeComponent, children : [

    {path:'importletter', component:ImportLetterCreditProductComponent},
    {path:'inwardbank', component:InwardBankPaymentProductComponent},
    {path:'inwardcash', component:InwardCashLetterProductComponent},
    {path:'inwardcoll', component:InwardCollectionProductComponent},
    {path:'inwardcust', component:InwardCustomerPaymentProductComponent},
    {path:'warrant', component:WarrantProductComponent},
    {path:'guarantee', component:GuaranteeReceivedProductComponent},
    {path:'account', component:AccountComponent},
    {path:'instrument', component:InstrumentComponent},
    {path:'register', component:RegistrationComponent},
    {path:'servicereg', component:ServiceRegistrationComponent},
    {path:'instrupro', component:InstrumentprocessingComponent},
    {path:'incolam', component:InwardCollectionAmendmentComponent},
    {path:'incolac', component:InwardCollectionAcceptanceComponent},
    {path:'incolad', component:InwardCollectionAdjustmentComponent},
    {path:'incolca', component:InwardCollectionCancellationComponent},
    {path:'incoldein', component:InwardCollectionDetailsInquiryComponent},
    {path:'incoldode', component:InwardCollectionDocumentsDeliveryComponent},
    {path:'incolorre', component:InwardCollectionOrderReceivedComponent},
    {path:'incolpa', component:InwardCollectionPaymentComponent},
    {path:'ert', component:ExchangeRateTypeComponent},
    {path:'erts', component:ExchangeRateTypesComponent},
    {path:'er', component:ExchangeRateComponent},
    {path:'ers', component:ExchangeRatesComponent},
    {path:'urc', component:UpdateruleCategoryComponent},
    {path:'urcs', component:UpdateruleCategorysComponent},
    {path:'ur', component:UpdateruleComponent},
    {path:'in', component:InvoiceComponent},
    {path:'wa', component:WarrantComponent},
    {path:'inbapa', component:InwardBankPaymentComponent},
    {path:'inbapaca', component:InwardBankPaymentCancellationComponent},
    {path:'adhoc', component:AdhocNotificationComponent},
    {path:'nocat', component:NotificationCategoryComponent},
    {path:'noty', component:NotificationTypeComponent},
    {path:'note', component:NotificationTemplateComponent},
    {path:'spepricla', component:SpecialPrinterClassComponent},
    {path:'spepri', component:SpecialPrinterComponent},
    {path:'assbizpro', component:AssignedBusinessProcessComponent},
    {path:'asscha', component:AssignedChargeComponent},
    {path:'asscon', component:AssignedConfigurationComponent},
    {path:'assconacc', component:AssignedControlAccountComponent},
    {path:'asscurr', component:AssignedCurrencyComponent},
    {path:'assfie', component:AssignedFieldComponent},
    {path:'assmap', component:AssignedMappingComponent},
    {path:'assmil', component:AssignedMilestoneComponent},
    {path:'asssec', component:AssignedSectionComponent},
    {path:'insam', component:InstrumentSampleComponent},
    {path:'exchange', component:ExchangeComponent},
    {path:'chargecomp', component:ChargeComponent},
    {path:'chargescomp', component:ChargesComponent},
    {path:'checklistscomp', component:ChecklistsComponent},
    {path:'documentscomp', component:DocumentsComponent},
    {path:'partycats', component:PartyCategoriesComponent},
    {path:'mardepos', component:MarginDepositsComponent},
    {path:'mardepo', component:MarginDepositComponent},
    {path:'mardepotypes', component:MarginDepositTypesComponent},
    {path:'mardepotype', component:MarginDepositTypeComponent},
    {path:'collats', component:CollateralsComponent},
    {path:'collat', component:CollateralComponent},
    {path:'collattypes', component:CollateralTypesComponent},
    {path:'collattype', component:CollateralTypeComponent},
    {path:'modal', component:ModalComponent},
    {path:'modals', component:ModalsComponent},
    {path:'report', component:ReportSheetsComponent},
    {path:'carousel', component:CarouselComponent},
    {path:'querybuilder', component:QueryBuilderComponent},
    {path:'reporttemplate', component:TemplateComponent},
    {path:'reportgroup', component:GroupComponent},
    {path:'reportconnection', component:ConnectionComponent},
    {path:'rules', component:RulesComponent},


    // {path:'nomete', component:NotificationMessageTemplateComponent},
    
    // {path:'urs', component:UpdaterulesComponent},




  
  
  
  
    {path: 'outward-bank-payment', loadChildren: './modules/outward-bank-payment/outward-bank-payment.module#OutwardBankPaymentModule'},
    { path: 'outwardcashletteradjustment', loadChildren: './modules/outward-cash-letter-adjustment/outward-cash-letter-adjustment.module#OutwardCashLetterAdjustmentModule'},
    { path: 'outward-bank-cheque', loadChildren: './modules/outward-bank-cheque-cancellation/outward-bank-cheque-cancellation.module#OutwardBankChequeCancellationModule'},
    { path: 'outward-cash-letter', loadChildren: './modules/outward-cash-letter/outward-cash-letter.module#OutwardCashLetterModule'},
    { path: 'outwardcashlettercheque', loadChildren: './modules/outward-cash-letter-cheque/outward-cash-letter-cheque.module#OutwardCashLetterChequeModule'},
    { path: 'outwardcashletterchequeadjustment', loadChildren: './modules/outward-cash-letter-cheque-adjustment/outward-cash-letter-cheque-adjustment.module#OutwardCashLetterChequeAdjustmentModule'},
    { path: 'outwardcashletterchequedishonoured', loadChildren: './modules/outward-cash-letter-cheque-dishonoured/outward-cash-letter-cheque-dishonoured.module#OutwardCashLetterChequeDishonouredModule'},
    { path: 'outwardcashletterchequeinquiry', loadChildren: './modules/outward-cash-letter-cheque-inquiry/outward-cash-letter-cheque-inquiry.module#OutwardCashLetterChequeInquiryModule'},
    { path: 'outwardcashlettercreditadviced', loadChildren: './modules/outward-cash-letter-credit-adviced/outward-cash-letter-credit-adviced.module#OutwardCashLetterCreditAdvicedModule'},
    { path: 'outwardcashletterdetailsinquiry', loadChildren: './modules/outward-cash-letter-details-inquiry/outward-cash-letter-details-inquiry.module#OutwardCashLetterDetailsInquiryModule'},
    { path: 'outwardcashletterdishonoured', loadChildren: './modules/outward-cash-letter-dishonoured/outward-cash-letter-dishonoured.module#OutwardCashLetterDishonouredModule'},
    { path: 'guaranteerenewal', loadChildren: './modules/guarantee-issue-renewal/guarantee-issue-renewal.module#GuaranteeIssueRenewalModule'},
    { path: 'guaranteeissuerelease', loadChildren: './modules/guarantee-issue-release/guarantee-issue-release.module#GuaranteeIssueReleaseModule'},
    { path: 'funding', loadChildren: './funding/funding.module#FundingModule'}
  
  ]},
  {path:'login', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
