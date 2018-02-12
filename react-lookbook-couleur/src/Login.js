import React, { Component } from 'react';
import './LoginRegister.css'


class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsernameChange = (e) =>{
        console.log(e.currentTarget.value);
        this.setState({username: e.currentTarget.value})
    };
    handlePasswordChange = (e) =>{
        console.log(e.currentTarget.value);
        this.setState({password: e.currentTarget.value})
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        // this.props.getUsername(this.state.username);
        // this.props.getPassword(this.state.password);
    };


    render() {
        return (
            <div>
                <h1>~ Log In ~</h1>

                <form>
                    <input placeholder="username" value={this.state.username} onChange={this.handleUsernameChange}/><br/>
                    <input placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
                <a href="./Register.js">Don't have an account? Sign Up</a>
            </div>
        );
    }
}

export default Login;