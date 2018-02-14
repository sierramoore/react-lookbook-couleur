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

    handleInput = (e) =>{
        // console.log(e.currentTarget.value);
        // console.log(e.currentTarget.name);
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state)
        this.props.loginUser(this.state)
    }


    render() {
        return (
            <div>
                <h1>~ Log In ~</h1>

                <form>
                    <input type="text" placeholder="username" name="username" onChange={this.handleInput}/><br/>
                    <input type="password" placeholder="password" name="password" onChange={this.handleInput}/><br/>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
                <a onClick={this.props.showRegister}>Don't have an account? Sign Up</a>
            </div>
        );
    }
}

export default Login;