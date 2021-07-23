import ko from "knockout";


interface DemoViewModel{
    Prop1:ko.Observable<string>;
    Prop2:ko.Observable<string>;
    Arr:ko.ObservableArray<string>;
    ArrFiltered:ko.ObservableArray<string>;
    SelectedArr:ko.ObservableArray<string>;
}

export const DemoViewModel = function(this:DemoViewModel){
    this.Prop1 = ko.observable("ABC");
    this.Prop2 = ko.observable("XYZ");
    this.Arr = ko.observableArray(["1","2","3","4","5","6","7","8","9","10"]);
    this.ArrFiltered = ko.observableArray(["1","2","3","4","7"]);
    this.SelectedArr = ko.observableArray(["1","2","3","4"])
}as any as({new ():DemoViewModel})