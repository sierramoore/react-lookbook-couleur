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
        const message = <p style={{padding: '0'}}>{this.props.sessionMessage}</p>
        // console.log(this.props.sessionMessage)
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>~ Log In ~</h1>
                <span style={{color: 'red', margin: '0 auto'}}>{message}</span>
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