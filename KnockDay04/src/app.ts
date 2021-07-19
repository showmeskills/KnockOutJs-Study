import $ from "jquery";
import ko from "knockout";
import Account from "./model/Account";
import AccountViewModel from "./ViewModel/AccountViewModel";


$(document).ready(function () {
   const acc = new Account(1, "Terry4", 1000);
   const accViewModel = new AccountViewModel(acc);
   $("#btnShowDetails").on("click",function () {
      alert(`id:${accViewModel.Id()} balance:${accViewModel.Balance()}`);
   })
   // observable property can be joined with jquery functins
   $("#btnDeposit").on("click",function () {
      accViewModel.Balance(accViewModel.Balance()+Number($("#txtAmount").val()))
   })
   ko.applyBindings(accViewModel);

})
