import ko from "knockout";


class Account{
    Id:ko.Observable<number>;
    Name:ko.Observable<string>;
    Balance:ko.Observable<number>;
    Status:ko.Observable<string>;
    constructor(Id:number=0,Name:string="",Balance:number=0,Status:string=""){
        this.Id = ko.observable(Id);
        this.Name = ko.observable(Name);
        this.Balance = ko.observable(Balance);
        this.Status = ko.observable(Status);
    }
}

export default Account;