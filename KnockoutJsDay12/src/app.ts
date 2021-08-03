import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import Account from "./model/Account";
import {AccountViewModel} from "./ViewModel/AccountViewModel";
$(document).ready(function () {
  const account = new Account();
  const accountViewModel = new AccountViewModel(account);
  ko.applyBindings(accountViewModel);
})
