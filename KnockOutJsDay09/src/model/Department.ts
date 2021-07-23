import ko from "knockout";
class Departments{
    Id:ko.Observable<number>;
    Name:ko.Observable<string>;
    constructor(Id:number=0, Name:string=""){
        this.Id = ko.observable(Id);
        this.Name = ko.observable(Name);
    }
}

export default Departments;