import React, { Component } from 'react';
import './LoginRegister.css'


class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // alert("username is: " + this.state.username + "password is: " + this.state.password);
        // if(this.state.username === '' || this.state.password === ""){
        //     alert("username or password is empty")
        // }
        // this.props.getUsername(this.state.username);
        // this.props.getPassword(this.state.password);
    };
    handleUsernameChange = (e) =>{
        console.log(e.currentTarget.value);
        this.setState({username: e.currentTarget.value})
    };
    handlePasswordChange = (e) =>{
        console.log(e.currentTarget.value);
        this.setState({password: e.currentTarget.value})
    };


    render() {
        return (
            <div>
                <h1>~ Register ~</h1>
                <form>
                    <input name="username" value={this.state.username} placeholder="username" onChange={this.handleUsernameChange}/><br/>
                    <input name="password" value={this.state.password} placeholder="password" onChange={this.handlePasswordChange}/><br/>
                    <button onClick={this.handleSubmit}>Register</button>
                </form>
            </div>
        );
    }
}

export default Register;