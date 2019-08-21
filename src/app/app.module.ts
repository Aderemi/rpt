import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './snippets/components/layouts/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { ImportLetterCreditProductComponent } from './import-letter-credit-product/import-letter-credit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InwardBankPaymentProductComponent } from './inward-bank-payment-product/inward-bank-payment-product.component';
import { InwardCashLetterProductComponent } from './inward-cash-letter-product/inward-cash-letter-product.component';
import { InwardCollectionProductComponent } from './inward-collection-product/inward-collection-product.component';
import { InwardCustomerPaymentProductComponent } from './inward-customer-payment-product/inward-customer-payment-product.component';
import { WarrantProductComponent } from './warrant-product/warrant-product.component';
// import { WarrantProductComponent } from './warrant-product/warrant-product.component';
// import {}
import { DigitsOnlyDirective } from './directives/digits-only.directive';
import { DecimalPipe, CommonModule } from '@angular/common';
import { GuaranteeReceivedProductComponent } from './guarantee-received-product/guarantee-received-product.component';
import { NavbarComponent } from './snippets/components/layouts/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
// import { InstrumentComponent } from './instrument/instrument.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceRegistrationComponent } from './service-registration/service-registration.component';
import { InstrumentprocessingComponent } from './instrumentprocessing/instrumentprocessing.component';
import { SidebarCollapseDirective } from './directives/sidebar-collapse.directive';
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
import { QuillModule } from 'ngx-quill';
import { ReportSheetsComponent } from './report-sheets/report-sheets.component';
import { ModalsComponent } from './modals/modals.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { QueryBuilderComponent } from './report-sheets/query-builder/query-builder.component';
import { TemplateComponent } from './report-sheets/template/template.component';
import { ConnectionComponent } from './report-sheets/connection/connection.component';
import { GroupComponent } from './report-sheets/group/group.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';

// import { NotificationMessageTemplateComponent } from './notification-message-template/notification-message-template.component';
// import {form}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImportLetterCreditProductComponent,
    InwardBankPaymentProductComponent,
    InwardCashLetterProductComponent,
    InwardCollectionProductComponent,
    InwardCustomerPaymentProductComponent,
    WarrantProductComponent,
    AccountComponent,
    RegistrationComponent,
    InstrumentprocessingComponent,
    ServiceRegistrationComponent,
    GuaranteeReceivedProductComponent,
    InwardCollectionAmendmentComponent,
    InwardCollectionAcceptanceComponent,
    InwardCollectionAdjustmentComponent,
    InwardCollectionCancellationComponent,
    InwardCollectionDetailsInquiryComponent,
    InwardCollectionDocumentsDeliveryComponent,
    InwardCollectionOrderReceivedComponent,
    InwardCollectionPaymentComponent,
    ExchangeRateTypeComponent,
    ExchangeRateTypesComponent,
    ExchangeRateComponent,
    ExchangeRatesComponent,
    InstrumentComponent,
    UpdateruleCategoryComponent,
    UpdateruleCategorysComponent,
    UpdateruleComponent,
    WarrantComponent,
    InwardBankPaymentComponent,
    InwardBankPaymentCancellationComponent,
    AdhocNotificationComponent,
    NotificationCategoryComponent,
    NotificationTypeComponent,
    NotificationTemplateComponent,
    SpecialPrinterClassComponent,
    SpecialPrinterComponent,
    AssignedBusinessProcessComponent,
    AssignedChargeComponent,
    AssignedConfigurationComponent,
    AssignedControlAccountComponent,
    AssignedCurrencyComponent,
    AssignedFieldComponent,
    AssignedMappingComponent,
    AssignedMilestoneComponent,
    AssignedSectionComponent,
    InstrumentSampleComponent,
    ChargeComponent,
    ChargesComponent,
    ChecklistsComponent,
    DocumentsComponent,
    PartyCategoriesComponent,
    MarginDepositsComponent,
    MarginDepositComponent,
    MarginDepositTypesComponent,
    MarginDepositTypeComponent,
    CollateralsComponent,
    CollateralComponent,
    CollateralTypesComponent,
    CollateralTypeComponent,
    // NotificationMessageTemplateComponent,
    DigitsOnlyDirective,
    SidebarCollapseDirective,



NavbarComponent,
    SidebarComponent,
    LoginComponent,
    InvoiceComponent,
    ExchangeComponent,
    ModalComponent,
    ReportSheetsComponent,
    ModalsComponent,
    CarouselComponent,
    QueryBuilderComponent,
    TemplateComponent,
    ConnectionComponent,
    GroupComponent,
    // InstrumentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    SelectDropDownModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
          toolbar: [
            // [{ 'font': [] }],
            // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            // ['blockquote', 'code-block'],
        
            // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            // [{ 'direction': 'rtl' }],                         // text direction
        
            // // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        
            // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            // [{ 'align': [] }],
        
            // ['clean'],                                         // remove formatting button
        
            // ['link', 'image', 'video']                         // link and image, video
          ],
      },
    }),
    AppRoutingModule
  ],
  exports: [
    // DigitsOnlyDirective
  ],
  providers: [ DecimalPipe],
  bootstrap: [AppComponent]
})



export class AppModule { }
