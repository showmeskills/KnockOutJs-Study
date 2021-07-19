import $ from "jquery";
import ko from "knockout";
class Account {
    Id: number;
    Name: string;
    Balance: number;
  
    constructor(id: number, name: string, balance: number) {
        this.Id = id;
        this.Name = name;
        this.Balance = balance;
    }
    AddNewAccount(account: any, Accounts: ko.ObservableArray) {
        const id = $("#txtNewId").val();
        const name = $("#txtNewName").val();
        const balance = $("#txtNewBalance").val() as string;
        const newAccount = new account(id, name, parseInt(balance));
        // Accounts([
        //     ...Accounts(),
        //     newAccount
        // ]);
        Accounts.push(newAccount)
        $("#txtNewId").val("");
        $("#txtNewName").val("");
        $("#txtNewBalance").val("");
    }
    RemoveAccount(id: number, Accounts: ko.ObservableArray) {
        const newArr = ko.utils.arrayFilter(Accounts(), (item) => {
            return item.Id !== id;
        })
        Accounts(newArr)
    }
    SelectIndex(SelectedAccountIndex:ko.Observable) {
        $("#ddlAccounts").on("change", function () {
            const selectedIndex: any = document.getElementById("ddlAccounts");
            const index = selectedIndex!.selectedIndex;
            SelectedAccountIndex(index);
        })
    }
}

export default Account;
