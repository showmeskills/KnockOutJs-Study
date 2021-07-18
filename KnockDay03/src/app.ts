import $ from "jquery";
import ko from "knockout";
import {MyComponents} from "./ViewModel/MessageAndList";
import {MyComponents1} from "./ViewModel/MessageAndList1";


$(document).ready(function() {
   const {components} = MyComponents();
   const {components1} = MyComponents1();
   ko.applyBindings(components,$('#app')[0])
   ko.applyBindings(components1,$("#app1")[0]);
})
