import ko from "knockout";
class Address{
    Street:ko.Observable<string>;
    City:ko.Observable<string>;
    State:ko.Observable<string>;
    constructor(Street:string="",City:string="",State:string=""){
        this.Street = ko.observable(Street);
        this.City = ko.observable(City);
        this.State = ko.observable(State);
    }
}
export default Address;