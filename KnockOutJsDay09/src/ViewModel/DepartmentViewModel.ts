import ko from "knockout";
import Department from "../model/Department";
interface DepartmentViewModel{
    Departments:ko.ObservableArray<Department>
    SelectedValue:ko.Observable;
}

export const DepartmentViewModel = function(this:DepartmentViewModel,department:Department){
    this.Departments = ko.observableArray([
        new Department(1,"D1"),
        new Department(2,"D2"),
    ])
    this.SelectedValue = ko.observable();

}as any as({new (department:Department):DepartmentViewModel})