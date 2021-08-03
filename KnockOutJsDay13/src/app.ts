import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import koMapping from "knockout-mapping";
import Account from "./model/Account";
import {AccountViewModel} from "./ViewModel/AccountViewModel";
$(document).ready(function () {
  const account = new Account();
  const accountViewModel = new AccountViewModel(account);
  $("#btnConvertToJS").on('click',function () {
    const acc = accountViewModel.Accounts()[0];
    const accJS = ko.toJS(acc);
    console.log(accJS.Id, accJS.Name, accJS.Balance);
  })
  $(document).on('click',"#btnConvertToJSON",function () {
    const acc = accountViewModel.Accounts();
    const accJSONString = ko.toJSON(acc);
    console.log(JSON.parse(accJSONString));
  })  

  $(document).on('click',"#btnConvertFromJS",function(){
    const acc = {Id:100,Name:"A100",Balance:10000};
    const accViewModel = koMapping.fromJS(acc);
    console.log(accViewModel.Id(),accViewModel.Name(),accViewModel.Balance());
  })

  $(document).on('click',"#btnConvertFromJSON",function(){
    const acc = '{"Id":"100","Name":"A100","Balance":"10000"}';
    const accViewModel = koMapping.fromJSON(acc);
    console.log(accViewModel.Id(),accViewModel.Name(),accViewModel.Balance());
  })
  ko.applyBindings(accountViewModel,$("#app")[0]);
})
