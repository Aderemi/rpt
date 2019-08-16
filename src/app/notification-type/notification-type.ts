export class NotificationType {
     id:number;
     code:string;
     description:string;
     category:string;
     primaryObject:string;
     recipientCategory:string;
     priority:string;
     adHocGeneration:string;
     effectiveDate:Date = new Date();
     status:string;
}
