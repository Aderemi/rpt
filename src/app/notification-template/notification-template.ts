import { NotificationType } from "../notification-type/notification-type";

export class NotificationTemplate {
    id: number;
    code: string;
    notificationType: NotificationType;
    deliveryMethod: string;
    adviceTemplate: string;
    messageTemplate: string;
    specialPrinter: string;
    specialPrinterClass: string;
    printPromptMsg: string;
    effectiveDate:Date = new Date();
    status: string;

    constructor(){
        this.notificationType = new NotificationType()
        this.effectiveDate = new Date()
    }
}
