import ko from "knockout";
import { Observable,ObservableArray } from "knockout";

class Account {
    Id:Observable<number>;
    Name:Observable<string>;
    Balance:Observable<number>;
    Transactions:ObservableArray<number>
    constructor(Id:number, Name:string, Balance:number,transactions:number[]){
        this.Id = ko.observable(Id);
        this.Name = ko.observable(Name);
        this.Balance = ko.observable(Balance);
        this.Transactions = ko.observableArray(transactions);
    }
}

export default Account;