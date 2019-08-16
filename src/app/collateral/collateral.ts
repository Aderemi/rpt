export class Collateral {
    id: Number;
    code: String;
    description: String;
    status: String;
    effectiveDate: Date = new Date();
    collateraltype:any ;
	reference:String ;
    currencyId: any; 
    remarks: String ;	
    amount:any ;
	changeType:String;
    changeAmount:any;
    accountNo:any;
    bankId: Number = null;
    pendcurrency:any;
	instrumentRegister:any ;

}