import $ from "jquery";
import ko from "knockout";
import Account from "./model/Account";
import AccountViewModel from "./ViewModel/AccountViewModel";

import Form from "./model/Form";
import FormViewModel from "./ViewModel/FormViewModel";

$(document).ready(function () {
  const acc = new Account(0,"Terry",10000);
  const accViewModel = new AccountViewModel(acc);
  
  const form = new Form ();
  const formViewModel = new FormViewModel(form);


  ko.applyBindings(accViewModel,$("#app")[0]);
  ko.applyBindings(formViewModel,$("#form")[0]);
})
