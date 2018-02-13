import React, { Component } from 'react';
import request from 'superagent';
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
            name: '',
            username: '',
            password: '',
            email: '',
            colors: []
        }
    }
    createUser = (formData) =>{
        console.log(formData);
        // request
        //     .post("http://localhost:3000/")
        //     .send(formData)
        //     .set('accept', 'json')
        //     .end((err, createdUser) =>{
        //         if(err) console.log(err);
        //         console.log(createdUser);
        //     })

    };

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Shadow|Londrina+Solid|Marcellus|Londrina+Sketch" rel="stylesheet"/>

                <h1 id="logo">L👀kBook <span id="logo-color">Couleur</span><a>Register</a><a>Login</a></h1><hr/>
                {/*{this.state.username === '' && this.state.password === '' ? <Register getUsername={this.getUsername} getPassword={this.getPassword}/> : <Profile/> }*/}
                <Register createUser={this.createUser}/>

            </div>
        );
    }
}

export default App;
