export class CollateralType {
    id: Number;
    code: String;
    description: String;
    bankId: Number = null;
    status: String;
    effectiveDate: Date = new Date();
}