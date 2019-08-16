// import { Product } from "../../../product/product";
// import { Charge } from "../../../charge/charge";
// import { ProductMilestone } from "../../../product-milestone/product-milestone";
// import { ProductConfiguration } from "../../../product-configuration/product-configuration";
// import { ProductControlAccount } from "../../../product-control-account/product-control-account";
// import { ConfigRef } from "../../../class/config-ref";
// import { CtrlAccRef } from "../../../class/ctrl-acc-ref";
// import { MilestoneRef } from "../../../class/milestone-ref";
// import { Currency } from "../../staticdata/currency/currency";
// import { WarrantType } from "../../warrant/warrant-type/warrant-type";

export class ForexProduct {
    id: number;
    code: String;
    description: String;
    // product: Product;
    pryRefNumScheme: String;
    tempRefNumOption: String;
    tempRefNumScheme: String;
    warrantReq: String;
    warrantType: String;
    baseForCurrEquiTrack: String;
    localCurrEquiTrack: String;
    fundType: String;
    effectiveDate: String;
    status: String;

    // productCurrency : Currency[];
    // productCharge : Charge[];
    // productMilestone : ProductMilestone[];
    // productConfigurations : ProductConfiguration[];
    // productControlAccounts : ProductControlAccount[];
    // configRef : ConfigRef[];
    // ctrlAccRef : CtrlAccRef[];
    // milestoneRef : MilestoneRef[];
    // warrantTypeAttached:WarrantType[];
    // constructor(){
    //     this.product = new Product();
    // }


}

