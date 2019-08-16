import { InwardBankPayment } from "../../inward-bank-payment/inward-bank-payment";

export class InwardBankPaymentCancellation {

    id : number;
	
	inwardBankPayment : InwardBankPayment;

	reason : string;
	
	cancellationNarative : string;
	
	responseStatus : string;
	
	responseNarative : string;
	
	cancellationAction : string;
	
}
