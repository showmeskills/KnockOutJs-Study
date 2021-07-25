import ko from "knockout";

interface ComponentViewModel {
    UserName: string;
    Password: string;
}

interface Params {
    UserName: string;
    Password: string;
}

export const ComponentViewModel = function (this: ComponentViewModel, params: Params) {
    const {UserName, Password} = params
    this.UserName = UserName;
    this.Password = Password;

} as any as ({ new(): ComponentViewModel })

const template = `
    UserName:<input type="text" name="txtUserName" data-bind="value:UserName"/>
    <br/>
    Password:<input type="password" name="txtPassword" data-bind="value:Password"/>
`

export const LoginComponent = () => ko.components.register(
    'login-component', {
        viewModel: ComponentViewModel,
        template
    }
)