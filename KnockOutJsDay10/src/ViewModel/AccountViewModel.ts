import ko from "knockout";
import Account from "../model/Account";
interface AccountViewModel{
    Accounts:ko.ObservableArray<Account>;
    DynamicallyTemplate(account:Account):string;
}

export const AccountViewModel = function(this:AccountViewModel,account:Account){
    this.Accounts = ko.observableArray([
        new Account(0,"A1",10000),
        new Account(1,"A2",20000),
        new Account(2,"A3",30000),
        new Account(3,"A4",40000),
    ])
    this.DynamicallyTemplate = (account)=>{
       return account.Balance() > 5000? "low-templ":"high-templ"
    }
}as any as({new(account:Account):AccountViewModel})