import * as ko from "knockout";
import $ from "jquery";

export const MyComponents1 = () => {
    const components1 = function () {
        ko.components.register(
            `MessageAndList1`, {
            viewModel: function (params: string) {
                var self = this;
                self.Account = ko.observable(params !== undefined ? params : "tom");
                self.MessageText = ko.observable("");
                self.MessageList = ko.observableArray([]);
                self.Send = function () {
                    self.MessageList.push({
                        message: self.MessageText(),
                        account: self.Account(),
                    })
                    self.MessageText("")
                }
                self.Name1=ko.observable("");
                $("#double_binding").on("input", function(){
                    self.Name1($(this).val());
                })
            },
            template: `
                    <input type="text" data-bind="value:MessageText" /><button data-bind="click:Send">send</button>
                    <ul data-bind="foreach:MessageList">
                        <li>
                            <p data-bind="html:message"></p>
                            <b data-bind="html:account"></b>
                        </li>
                    </ul>
                    <div>
                        <input type="text" id="double_binding"/>
                        <span data-bind="text:Name1"></span>
                    </div>
                `
            }
        )
    }
    return {
        components1
    }
}



