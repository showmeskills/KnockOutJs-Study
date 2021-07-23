import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import Address from "./model/Address";
import {PersonViewModel} from "./ViewModel/PersonViewModel";

import Account from "./model/Account";
import {AccountViewModel} from "./ViewModel/AccountViewModel";

$(document).ready(function () {
  const address = new Address();
  const personViewModel = new PersonViewModel(address);
  const account = new Account();
  const accountViewModel = new AccountViewModel(account);
  ko.applyBindings(personViewModel,$("#app")[0]);
  ko.applyBindings(accountViewModel,$("#account")[0])
})
