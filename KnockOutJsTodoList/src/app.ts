import $ from "jquery";
import ko from "knockout";
import {Todos} from "./components/Todo";
$(document).ready(function(){
   const {TodoComponent} = Todos(); 
   ko.applyBindings(TodoComponent,$("#app")[0]);
})