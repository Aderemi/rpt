import { Component, OnInit, ChangeDetectorRef,Input } from '@angular/core';
// import { ProductSubCategory } from '../../../class/product-sub-category';
// import { ProductCategory } from '../../../product-category/product-category';
// import { Product } from '../../../product/product';
// import { ForexProduct } from './forex-product';
// import { ForexProductService } from './forex-product.service';
// import { ProductCategoryService } from '../../../product-category/product-category.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from '../../../product/product.service';
// import { ServerMessagePopUp } from '../../../class/server-message-pop-up';
// import { ProductSubCategoryService } from '../../../services/product-sub-category.service';
// import { PickListItemService } from '../../staticdata/picklistitem/picklistitem.service';
// import { CurrencyService } from '../../staticdata/currency/currency.service';
// import { PickList } from '../../staticdata/picklist/picklist';

@Component({
  selector: 'app-forex-product',
  templateUrl: './forex-product.component.html',
  styleUrls: ['./forex-product.component.css']
})
export class ForexProductComponent implements OnInit {

  @Input()
  // forexProduct:Product;
  // displaySubCat:any[];
  // relatedTaskFlag = false;
  // relatedTaskNum = 0;
  // productSubCategory: ProductSubCategory;
  // productSubCategorys: ProductSubCategory[];

  show = true;
  // prodcat: ProductCategory;
  // product: Product = new Product();
  // products: Product[];
  // pList:PickList[];
  // disPickListItemPry:any[];
  // disPickListItemTemp:any[];
  // pick:PickList;
  // priRefCode:String = 'PR101';
  // tempRefCode:String = 'TR101';


  //view elemnt control
  ref: boolean;
  cod: boolean;
  des: boolean;
  sub: boolean;
  sta: boolean;
  efe: boolean;
  savBtn: boolean;
  savCloBtn: boolean;
  vieBtn: boolean;
  appBtn: boolean;
  canBtn: boolean;
  cloBtn: boolean;
  modBtn: boolean;
  subBtn: boolean;

  private statusOptions: string[];
  // selectedProduct: Product;
  // fxProduct: ForexProduct = new ForexProduct();
  relatedTaskSave = 0;
  datatable: any;
  myselect: any[];
  d: Date;
  dD: number;
  dM: number;
  dY: number;
  operation: string;
  dateString: string;

  refNumScheme :String [];
  constructor(
   
    ) {

    //   // this.importLetterCreditProduct = new ImportLetterCreditProduct();
    //    this.fxProduct.product = new Product();
    //    this.fxProduct.product.productSubCategory = new ProductSubCategory();

    // this.refNumScheme = ['manual','automatic'];

  }
 

 

  // picklistPrimary(){
  //   this.picklistItemService.getPickListItemByCode(this.priRefCode).subscribe(data=>{
  //     console.log("ref code",data);
  //     this.disPickListItemPry = data;
  //     console.log("Pick lists", this.disPickListItemPry);
  //   })
  // }
  // picklistTemporary(){
  //   this.picklistItemService.getPickListItemByCode(this.tempRefCode).subscribe(data=>{
  //     this.disPickListItemTemp = data;
  //     console.log("Pick lists", this.disPickListItemTemp);
  //   })
  // }
 
