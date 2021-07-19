import ko from "knockout";
import { Observable, ObservableArray,Computed } from "knockout";
import Account from "../model/Account";
interface AccountViewModel {
    Id: Observable
    Name: Observable
    Balance: Observable
    Accounts: ObservableArray
    AddNewAccount(acc: Account, Accounts: ObservableArray): void
    RemoveAccount(id: number): void;
    SelectedAccountIndex: Observable;
    SelectedIndex():void;
    TotalBalance:Computed
}

//viewModel
const AccountViewModel = function (this: AccountViewModel, acc: Account) {
    const _this = this;
    this.Id = ko.observable(acc.Id);
    this.Name = ko.observable(acc.Name);
    this.Balance = ko.observable(acc.Balance);
    var a1 = new Account(1, "A1", 10000);
    var a2 = new Account(2, "A2", 20000);
    var a3 = new Account(3, "A3", 30000);
    this.Accounts = ko.observableArray([
        a1,
        a2,
        a3
    ])
    this.AddNewAccount = () => acc.AddNewAccount(Account, this.Accounts);
    this.RemoveAccount = (id: number) => acc.RemoveAccount(id, this.Accounts);
    this.SelectedAccountIndex = ko.observable(0);
    acc.SelectIndex(this.SelectedAccountIndex)

    this.TotalBalance = ko.computed(()=>{
        let totalBalance = 0;
        ko.utils.arrayForEach(this.Accounts(),(item)=>{
            totalBalance += item.Balance;
        })
        return totalBalance
    })
  
} as any as { new(acc: Account): AccountViewModel }

export default AccountViewModel;

