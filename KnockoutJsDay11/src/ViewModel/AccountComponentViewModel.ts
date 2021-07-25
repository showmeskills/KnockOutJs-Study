import ko from "knockout";
import Account from "../model/Account";
interface AccountComponentViewModel {
    Accounts: ko.ObservableArray<Account>;
}


const AccountComponentViewModel = function (this: AccountComponentViewModel) {
    this.Accounts = ko.observableArray([
        new Account(1, "A1", 10000, [100, -50, 1000, -25]),
        new Account(2, "A2", 20000, [100, -24,]),
        new Account(3, "A3", 30000, [123, -934, 234]),
        new Account(4, "A4", 40000, [1999, 3456, -234, 199]),
    ])
} as any as ({ new(): AccountComponentViewModel })

const template = `
    <table data-bind="foreach:{data:Accounts,as:'Account'}">
        <tr>
            <td data-bind="text:Id"></td>
            <td data-bind="text:Name"></td>
            <td data-bind="text:Balance"></td>
            <td>
                <span data-bind="component:{name:'transaction-component',params:{AccountHoldersName:Name,Amounts:Transactions}}"></span>
            </td>
        </tr>
    </table>
`

// <ul data-bind="foreach:{data:Transactions,as:'Transaction'}">
//     <li data-bind="component:{name:'transaction-component',params:{AccountHoldersName:$parent.Name,Amount:$data}}"></li>
// </ul>




export const AccountComponent = ko.components.register(
    `account-component`, {
    viewModel: AccountComponentViewModel,
    template,
}
)



interface TransactionStringViewModel {
    AccountHoldersName: string
    Amounts: number
}
interface Params {
    AccountHoldersName: string
    Amounts: number
}

const TransactionStringViewModel = function (this: TransactionStringViewModel, params: Params) {
    const { AccountHoldersName, Amounts } = params
    console.log(params)
    this.AccountHoldersName = AccountHoldersName
    this.Amounts = Amounts

} as any as ({ new(): TransactionStringViewModel })

const transactionsTemplate = `
   <ul data-bind="foreach:Amounts">
        <li>
            <span data-bind="text:$parent.AccountHoldersName">deposited</span>
            The amount of $<span data-bind="text:$data"></span> 
        </li>
   </ul>
`

export const TransactionsComponent = ko.components.register(
    `transaction-component`, {
    viewModel: TransactionStringViewModel,
    template: transactionsTemplate,
}
)