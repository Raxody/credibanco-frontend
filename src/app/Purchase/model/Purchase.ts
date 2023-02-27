export class Purchase{
    referenceNumber: String;
    pan:String;
    purchaseValue:String;
    purchaseAddress:String;
    status:String;
    timePurchase:String;

    constructor() {
        this.referenceNumber = "";
        this.pan = "";
        this.purchaseValue = "";
        this.purchaseAddress = "";
        this.status = "";
        this.timePurchase = "";
      }
}