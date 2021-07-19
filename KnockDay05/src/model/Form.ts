import $ from "jquery";
import {Observable} from "knockout";
interface CityList {
    Name: string;
    Code: number;
}
interface AreaList {
    Name: string;
    Code: number;
    CityCode: number;
}
interface Hobits{
    [index: number]: string;
}
class Form {
    Name: string;
    Email: string;
    City: string;
    Area: string;
    CityList: CityList[]
    AreaList: AreaList[];
    Hobits:Hobits[]
    MyHobits:string;
    constructor() {
        this.Name = "";
        this.Email = "";
        this.City = "";
        this.Area = "";
        this.CityList = [
            {
                Name: "上海市", Code: 1001
            },
            {
                Name: "北京市", Code: 1002
            }
        ]
        this.AreaList = [
            {
                Name: "静安区", Code: 1001001, CityCode: 1001
            },
            {
                Name: "徐汇区", Code: 1001002, CityCode: 1001
            },
            {
                Name: "浦东区", Code: 1001003, CityCode: 1001
            },
            {
                Name: "朝阳区", Code: 1002001, CityCode: 1002
            },
            {
                Name: "宣武区", Code: 1002002, CityCode: 1002
            },
            {
                Name: "海定区", Code: 1002003, CityCode: 1002
            },
            {
                Name: "通州区", Code: 1002004, CityCode: 1002
            }
        ]
        this.Hobits=[
            "swimming",
            "basketball",
            "listening music",
            "watching movies"
        ]
        this.MyHobits="";
    }

    SubmitForm(e:any,Name:Observable,Email:Observable,City:Observable,Area:Observable){
        e = e || window
        e.preventDefault();
        



        return true;
    }
}

export default Form;