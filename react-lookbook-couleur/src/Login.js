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
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.getUsername(this.state.username);
        this.props.getPassword(this.props.password);
    };


    render() {
        return <div>
            <h1>Log In</h1>

            <form>
                <input name="username" defaultValue="username"/><br/>
                <input name="password" defaultValue="password"/><br/>
                <button onClick={this.handleSubmit}>Log In</button>
            </form>
            <a href="./Register.js">Don't have an account? Sign Up</a>
        </div>;
    }
}

export default Login;