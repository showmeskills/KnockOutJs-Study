import ko from "knockout";

class Account{
    Id:ko.Observable<number>;
    Name:ko.Observable<string>;
    Balance:ko.Observable<number>;
    Deposit:ko.Observable<number>;
    constructor(Id:number=0,Name:string="",Balance:number=0,Deposit:number=0){
        this.Id = ko.observable(Id);
        this.Name = ko.observable(Name);
        this.Balance = ko.observable(Balance);
        this.Deposit = ko.observable(Deposit);
    }
}

export default Account;