import * as React from "react";

export default class Login extends React.Component<any,any>{
    constructor(props: any,context :ILogin){
        super(props);
        this.state={
            username:"sana",
            password:"saad"
        }
    }
    handleClick(e: any) {
        alert(this.state.username);
      }
    render(){
        return(
            <div> 
             Hello { this.state.name }!  
            <b>Enter Name: </b><br />     
            <input type="text" id="name" value={this.state.username} /><br />
            <b>Enter Password: </b><br />   
            <input  type="password"  id="password" value={this.state.password} /><br />
            <input
              type="button"
              value="Login"
              onClick = {this.handleClick.bind(this)}
            />
            </div>
        );
    }
       
}

interface ILogin{
    username : string;
    password : string; 
}