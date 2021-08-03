import ko from "knockout";
import Account from "../model/Account";

interface AccountViewModel {
    Accounts: ko.ObservableArray<Account>
    AllStatus:Array<String>
}

export const AccountViewModel = function (this: AccountViewModel, acc: Account) {
    this.Accounts = ko.observableArray([
        new Account(1, "A1", 10000, "Active"),
        new Account(2, "A2", 20000, 'InActive'),
        new Account(3, "A3", 30000, 'Closed'),
        new Account(4, "A4", 40000, 'Active'),
        new Account(5, "A4", 40400, 'Inactive'),
        new Account(6, "A4", 20000, 'Closed'),
        new Account(7, "A4", 44000, 'Active'),
    ])
    this.AllStatus = ["Active","Inactive","Closed"]
    //ko.bindingHandlers.CustomName = {}
    ko.bindingHandlers.displayStatus = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
          //这里只能当系统初始化的时候就会出发，并且每个步骤只触发一次
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            //当Status 发生改变的时候 update会出发
            const value = ko.unwrap(valueAccessor());// a javascript function, call this without passing any parameters
            //可以添加额外的颜色 如果在view中没有添加，就默认显示，如果有添加就显示后添加的颜色
            let activeColor = "green";
            let inactiveColor = "red";
            if(allBindings.has("colors")){
                const colors = allBindings.get("colors");
                activeColor = colors[0];
                inactiveColor = colors[1];
            }
            switch (value.toLowerCase()) {
                case "inactive":
                    element.style['text-decoration'] = "none"
                    element.style['color'] = inactiveColor
                    break;
                case "active":
                    element.style['text-decoration'] = "none"
                    element.style.color = activeColor
                    break;
                case "closed":
                    element.style['text-decoration'] = "line-through"
                    break;
                default:
                    throw "Invalid Status"
                   
            }
        }
    }




} as any as ({ new(acc: Account): AccountViewModel })