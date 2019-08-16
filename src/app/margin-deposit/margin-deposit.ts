export class MarginDeposit {
    id: Number;
    code: String;
    description: String;
    status: String;
    effectiveDate: Date = new Date();
    margintype:any ;
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