import React, { Component } from 'react';
import './LoginRegister.css'
import request from 'superagent';


class Register extends Component {
    constructor(){
        super();

        this.state = {
            id: '',
            name: '',
            username: '',
            password: '',
            email: '',
            colors: []
        }
    }

    componentDidMount(){
        request 
            .get('http://localhost:9292/users/register')
            .end((err, res) => {
                if (err) console.log(err)
                const parsedColors = JSON.parse(res.text)

                const state = this.state
                state.colors = parsedColors
                console.log(state.colors)
                this.setState(state)
            })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createUser(this.state);
    };
    handleInput = (e) =>{
        // console.log(e.currentTarget.value);
        this.setState({[e.currentTarget.name]: e.currentTarget.value})

    };



    render() {
        // const colorList = this.state.colors.map((color, i) => {

        //     console.log(color.id)

        //     return <div key={i}>
        //         <h3>{color.name}</h3>

        //     </div>
        // })


        return (
            <div>
                <h1>~ Register ~</h1>

                <form>
                    <input type="text" name="name" placeholder="first and last name" onChange={this.handleInput}/><br/>
                    <input type="text" name="username" placeholder="username" onChange={this.handleInput}/><br/>
                    <input type="password" name="password" placeholder="password" onChange={this.handleInput}/><br/>
                    <input type="text" name="email" placeholder="abc@mail.com" onChange={this.handleInput}/><br/>
                    <button onClick={this.handleSubmit}>Register</button>
                

                <h2>Pick Your Palette: </h2>
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
                </form>

            </div>
        );
    }
}

export default Register;