import Account from "../model/Account";
import ko from "knockout";

interface AccountViewModel{
    Id:ko.Observable,
    Name:ko.Observable,
    Balance:ko.Observable,
}

//viewModel
//when the variable is wrapped by ko.observable it will return a function;
//such as accViewModel.Id()
const AccountViewModel = function(this:AccountViewModel,acc:Account){
   this.Id = ko.observable(acc.Id);
   this.Name = ko.observable(acc.Name); 
   this.Balance = ko.observable(acc.Balance); 
}as any as {new (acc:Account):AccountViewModel}

export default AccountViewModel;
    
