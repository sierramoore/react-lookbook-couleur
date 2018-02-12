import React, { Component } from 'react';
import './App.css';
import './Register';
import './Login';
import './Profile';
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";


class App extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    getUsername = (username) =>{
        console.log(username);
        this.setState({username: username});
    };
    getPassword = (password) =>{
        console.log(password);
        this.setState({password: password});
    };

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Shadow|Londrina+Solid|Marcellus" rel="stylesheet"/>
                <h1 id="logo">L👀kBook <span id="logo-color">Couleur</span></h1><hr/>
                {/*{this.state.username === '' && this.state.password === '' ? <Register getUsername={this.getUsername} getPassword={this.getPassword}/> : <Login/> }*/}
                <Register/>
                <Profile/>
            </div>
        );
    }
}

export default App;
