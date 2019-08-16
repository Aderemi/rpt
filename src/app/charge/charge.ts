import { InstrumentRegister } from "../registration/registration";


export class Charge {
    id:number;
	chargeCode:String;
	charge:String
	expectedCurr:String;
	expectedVal:String;
	actualCurr:String;
	actualAmt:String;
	pendChanType:String;
	pendChanAmt:String;
	pendChanAmtCurr:String;
	remarks:String;
	instrumentRegister : InstrumentRegister;
	
}
