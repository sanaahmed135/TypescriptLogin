import * as React from "react";

export default class Login extends React.Component<any, any>{
    constructor(props: any, context: ILogin) {
        super(props);
        this.state = {
            username: "sana"

        }
    }
    handleClick(e: any) {
        this.setState({ username: this.state.username + this.state.output})
    }
 
    render() {
        return (
            <div>
                <b>Enter Name: </b><br />
                <input type="text" id="name" value={this.state.username} /><br />
                <input type="text" id="output" /><br />
                <input
                    type="button"
                    value="Login"
                    onClick={this.handleClick.bind(this)}
                />

            </div>
        );
    }

}

interface ILogin {
    username: string;

}
