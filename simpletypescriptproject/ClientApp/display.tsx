import * as React from "react";
import axios from "axios";

export default class Login extends React.Component<any, ILogin>{
    constructor(props: any, context: ILogin) {
        super(props,context);

        this.state = {
            username: "sana",
            output:""
        }

        this.updateInputValue = this.updateInputValue.bind(this);

    }
    handleClick(e: any) {
        //axios.get('http://localhost:62972/api/Utility/GetDisplayContent/' + this.state.username)
        //    .then(response => this.setState({ output: response.data }) )

        var user = { username: "saad", password: "apple123", email: "saad@hotmail.com" };
        var url = "http://localhost:62972/api/account/signin";
        alert("handle click");
        axios.post(url, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        
    }

    componentDidMount() {
        alert("Hello");
        axios.get('http://localhost:62972/api/account/GetDisplayContent/' + this.state.username)
            .then(response => this.setState({ output: response.data }))
    }
    updateInputValue(e: any) {
        this.setState({
            username: e.target.value
        });
    }

    render() {
        return (
            <div>
                Enter Name: <br />
                <div>{this.state.output} </div><br />
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
    output: string;

}
