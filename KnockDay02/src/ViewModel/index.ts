import * as ko from 'knockout';
import {
    Observable, Computed, PureComputed
} from 'knockout';

class ViewModel {
    year: Observable;
    month: Observable;
    day: Observable;
    date: Computed;
    Date: PureComputed;
    firstName: Observable;
    lastName: Observable;
    fullName: PureComputed;
    fullName1: Computed;
    count: Observable;
    indexColor:Observable;
    isShow:Observable;
    constructor(year?: number, month?: number, day?: number, firstName?: string, lastName?: string, count?: number,indexColor?:string,isShow?:string) {
        this.year = ko.observable(year);
        this.month = ko.observable(month);
        this.day = ko.observable(day);
        this.date = ko.computed(() => {
            return `${this.year()}年${this.month()}月${this.day()}日`
        }, this)
        this.Date = ko.pureComputed({
            write: (value) => {
                const indexOfYear = value.indexOf("年");
                const indexOfMonth = value.indexOf("月");
                const indexOfDay = value.indexOf("日");
                const year = value.substring(0, indexOfYear);
                if (!/^\d{4}$/.test(year)) {
                    alert("please enter 4 numbers for year");
                    return false;
                } else {
                    this.year(year);
                }

                const month = value.substring(indexOfYear + 1, indexOfMonth)
                if (!/^[0-9][0-2]$/.test(month)) {
                    alert("please enter 2 numbers for month");
                    return false;
                } else {
                    this.month(month);
                }
                const day = value.substring(indexOfMonth + 1, indexOfDay);
                if (!/^[0-3][0-9]$/.test(day)) {
                    alert("please enter 2 numbers for day");
                    return false;
                } else {
                    this.day(day);
                }
            },
            read: () => {
                return `${this.year()}年${this.month()}月${this.day()}日`
            },
            owner: this,
        })


        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.fullName1 = ko.computed(() => {
            return `${this.firstName()}-${this.lastName()}`
        })
        this.fullName = ko.pureComputed({
            write: (value) => {
                const indexOfFirstName = value.indexOf("-");
                this.firstName(value.substring(0, indexOfFirstName))
                this.lastName(value.substring(indexOfFirstName + 1))
            },
            read: () => {
                return `${this.firstName()}-${this.lastName()}`
            },
            owner: this,
        })

        this.count = ko.observable(count);

        this.indexColor = ko.observable(indexColor);

        this.isShow = ko.observable(isShow);
    }
    increment() {
       let currentCount = this.count();
       let isShow = this.isShow();
        currentCount++;
        if(currentCount > 20){
            currentCount="you click too much";
        }
        this.count(currentCount);
        this.isShow(isShow);
    }
    decrement(){
        let currentCount = this.count();
        let isShow = this.isShow();
        currentCount--;
        if(currentCount < 20){
            isShow = "block";
        }
        this.count(currentCount);
        this.isShow(isShow);
    }
    onMouseEnter(){
       this.indexColor("red");
    }
    onMouseLeave(){
        this.indexColor("black");
    }
}

export default ViewModel;