import ko from "knockout";
import $ from "jquery";
import ViewModel from "./ViewModel";
$(document).ready(function () {
    const currentViewModel = new ViewModel(0,0,0,"firstName","lastName",0,"black","block");
    ko.applyBindings(currentViewModel);
})