import ko from "knockout";
import validation from "knockout.validation";
import { Observable, ObservableArray, Computed } from "knockout";
import Form from "../model/Form";
interface FormViewModel {
    Name: Observable
    Email: Observable
    City: Observable
    Area: Observable
    CityList: ObservableArray
    AreaList: ObservableArray
    Hobits: ObservableArray
    CurrentAreaList: Computed
    MyHobits: Observable
    SubmitForm(): void;
    NameError:Computed
    EmailError:Computed
}

const FormViewModel = function (this: FormViewModel, form: Form) {
    const _this = this;
    this.Name = ko.observable(form.Name)
    this.Email = ko.observable(form.Email)
    this.City = ko.observable(form.City)
    this.Area = ko.observable(form.Area)
    this.CityList = ko.observableArray(form.CityList);
    this.AreaList = ko.observableArray(form.AreaList);
    this.Hobits = ko.observableArray(form.Hobits);
    this.MyHobits = ko.observable(form.MyHobits);
    this.CurrentAreaList = ko.computed(() => {
        const areas = ko.utils.arrayFilter(this.AreaList(), (area) => {
            return area.CityCode === this.City();
        })
        return areas
    })
    this.NameError = ko.computed(() => {
        if(_this.Name().length < 5 && _this.Name().length > 0){
            return "your name is invalid"
        }
        return ""
    })
    this.EmailError = ko.computed(() => {
        const emailReg = /\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}/
        if(!emailReg.test(_this.Email()) && _this.Email().length>0){
            return "your email addres is invalid"
        }
        return ""
    })

    this.SubmitForm =()=> form.SubmitForm(event,this.Name,this.Email,this.City,this.Area)

} as any as { new(form: Form): FormViewModel }

export default FormViewModel;