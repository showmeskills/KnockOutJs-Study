import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import {LoginComponent} from "./ViewModel/ComponentViewModel";
import {AccountComponent} from "./ViewModel/AccountComponentViewModel";

$(document).ready(function () {
  ko.applyBindings(LoginComponent,$("#app")[0])
  ko.applyBindings(AccountComponent,$("#account")[0])
})
