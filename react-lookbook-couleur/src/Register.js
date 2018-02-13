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



    render() {

        return (
            <div>
                <h4>WELCOME</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                <h1>~ Register ~</h1>

                <form>
                    <input name="name" value={this.state.name} placeholder="first and last name" onChange={this.handleInput}/><br/>
                    <input name="username" value={this.state.username} placeholder="username" onChange={this.handleInput}/><br/>
                    <input name="password" value={this.state.password} placeholder="password" onChange={this.handleInput}/><br/>
                    <input name="email" value={this.state.email} placeholder="abc@mail.com" onChange={this.handleInput}/><br/>
                    <button onClick={this.handleSubmit}>Register</button>

                <h2>Color Palette: </h2>
                <h3>Spring: Light</h3>
                <div className="colors">
                    <span style={{background: '#5DADEC'}}>.  .  .</span>
                    <span style={{background: '#A8E4A0'}}>.  .  .</span>
                    <span style={{background: '#F78FA7'}}>.  .  .</span>
                    <span style={{background: '#D3D3D3'}}>.  .  .</span>
                    <span style={{background: '#E58E73'}}>.  .  .</span>
                    <span style={{background: '#40E0D0', marginBottom: 50}}>.  .  .</span>
                </div>


                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Spring: Soft</h3>
                    <span style={{background: '#1B03A3'}}>.  .  .</span>
                    <span style={{background: '#FFDF00'}}>.  .  .</span>
                    <span style={{background: '#808080'}}>.  .  .</span>
                    <span style={{background: '#D7837F'}}>.  .  .</span>
                    <span style={{background: '#4CBB17'}}>.  .  .</span>
                    <span style={{background: '#FF404C', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Spring: Warm</h3>
                    <span style={{background: '#CA7E65'}}>.  .  .</span>
                    <span style={{background: '#CA5B53'}}>.  .  .</span>
                    <span style={{background: '#6E8444'}}>.  .  .</span>
                    <span style={{background: '#31868B'}}>.  .  .</span>
                    <span style={{background: '#5A3927'}}>.  .  .</span>
                    <span style={{background: '#CB9343', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Summer: Light</h3>
                    <span style={{background: '#A1E9F2'}}>.  .  .</span>
                    <span style={{background: '#8170D0'}}>.  .  .</span>
                    <span style={{background: '#4FBB88'}}>.  .  .</span>
                    <span style={{background: '#6078C7'}}>.  .  .</span>
                    <span style={{background: '#A994DC'}}>.  .  .</span>
                    <span style={{background: '#B6C5CD', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Summer: Soft</h3>
                    <span style={{background: '#704E8B'}}>.  .  .</span>
                    <span style={{background: '#3F7B54'}}>.  .  .</span>
                    <span style={{background: '#8B636A'}}>.  .  .</span>
                    <span style={{background: '#689494'}}>.  .  .</span>
                    <span style={{background: '#F4E794'}}>.  .  .</span>
                    <span style={{background: '#b96693', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Summer: Cool</h3>
                    <span style={{background: '#5A3D6D'}}>.  .  .</span>
                    <span style={{background: '#65C4BB'}}>.  .  .</span>
                    <span style={{background: '#672940'}}>.  .  .</span>
                    <span style={{background: '#282B57'}}>.  .  .</span>
                    <span style={{background: '#3F8469'}}>.  .  .</span>
                    <span style={{background: '#929293', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Autumn: Deep</h3>
                    <span style={{background: '#DB943F'}}>.  .  .</span>
                    <span style={{background: '#933F3B'}}>.  .  .</span>
                    <span style={{background: '#2B3863'}}>.  .  .</span>
                    <span style={{background: '#320B3E'}}>.  .  .</span>
                    <span style={{background: '#043311'}}>.  .  .</span>
                    <span style={{background: '#56614A', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Autumn: Soft</h3>
                    <span style={{background: '#76607F'}}>.  .  .</span>
                    <span style={{background: '#B07870'}}>.  .  .</span>
                    <span style={{background: '#6CA5A7'}}>.  .  .</span>
                    <span style={{background: '#30597D'}}>.  .  .</span>
                    <span style={{background: '#2D492D'}}>.  .  .</span>
                    <span style={{background: '#C9AC99', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Autumn: Warm</h3>
                    <span style={{background: '#913221'}}>.  .  .</span>
                    <span style={{background: '#405925'}}>.  .  .</span>
                    <span style={{background: '#A28263'}}>.  .  .</span>
                    <span style={{background: '#A66753'}}>.  .  .</span>
                    <span style={{background: '#BE9A73'}}>.  .  .</span>
                    <span style={{background: '#603311', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Winter: Deep</h3>
                    <span style={{background: '#452E5F'}}>.  .  .</span>
                    <span style={{background: '#9B427E'}}>.  .  .</span>
                    <span style={{background: '#043734'}}>.  .  .</span>
                    <span style={{background: '#6E3343'}}>.  .  .</span>
                    <span style={{background: '#28344E'}}>.  .  .</span>
                    <span style={{background: '#454D4E', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Winter: Soft</h3>
                    <span style={{background: '#D7D3F2'}}>.  .  .</span>
                    <span style={{background: '#3071A4'}}>.  .  .</span>
                    <span style={{background: '#3B935D'}}>.  .  .</span>
                    <span style={{background: '#000963'}}>.  .  .</span>
                    <span style={{background: '#D84A83'}}>.  .  .</span>
                    <span style={{background: '#002908', marginBottom: 50}}>.  .  .</span>
                </div>

                <div className="colors">
                    <h3 style={{marginRight: '70%'}}>Winter: Cool</h3>
                    <span style={{background: '#22488F'}}>.  .  .</span>
                    <span style={{background: '#417EA3'}}>.  .  .</span>
                    <span style={{background: '#9082A0'}}>.  .  .</span>
                    <span style={{background: '#11493F'}}>.  .  .</span>
                    <span style={{background: '#5E3247'}}>.  .  .</span>
                    <span style={{background: '#F2DAE3', marginBottom: 50}}>.  .  .</span>
                </div>

                </form>

            </div>
        );
    }
}

export default Register;