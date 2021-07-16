import $ from "jquery";
import ko from "knockout";
import ViewModel from "./ViewModel"

const planets = [
    {
        id: 1,
        englishName: "Mercury",
        chineseName: "水星",
        description: "1",
        status:true,
    },
    {
        id: 2,
        englishName: "Venus",
        chineseName: "金星",
        description: "2",
        status:true,
    },
    {
        id: 3,
        englishName: "Earth",
        chineseName: "地球",
        description: "3",
        status:true,
    },
    {
        id: 4,
        englishName: "Mars",
        chineseName: "火星",
        description: "4",
        status:true,
    },
    {
        id: 5,
        englishName: "Jupiter",
        chineseName: "木星",
        description: "5",
        status:true,
    },
    {
        id: 6,
        englishName: "Saturn",
        chineseName: "土星",
        description: "6",
        status:true,
    },
    {
        id: 7,
        englishName: "Uranus",
        chineseName: "天王星",
        description: "7",
        status:true,
    },
    {
        id: 8,
        englishName: "Neptune",
        chineseName: "海王星",
        description: "8",
        status:true,
    },
    {
        id: 9,
        englishName: "Pluto",
        chineseName: "冥王星",
        description: "9",
        status:true,
    }]

$(document).ready(function(){
    const currentViewModel = new ViewModel("InputValue",planets);
    ko.applyBindings(currentViewModel);
})