  ngOnInit() {
  //   this.picklistPrimary();
  //   this.picklistTemporary();

  //   this._activeRoute.params.subscribe(params => {
  //     console.log("this is the object");
  //    console.log(params);
  //    //PARAM FROM THE URL IS PRODUCT, IT HAS A CATEGORY THAT WE ARE INTERSTED IN, 

  //    let decode = JSON.parse(atob(params.navItem));
     
  //    // console.log("this is the object");
  //    console.log(decode)
  //    this.operation = decode.operation;
  //    this.product = decode.product;
  //    this.productSubCategory = decode.product.productSubCategory;
    
  //    const productCatObject = decode.product.productSubCategory.productCategory;
  //    console.log("Product Category object",productCatObject);
    

  //    this.fxProductService.getFilter(productCatObject).subscribe(data=>{
  //     this.productSubCategorys = data;
  //     console.log("Product sub category",this.productSubCategorys);
     
  //  });


  //   if (this.operation == "New") {
  //     this.isNew();
  //   }
  //   else if (this.operation == "Modify") {
  //     //console.log("call me");
  //     this.isModify();
  //   }

  //   else if (this.operation == "View") {
  //     this.isView();
  //   }

  //   else if (this.operation == "Cancel") {
  //     this.isCancel();
  //   }
  //   else if (this.operation == "Activate") {
  //    this.isActivate();
  //   }
  //  });

  //   this.relatedTaskFlag = this._productService.getRelatedTaskFlag();
  //   console.log(this.relatedTaskFlag);
  //   this.d = new Date();
  //   this.dD = this.d.getDate();
  //   this.dM = this.d.getMonth() + 1;
  //   this.dY = this.d.getFullYear();
  //   this.dateString = this.dD + "/" + this.dM + "/" + this.dY;

  }

// isNew(){
//   this.ref = this.des = this.cod = this.sub = false;
//   this.savBtn = this.savCloBtn = true;
//   this.sta = this.efe = true;
//   this.cloBtn = true;


//   if(this.product.id==undefined){
//     this.fxProduct = new ForexProduct();
  
//     this.fxProduct.product = this.product;
  
//   }else{

//       this.fxProductService.getOne(this.product.id)
//       .subscribe((data =>{
//         this.fxProduct = data;
//       }));
//     }

// }

// isModify(){
//   this.ref = this.efe = this.des = this.sub = false;

//   this.cod = this.sta = this.sub = true;
//   this.modBtn = true;
//   //this.savBtn = true;
//   this.cloBtn = true;
//   this._productService.setRelatedTaskFlag(true);
//   this.fxProductService.getOne(this.product.id)
//     .subscribe((data => {
//       this.fxProduct = data;
//     }), (err => {
//       console.log(err);
//     }));
// }
// isView(){
//   this.ref = this.efe = this.des = this.sub = this.cod = this.sta = true;
//   this.relatedTaskFlag = false;
//   this.cloBtn = true;

//   this.fxProductService.getOne(this.product.id)
//     .subscribe((data => {
//       console.log(data);
//       this.fxProduct = data;
//     }), (err => {
//       console.log(err);
//     }));
// }

// isCancel(){
//   this.ref = this.efe = this.des = this.sub = this.cod = this.sta = true;
//   this.canBtn = true;
//   this.cloBtn = true;

//   this.relatedTaskFlag = false;
//   this.fxProductService.getOne(this.product.id)
//     .subscribe((data => {
//       console.log(data);
//       this.fxProduct = data;
//     }), (err => {
//       console.log(err);
//     }));
// }

// isActivate(){
//   this.ref = this.efe = this.des = this.sub = this.cod = this.sta = true;
//   this.appBtn = true;
//   this.cloBtn = true;
//   this.relatedTaskFlag = false;
//   this.fxProductService.getOne(this.product.id)
//     .subscribe((data => {
//       console.log(data);
//       this.fxProduct = data;
//     }), (err => {
//       console.log(err);
//     }));
// }







//   processForm(mode) {
    
//     switch (mode) {
//       case 'save':
//         {
//           if (this.fxProduct.id == undefined) {
//         //    this.importLetterCreditProduct.effectiveDate = this.dateString;
//             this.fxProduct.status = "Inactive";
//             this.fxProductService.createFxProduct(this.fxProduct)
//               .subscribe((data => {
//                 this._smp.popUpAlertSuccess();
//                 console.log(data.body);

//                 this.fxProduct = data.body; this.product = data.body.product;
//                 this._productService.setRelatedTaskFlag(true);
//                 this.relatedTaskFlag = true;
//               }), (err => {

//                 let erx = '';
//                 erx += '<div class=\'pop-upx-div\'>';
//                 // console.log(err.prototype);
//                 for (const i in err.error) {
//                   erx += '<li class=\'pop-up\'><span class=\'fa fa-close\' style=\'color : red;\'></span> '
//                     + err.error[i] +
//                     '</li>';
//                 }

//                 erx += '</div>';
//                 console.log(erx)
//                 this._smp.popUpAlertError(err);
//               }));
//           } else {
//           //  this.importLetterCreditProduct.effectiveDate = this.dateString;
//             this.fxProduct.status = "Inactive";
//             this.fxProductService.updateFxProduct(this.fxProduct)
//               .subscribe((data => {

//                 console.log(data);

//                 this.fxProduct = data.body;
//                 this._productService.setRelatedTaskFlag(false);
//                 this.relatedTaskFlag = false;
//               }), (err => {
//               }));
//           }

//           break;
//         }
//       case 'savenclose':
//         {
//           if (this.fxProduct.id == undefined) {
//             this.fxProductService.createFxProduct(this.fxProduct)
//               .subscribe((data => {

//                 console.log(data);

//                 this.fxProduct = data.body;
//                 this._productService.setRelatedTaskFlag(false);
//                 this.relatedTaskFlag = false;
//               this._router.navigate(['product']);
//               }), (err => {
//               }));
//           } else {
//             this.fxProductService.updateFxProduct(this.fxProduct)
//               .subscribe((data => {

//                 console.log(data);

//                 this.fxProduct = data.body;
//                 this._productService.setRelatedTaskFlag(true);
//               this._router.navigate(['product']);
//               }), (err => {
//               }));
//           }

//           break;
//         }
//       case 'approve':
//         {
//           if (this.fxProduct.status != "Active") {
//             this.fxProduct.status = "Active";
//             this.fxProductService.updateFxProduct(this.fxProduct)
//               .subscribe((data => {

//                 console.log(data);

//                 this.fxProduct = data.body;
//                 this._productService.setRelatedTaskFlag(true);
//               this._router.navigate(['product']);
//               }), (err => {
//               }));
//           } else {
//             this._smp.popUpAlertError("This product is Active");
//             this._router.navigate(['product']);
//           }
//           break;
//         }


//       case 'cancel':
//         {
//           if (this.fxProduct.status != "Cancelled") {
//             this.fxProduct.status = "Cancelled";
//             this.fxProductService.updateFxProduct(this.fxProduct)
//               .subscribe((data => {

//                 console.log(data);

//                 this.fxProduct = data.body;
//                 this._productService.setRelatedTaskFlag(true);
//               this._router.navigate(['product']);
//               }), (err => {
//               }));
//           } else {
//             this._smp.popUpAlertError("This product has already been cancelled before now, cancel operation cannot be performed on it.");
//             this._router.navigate(['product']);
//           }
//           break;
//         }



//       case 'modify':
//         {
//           if (this.fxProduct.id == undefined) {
//           //  this.importLetterCreditProduct.effectiveDate = this.dateString;

//             this.fxProductService.createFxProduct(this.fxProduct)
//               .subscribe((data => {

//                 console.log(data);

//                 this.fxProduct = data.body;
//                 this._productService.setRelatedTaskFlag(false);
//                 this.relatedTaskFlag = true;
//                 this._router.navigate(['product']);
//               }), (err => {
//               }));
//           } else {
      //      this.importLetterCreditProduct.effectiveDate = this.dateString;

