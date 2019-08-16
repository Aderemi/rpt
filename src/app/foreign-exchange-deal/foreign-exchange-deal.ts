import { InstrumentRegister } from "../registration/registration";


export class ForeignExchangeDeal {
    id: number;
    type: String;
    reference: String;
    counterPartyType:String;
    counterPartyCode:String;
    counterPartyName:String;
    exchangeRate:String;
    remarks:String;
    buyCcy: String;
    sellCcy:String;
    dealDate:Date;
    maturityDate:Date;
    buyAmt:String;
    sellAmt:String;
    instrumentRegister : InstrumentRegister;
}
