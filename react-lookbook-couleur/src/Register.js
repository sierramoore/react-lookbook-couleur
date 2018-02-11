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
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <input name="username" value="username" />
                    <input name="password" value="password" />
                    <button>Register</button>
                </form>
            </div>
        );
    }
}

export default Register;