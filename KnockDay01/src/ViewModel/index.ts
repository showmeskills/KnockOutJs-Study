import * as ko from 'knockout';  
import {
  Observable, ObservableArray, PureComputed
} from 'knockout';  

interface List{
    id:number,
    englishName:string,
    chineseName:string,
    description:string,
    status:boolean,
}

class ViewModel{
    inputValue:Observable<String>;
    list:ObservableArray<List>;
    constructor(inputValue:string,list:List[]){
        this.inputValue = ko.observable(inputValue);
        this.list = ko.observableArray(list);
    }
    addPlanet(){
        const newPlanet = {
            id: 10,
            englishName: "Unknown",
            chineseName: "未知",
            description: "10",
            status:false,
        }
        this.list.push(newPlanet);
    }
}

export default ViewModel;