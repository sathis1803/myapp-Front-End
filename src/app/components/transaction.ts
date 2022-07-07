import { Account } from "./account";
import { Branch } from "./branch";

export class Transaction{
        transId!:number;
        transType!:boolean;
        accNo!:number;
        branchId!:number;
        transAmount!:number;
        localDateTime!:Date;
        account: Account={
                accNo: 0,
                accHolderName: "",
                accOpenDate: "",
                balance: 0,
                mobileNo: "",
                panNo: "",
                accType: "",
                accStatus: true,
                branchId: 0,
                branch: new Branch
        }
}