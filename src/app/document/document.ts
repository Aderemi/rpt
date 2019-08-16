import { InstrumentRegister } from "../registration/registration";

export class Document {
	docCategory: String;
	docType: String;
	reference: String;
	description: String;
	docIssuedate: String;
	validityPeriod: String;
	expMaturityDate: Date;
	docCurrency: String;
	docAmount: String;
	issuedBy: String;
	supplementInfo: String;
	originalCop: String;
	copiesRec: String;
	dateReceived: Date;
	scanned: String;
	remarks: String;
	instrumentRegister : InstrumentRegister;
}
