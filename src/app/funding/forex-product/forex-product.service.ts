import { Injectable } from '@angular/core';
// import { ForexProduct } from './forex-product';
// import { ProductService } from '../../../product/product.service';
// import { HttpClient } from '@angular/common/http';
// import { GlobalUrl } from '../../../class/global-url';
// import { ProductSubCategory } from '../../../class/product-sub-category';
// import { PickListItem } from '../../staticdata/picklistitem/picklistitem';

@Injectable({
  providedIn: 'root'
})
export class ForexProductService {

  // fxProduct : ForexProduct;
  relatedTaskFlag = false;
  
  
  constructor
  (
    // private _productService : ProductService, 
    // private _http: HttpClient
    // , private url : GlobalUrl
    ) {
    // this.fxProduct = new ForexProduct();
   }


//    getOne(id : number){
//     // return this._http.get(this.baseUrl, this.options)
//              ///              .pipe(map((response : Response) => response.json())); 
//        return this._http.get<ForexProduct>(this.url.baseUrl+'/api/forexProduct/'+id);                  
//    }
// getAllFxProducts(){
//   return this._http.get<ForexProduct[]>(this.url.baseUrl+ '/api/forexProducts');
// }

//   createFxProduct(fxProduct){
//     this.fxProduct = fxProduct;
//     return this._http.post<any>(this.url.baseUrl+"/api/forexProduct",
//      this.fxProduct, {observe : 'response'});
//   }

//   updateFxProduct(fxProduct){
//     this.fxProduct = fxProduct;
//     return this._http.put<any>(this.url.baseUrl+"/api/forexProduct",
//     this.fxProduct, {observe : 'response'});
//   }

//   setRelatedTaskFlag(flag){
//     this.relatedTaskFlag = flag;
//   }

//   getRelatedTaskFlag(){
//     return this.relatedTaskFlag;
//   }


//   getFilter(ilc: any){
//     console.log(ilc);
//     return this._http.post<ProductSubCategory[]>(this.url.baseUrl+"/api/search/productSubCategories", ilc);
//   }

//   getPickListItem(picklist:any){
//     return this._http.post<PickListItem[]>(this.url.baseUrl+"/api/picklistitems/searchItem", picklist);

//   }
}
