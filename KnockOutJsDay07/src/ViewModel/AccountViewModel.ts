import ko from "knockout";
import Account from "../model/Account";
import {Observable,ObservableArray,Computed} from "knockout"

interface AccountViewModel{ 
    Id:Observable;
    Name:Observable;
    Balance:Observable;
    Accounts:ObservableArray
    HandleClick():void;
    Length:Computed
}

const AccountViewModel = function (this: AccountViewModel, acc: Account) {
    this.Id = ko.observable(acc.Id);
    this.Balance = ko.observable(acc.Balance);
    this.Accounts = ko.observableArray([
        new Account(1,"A1",10000,[1000,2000,3000]),
        new Account(2,"A2",20000,[1000,2000,3000]),
        new Account(3,"A3",30000,[1000,2000,3000]),
        new Account(4,"A4",40000,[1000,2000,3000]),
    ])
    this.Length = ko.computed(()=>{
        return this.Accounts().length;
    })
    
    this.HandleClick = ()=>{
        this.Accounts.subscribe(function(newVal){
            console.log(newVal)
        })
    }
}as any as{new (acc:Account):AccountViewModel}

export default AccountViewModel;