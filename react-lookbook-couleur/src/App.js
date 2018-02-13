import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import './Register';
import './Login';
import './Profile';
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import request from 'superagent';


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
        request
            .post("http://localhost:9292/users/newuser")
            .send(formData)
            .set('accept', 'json')
            .end((err, createdUser) =>{
                if(err) console.log(err);
                console.log(createdUser);
            })

    };


    // <h4>WELCOME</h4>
    //             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
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
