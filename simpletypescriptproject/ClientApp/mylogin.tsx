import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Login extends React.Component{

    render(){
        return(
            <div>
            <input type="text" id="name"/>
            <input type="text" id="password" />
            <input
              type="button"
              value="Login"
            />
            </div>
        );
    }
        

}