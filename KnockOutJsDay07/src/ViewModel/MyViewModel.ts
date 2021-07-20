import ko from "knockout";
import { Observable, Computed, ObservableArray } from "knockout";

interface MyViewModel {
    ShowHideSection: Observable
    HandleShow(): void
    City:Observable
    Phone:{
        Home:number,
        Office:number,
    }
    Colors:ObservableArray
}

const MyViewModel = function (this: MyViewModel) {
    this.ShowHideSection = ko.observable(true);
    this.HandleShow = () => {
        this.ShowHideSection(!this.ShowHideSection());
    }
    this.City=ko.observable("Mumbai");
    this.Phone = {
        Home:123456,
        Office:654321
    }
    this.Colors = ko.observableArray(["red","green","blue","orange","pink"])

} as any as { new(): MyViewModel }

export default MyViewModel;