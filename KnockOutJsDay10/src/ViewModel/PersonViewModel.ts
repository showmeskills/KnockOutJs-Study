import ko from "knockout";
import Address from "../model/Address";
interface PersonViewModel{
    Name:ko.Observable<string>;
    ResidenceAddress:ko.Observable<Address>;
    OfficeAddress:ko.Observable<Address | null>;
}

export const PersonViewModel = function(this:PersonViewModel,address:Address){
    this.Name = ko.observable("abc");
    this.ResidenceAddress = ko.observable(new Address("RStreet","RCity","RState"));
    this.OfficeAddress = ko.observable(null)//new Address("OStreet","OCity","OState");


}as any as({new(address:Address):PersonViewModel})