  //           this.fxProductService.updateFxProduct(this.fxProduct)
  //             .subscribe((data => {

  //               console.log(data);

  //               this.fxProduct = data.body;
  //               this._productService.setRelatedTaskFlag(true);
  //               this.relatedTaskFlag = true;
  //               this._router.navigate(['product']);
  //             }), (err => {
  //             }));
  //         }

  //         break;
  //       }
  //     default: {
  //       this._router.navigate(['product']);
  //     }

  //   }

  // }



  // relatedTaskDisplay(evt) {
  //   evt.preventDefault();
  //   switch (evt.path[0].innerText) {
  //     case 'Charges': {
  //       this._router.navigate(['assignedcharge']);
  //       break;

  //     }
  //     case 'Milestone': {
  //       this._router.navigate(['assignedmilestone']);
  //       break;

  //     }
  //     case 'Currency': {
  //       this._router.navigate(['assignedcurrency']);
  //       break;
  //     }
  //     default: {

  //     }

  //   }

  // }
  // equals(o1, o2) {
  //   if(o1 != null && o2 != null){
  //     // console.log("-------------------")
  //     // console.log(o1.code)
  //     // console.log(o2.code)
  //     // console.log(o1.code == o2.code)
  //     // console.log("-------------------")
  //    return  o1.code == o2.code ? true : false;
  //   }
  //   return false;
  // }

}
