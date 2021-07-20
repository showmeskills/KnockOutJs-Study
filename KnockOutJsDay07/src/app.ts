import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import MyViewModel from "./ViewModel/MyViewModel";
import Account from "./model/Account";
import AccountViewModel from "./ViewModel/AccountViewModel";
$(document).ready(function () {
  const myViewModel = new MyViewModel();


  const account = new Account();
  const accountViewModel = new AccountViewModel(account);
  ko.applyBindings(myViewModel,$("#app")[0]);
  ko.applyBindings(accountViewModel,$("#account")[0]);
})
