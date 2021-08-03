import ko from "knockout";
import Account from "../model/Account";

interface AccountViewModel {
    Accounts:ko.ObservableArray<Account>
}

export const AccountViewModel = function (this: AccountViewModel, acc: Account) {
    this.Accounts = ko.observableArray([
        new Account(1,"A1",10000),
        new Account(2,"A2",20000),
        new Account(3,"A3",30000),
    ])
} as any as ({ new(acc: Account): AccountViewModel })