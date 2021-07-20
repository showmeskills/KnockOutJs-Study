import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import AccountViewModel from "./ViewModel/AccountViewModel";
import Account from "./model/Account";

$(document).ready(function () {
  const account = new Account();
  const accountViewModel = new AccountViewModel(account);
  ko.applyBindings(accountViewModel,$("#app")[0]);
})
