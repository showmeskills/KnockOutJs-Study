import "./style/index.less";
import $ from "jquery";
import ko from "knockout";
import MyViewModel from "./ViewModel/MyViewModel";
$(document).ready(function () {
  const myViewModel = new MyViewModel();

  ko.applyBindings(myViewModel,$("#app")[0]);
})
