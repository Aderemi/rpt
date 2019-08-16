import { InstrumentRegister } from "../registration/registration";


export class PartyCategory {
	 id:number;
     partyCat:String;
	 partyType:String;
	 partyCode:String;
	 location:String;
	 address:String;
	 financialInvolvementType:String;
	 involvementQuotation:String;
	involvementValue:String;
	involvementValCurr:String;

	pendingChangeType:String;
	pendingChangeValue:String;
	pendingChangeValCurr:String;
	
	remarks:String;
    partyName:String;
	partyLocation:String;
	 reference:String;
	 instrumentRegister : InstrumentRegister;
}
