import React, { Component } from 'react';
import request from 'superagent';
import './LoginRegister.css';
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import Edit from "./EditUser";
import NewLook from "./NewLook";


class App extends Component {
    constructor() {
        super();

        this.state = {
            id: '',
            colors: [],
            palette_id: '',
            show_reg: false,
            show_login: false,
            show_logout: false,
            show_profile: false,
            show_edit: false,
            show_new_look: false,
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
                    show_logout: true,
                    show_profile: true
                })

            })
    }

    showLogin = () => {
        this.setState({
            show_reg: false, 
            show_login: true })
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
                        id: parsedResponse.id,
                        colors: parsedResponse.colors,
                        palette_id: parsedResponse.palette_id,
                        show_login: false,
                        show_logout: true,
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

    logoutUser = () => {
        request
            .get("http://localhost:9292/users/logout")
            .end((err, res) => {
                if (err) console.log(err)
                const parsedResponse = JSON.parse(res.text)
                this.setState({
                    show_reg: false,
                    show_login: false,
                    show_logout: false,
                    show_profile: false,
                    show_edit: false,
                    show_new_look: false,
                    session_message: parsedResponse
                })

                console.log(this.state.session_message)
            })
    }

    backToProfile = () => {
        this.setState({
            show_profile: true,
            show_edit: false,
            show_new_look: false
        })
    }

    showEditor = () => {
      this.setState({
        show_profile: false,
        show_edit: true
      })
    }

    updateUser = (updatedUser) => {
        console.log(updatedUser)
        const id = updatedUser.id
        request
         .put("http://localhost:9292/users/" + id)
         .send(updatedUser)
         .end((err, res) => {
            if (err) console.log(err)
                console.log(res)
            const parsedResponse = JSON.parse(res.text)
               // needs to update editor to be hidden
               this.setState({
                palette_id: parsedResponse.palette_id,
                show_edit: false
               })
         })
    }

   deleteUser = (userId) => {
    console.log(userId)
        request
            .delete("http://localhost:9292/users/" + userId)
            .end((err, res) => {
                if(err) console.log(err)
                    console.log(res)
                this.setState({
                    show_reg: false,
                    show_login: false,
                    show_profile: false,
                    show_edit: false
                })
            })
   }

   showNewLook = () => {
    this.setState({
        show_new_look: true,
        show_profile: false, 
        show_edit: false
    })
   }

   createLook = (newLook) => {
    request
        .post("http://localhost:9292/looks/newlook")
        .send(newLook)
        .end((err, res) => {
            if (err) console.log(err)
                console.log(res)
            this.setState({
                show_new_look: false,
                show_profile: true
            })
        })
   }
    
    render() {
        return (
            <div>
                <header id="heading">
                    <link href="https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Shadow|Londrina+Solid|Marcellus|Londrina+Sketch" rel="stylesheet"/>

                        {this.state.show_profile || this.state.show_edit || this.state.show_new_look === true ?  
                            <nav >
                               <h1 onClick={this.goHome} id="logo" style={{width: '35%'}}>L👀kBook <span id="logo-color">Couleur</span></h1>
                                <a>Search</a>
                                <a onClick={this.showNewLook}>Add New Look </a> 
                                {this.state.show_edit || this.state.show_new_look === true ? <a onClick={this.backToProfile}>Back to Profile</a> : <a onClick={this.showEditor}>Edit Profile</a> }
                                { this.state.show_logout === false ? null : <a onClick={this.logoutUser}>Logout</a>}
                                </nav> :
                            <nav>
                                <a onClick={this.goHome}><h1 id="logo" style={{width: '35%'}}>L👀kBook <span id="logo-color">Couleur</span></h1></a>
                                <a onClick={this.showRegister}>Register</a>
                                <a onClick={this.showLogin}>Login</a>

                            </nav>}
                    
                </header>
                <main>
                { this.state.show_reg || this.state.show_login || this.state.show_profile || this.state.show_edit || this.state.show_new_look === true ? null : <div>
                    <h4>WELCOME</h4>
                    <p>This a website where a you are able to create an account and choose a collection of six colors.
                        You can paste url's from other websites into a field and all the images will be extracted form that website and saved into
                        the your profile page. You may also remove, edit, or add images as much as you like!</p>
                </div>}

                { this.state.show_reg === false ? null : <Register createUser={this.createUser} />}
                { this.state.show_login === false ? null : <Login sessionMessage={this.state.session_message} loginUser={this.loginUser} showRegister={this.showRegister}/>}
                { this.state.show_profile === false ? null : <Profile userId={this.state.id} paletteId ={this.state.palette_id}/>}
                { this.state.show_edit === false ? null : <Edit userId={this.state.id} deleteUser={this.deleteUser} updateUser={this.updateUser}/>}

                { this.state.show_new_look === false ? null : <NewLook userColors={this.state.colors} createLook={this.createLook}/>}

                </main>
                
            </div>
        );
    }
}

export default App;