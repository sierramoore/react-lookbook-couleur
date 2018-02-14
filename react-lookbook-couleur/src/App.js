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
            palette_id: '',
            show_reg: false,
            show_login: false,
            show_profile: false,
            session_message: ''
        }
    }

    goHome = () => {
        this.setState({
            show_reg: false,
            show_login: false
        })
    }

    showRegister = () => {
        this.setState({ 
            show_reg: true,
            show_login: false })
    }

    createUser = (formData) => {
        // console.log(formData);
        request
            .post("http://localhost:9292/users/newuser")
            .type('form')
            .send(formData)
            .set('accept', 'json')
            .end((err, createdUser) =>{
                if(err) console.log(err);
                const parsedUser = JSON.parse(createdUser.text)
                console.log(parsedUser);
                this.setState({
                    palette_id: parsedUser.palette_id,
                    show_reg: false,
                })

            })
    }

    loginUser = (foundUser) => {
        request
            .post("http://localhost:9292/users/login")
            .send(foundUser)
            .end((err, res) => {
                if (err) console.log(err)
                const parsedResponse = JSON.parse(res.text)
                console.log(parsedResponse)
                if (parsedResponse.palette_id) {
                    this.setState({
                        palette_id: parsedResponse.palette_id,
                        show_login: false,
                        show_profile:true 
                    })
                    console.log(this.state)
                }   else {
                    // console.log(parsedResponse)
                    this.setState({
                        session_message: parsedResponse.confirmation
                    })
                    console.log(this.state)
                }

                
            })
    }

    showLogin = () => {
        this.setState({
            show_reg: false, 
            show_login: true })
    }

    
    render() {
        return (
            <div>
                <header>    
                    <link href="https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Shadow|Londrina+Solid|Marcellus|Londrina+Sketch" rel="stylesheet"/>
                    <nav>
                        <a onClick={this.goHome}><h1 id="logo">L👀kBook <span id="logo-color">Couleur</span></h1></a>

                        <a onClick={this.showRegister}>Register</a>
                        <a onClick={this.showLogin}>Login</a>
                    </nav>
                </header>
                <main>
                { this.state.show_reg || this.state.show_login || this.state.show_profile === true ? null : <div>
                    <h4>WELCOME</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>}
                { this.state.show_reg === false ? null : <Register createUser={this.createUser} />}
                { this.state.show_login === false ? null : <Login sessionMessage={this.state.session_message} loginUser={this.loginUser} showRegister={this.showRegister}/>}
                { this.state.show_profile === false ? null : <Profile paletteId={this.state.palette_id}/>}
                </main>
                
            </div>
        );
    }
}

export default App;
