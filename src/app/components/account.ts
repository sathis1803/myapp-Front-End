import { Branch } from "./branch";
export class Account{
    accNo: number = 0;
    accHolderName: string = "";
    accOpenDate: string = "";
    balance: number = 0;
    mobileNo: string = "";
    panNo: string = "";
    accType: string = "Savings";
    accStatus: boolean = true; 
    branchId: number=0;  
    branch: Branch={
        branchId: 0,
        branchName: "",
        branchCity: ""
    }
    
}