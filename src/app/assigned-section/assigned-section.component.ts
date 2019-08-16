import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InwardCustomerPaymentProductService } from '../inward-customer-payment-product/inward-customer-payment-product.service';
// import { Product } from '../product/product';
// import { ProductService } from '../product/product.service';
// import { LocationRouter } from '../class/LocationRouter';
// import { WarrantProductSectionService } from '../modules/warrant/warrant-product-section/warrant-product-section.service';
// import { WarrantProductSection } from '../modules/warrant/warrant-product-section/warrant-product-section';

@Component({
  selector: 'app-assigned-section',
  templateUrl: './assigned-section.component.html',
  styleUrls: ['./assigned-section.component.css']
})
export class AssignedSectionComponent implements OnInit {
  relatedTaskCurrency: boolean;
  // productSection: WarrantProductSection[];
  // product: Product;
  // navItem: any;
  // datatable: any;
  // operation: string;
  // warrant: WarrantProductSection;
  // prod:Product

  constructor(private _inwardCustomerPaymentProductService: InwardCustomerPaymentProductService,
  //   private _router: Router, private _sectionService: WarrantProductSectionService,
  //   private locator:LocationRouter,
  //   private _activatedRoute: ActivatedRoute, private _productService: ProductService, private chRef: ChangeDetectorRef
  ) {
  //  // this.locator = new LocationRouter(this._router);
  }

  ngOnInit() {
    this.relatedTaskCurrency = true;

    // this._activatedRoute.params.subscribe(params => {
    //   const decode = JSON.parse(atob(params.navItem));
    //   this.product = decode.product;
    //   this.prod = this.product

    //   this.operation = decode.operation;
    //   this._productService.getOne(this.product.id).subscribe(data => {
    //     this.product = data;
    //   });
    // });


    // this._sectionService.getWarrantProductSectionz(this.product.id).subscribe(data => {
    //   this.productSection = data;
    //   if (this.productSection === undefined) {
    //     this.productSection = [];
    //   }
    // });

    // this.chRef.detectChanges();
    // const table = $('#myTable');
    // this.datatable = table.DataTable({
    // });

  }

  // sectionOperation(evt) {
  //   evt.preventDefault();
  //   switch (evt.path[0].innerText) {
  //     case 'Add': {
  //       this.relatedTaskCurrency = false;
  //       break;
  //     }
  //     case 'Modify': {

  //       break;

  //     }
  //     case 'Cancel': {




  //       break;
  //     }
  //     case 'View': {




  //       break;
  //     }
  //     default: {
  //       console.log(this.product);
  //       this.navItem = {
  //         'operation': this.operation,
  //         'product': this.product
  //       };
  //       console.log(this.navItem);
  //       this._productService.setRelatedTaskFlag(true);
      
  //       this.locator.getLocation(this.product.productSubCategory.productCategory.code, this.navItem);
  //     }

  //   }

  // }

  // assign(warrant: any) {
  //   console.log(warrant);
  //   // this.productSection.push(warrant);
  //   // this._inwardCustomerPaymentProductService.addSection(warrant);
  //   this.ngOnInit();
  // }

  // search() {
  //   console.log('searching!!');
  //   this._sectionService.query(this.warrant).subscribe((data => {
  //     this.productSection = data;
  //     console.log(data);
  //     this.chRef.detectChanges();

  //     const table = $('table');
  //     this.datatable = table.DataTable();

  //   }), (err => {
  //     console.log(err);
  //   }));
  // }

}
