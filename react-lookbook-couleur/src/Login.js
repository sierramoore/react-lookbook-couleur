import React, { Component } from 'react';
import './LoginRegister.css'


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: this.props.username,
            password: this.props.password
        }
    }
    handleInputChange = (e) =>{
        // console.log(e.currentTarget.value);
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    };
    handleSubmit = (e) =>{
        e.preventDefault();

    };


    render() {
        return (
            <div>
                <h1>~ Log In ~</h1>

                <form>
                    <input placeholder="username" value={this.state.username} onChange={this.handleInputChange}/><br/>
                    <input placeholder="password" value={this.state.password} onChange={this.handleInputChange}/><br/>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
                <a href="./Register.js">Don't have an account? Sign Up</a>
            </div>
        );
    }
}

export default Login;