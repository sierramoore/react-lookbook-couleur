import React, { Component } from 'react';
import './LoginRegister.css'


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            username: this.props.username,
            password: this.props.password,
            email: this.props.email,
            colors: this.props.colors
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createUser(this.state);
    };
    handleInput = (e) =>{
        // console.log(e.currentTarget.value);
        this.setState({[e.currentTarget.name]: e.currentTarget.value})

    };

// <h4>WELCOME</h4>
// <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
// <h1>~ Register ~</h1>

    render() {

        return (
            <div>
                <h1>~ Register ~</h1>

                <form>
                    <input name="name" value={this.state.name} placeholder="first and last name" onChange={this.handleInput}/><br/>
                    <input name="username" value={this.state.username} placeholder="username" onChange={this.handleInput}/><br/>
                    <input name="password" value={this.state.password} placeholder="password" onChange={this.handleInput}/><br/>
                    <input name="email" value={this.state.email} placeholder="abc@mail.com" onChange={this.handleInput}/><br/>
                    <button onClick={this.handleSubmit}>Register</button>
                </form>

                <h2>Color Palette: </h2>
                <div id="colors" style={{float: 'left', marginLeft: '6%'}}>
                    <h3>Spring: Light</h3>
                    <span style={{background: '#5DADEC'}}>.  .  .</span>
                    <span style={{background: '#A8E4A0'}}>.  .  .</span>
                    <span style={{background: '#F78FA7'}}>.  .  .</span>
                    <span style={{background: '#D3D3D3'}}>.  .  .</span>
                    <span style={{background: '#E58E73'}}>.  .  .</span>
                    <span style={{background: '#40E0D0'}}>.  .  .</span>
                </div>
                <div id="colors" style={{float: 'right', marginRight: '6%'}}>
                    <h3>Spring: Soft</h3>
                    <span style={{background: '#1B03A3'}}>.  .  .</span>
                    <span style={{background: '#FFDF00'}}>.  .  .</span>
                    <span style={{background: '#808080'}}>.  .  .</span>
                    <span style={{background: '#D7837F'}}>.  .  .</span>
                    <span style={{background: '#4CBB17'}}>.  .  .</span>
                    <span style={{background: '#FF404C'}}>.  .  .</span>
                </div>

            </div>
        );
    }
}

export default Register;