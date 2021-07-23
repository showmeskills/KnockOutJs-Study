import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import AccountViewModel from "./ViewModel/AccountViewModel";
import Account from "./model/Account";
import {DemoViewModel} from "./ViewModel/DemoViewModel";

import Department from "./model/Department";
import {DepartmentViewModel} from "./ViewModel/DepartmentViewModel";


$(document).ready(function () {
  const account = new Account();
  const accountViewModel = new AccountViewModel(account);
  const demoViewModel = new DemoViewModel();
  const department = new Department();
  const departmentViewModel = new DepartmentViewModel(department);

  //need to document binding click function when using unobstrusive
  $(document).on("click", ".btn-delete-account",function(){
    const account = ko.dataFor(this);
    const context = ko.contextFor(this);
    alert(`Before:${context.$parent.Accounts().length}`)
    accountViewModel.Accounts.remove(account);
    alert(`After:${context.$parent.Accounts().length}`)
  })

  
  $(document).on("click", "#btn-show",function(){
    alert(demoViewModel.Arr().join(" "));
  })
  
  ko.applyBindings(accountViewModel,$("#app")[0]);
  ko.applyBindings(demoViewModel,$("#app1")[0]);
  ko.applyBindings(departmentViewModel,$("#department")[0]);
})
