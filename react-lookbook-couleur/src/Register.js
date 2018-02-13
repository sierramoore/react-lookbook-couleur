import React, { Component } from 'react';
import './LoginRegister.css'
import request from 'superagent';


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            username: this.props.username,
            password: this.props.password,
            email: this.props.email,
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
        // const paletteList = this.state.palettes.map((palette, i) => {

        //     for(let i = 0; i < this.state.palettes.length; i++){
        //             for(let j = 0; j < this.state.palettes.color.length; i++){
        //                 const colorName = this.state.palettes.color[j].name
        //                 const colorId = this.state.palettes.color[j].id
        //             }


        //     }
        //     return <div key={i}>
        //         <h3>{palette.name}</h3>

        //     </div>
        // })


        return (
            <div>
                <h1>~ Register ~</h1>

                <form>
                    <input name="name" value={this.state.name} placeholder="first and last name" onChange={this.handleInput}/><br/>
                    <input name="username" value={this.state.username} placeholder="username" onChange={this.handleInput}/><br/>
                    <input name="password" value={this.state.password} placeholder="password" onChange={this.handleInput}/><br/>
                    <input name="email" value={this.state.email} placeholder="abc@mail.com" onChange={this.handleInput}/><br/>
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