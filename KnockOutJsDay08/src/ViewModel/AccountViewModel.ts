import * as ko from "knockout";
import { ObservableArray, Computed, Observable } from "knockout";

import Account from "../model/Account";

interface AccountViewModel {
    Accounts: ObservableArray<Account>
    Count: Computed<number>
    SelectAccount(account: Account): any
    SelectedAccount: Observable<Account | null>
    AmountToDeposite: Observable<number>
    Deposite():void;
    WithDraw(minAmount:number):void;
    AmountToTransc:Observable<number>
    DeleteAccount(account:Account):void;
    Id: Observable<number>;
    Name: Observable<string>;
    Balance: Observable<number>;
    AddNewAccount():void;
}

const AccountViewModel = function (this: AccountViewModel, account: Account) {
    this.Accounts = ko.observableArray([
        new Account(1, 'A1', 10000,),
        new Account(2, 'A2', 20000,),
        new Account(3, 'A3', 30000,),
        new Account(4, 'A4', 40000,),
    ])
    this.Count = ko.computed(() => this.Accounts().length)

    this.SelectedAccount = ko.observable(null);
    //直接可以把当前循环的数组传进来
    this.SelectAccount = (account: Account) => {
        this.SelectedAccount(account)
    }

    this.AmountToDeposite = ko.observable(0);
    this.Deposite = () => {
        this.SelectedAccount()!.Balance(this.SelectedAccount()!.Balance() + (this.AmountToDeposite()/1));
    }
    this.AmountToTransc = ko.observable(0);
    this.WithDraw = (minAmount:number)=>{
        if(this.SelectedAccount()!.Balance() - (this.AmountToTransc()/1) < minAmount){
            alert("Insufficient Balance");
        }else{
            this.SelectedAccount()!.Balance(this.SelectedAccount()!.Balance() - (this.AmountToTransc()/1));
        }
    }
    //delete
    //method one
    // this.DeleteAccount = (Id:number)=>{
    //     const newArr = ko.utils.arrayFilter(this.Accounts(),(item)=>{
    //         return item.Id !== Id;
    //     })
    //     this.Accounts(newArr);
    // }
    //methid two
    this.DeleteAccount = (account:Account)=>{
        this.Accounts.remove(account)
    }
    //add and 改
    this.Id = ko.observable(0);
    this.Name = ko.observable("");
    this.Balance = ko.observable(0);
    this.AddNewAccount = ()=>{
        for(let i = 0; i < this.Accounts().length; i++){
            if(this.Accounts()[i].Id() === (this.Id()/1)){
                this.Accounts()[i].Id(this.Id());
                this.Accounts()[i].Name(this.Name());
                this.Accounts()[i].Balance(this.Balance())
                break;
            }else{
                this.Accounts.push(new Account(this.Id(),this.Name(),this.Balance()))
                break;
            }
        }
        // this.Accounts.push(new Account(this.Id(),this.Name(),this.Balance()))
        
        this.Id(0);
        this.Name("");
        this.Balance(0);
    }
} as any as { new(account: Account): AccountViewModel }

export default AccountViewModel;