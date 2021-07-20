import ko from "knockout";
import {Observable,Computed,ObservableArray} from "knockout";

interface MyViewModel{
    MyNumber:Observable
    IsEvenNumber:Computed
    FomattedNumber:Computed
    DisplayColor:Computed
    Urls:ObservableArray
}

const MyViewModel = function (this:MyViewModel){
    this.MyNumber = ko.observable(1);
    this.IsEvenNumber = ko.computed(()=>{
        return this.MyNumber()%2 ===0;
    })
    this.FomattedNumber = ko.computed(()=>{
        return `<b>${this.MyNumber()}</b>`
    })
    this.DisplayColor = ko.computed(()=>{
        if(this.MyNumber() > 50){
            return "red"
        }else{
            return "green"
        }
    })
    this.Urls =ko.observableArray(['http://www.google.com','http://www.baidu.com'])
}as any as{new ():MyViewModel}

export default MyViewModel;