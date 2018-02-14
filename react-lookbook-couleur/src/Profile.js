import React, { Component } from 'react';
import './Profile.css'


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            username: this.props.username,
            colors: this.props.colors
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hi, *{this.state.name} <span style={{background: 'purple', marginRight: 5, padding:2}}>.</span><span style={{background: '#417EA3', marginRight: 5, padding:4}}>.</span><span style={{background: '#3F7B54', marginRight: 5}}>.</span>*{this.state.colors}<span style={{background: '#3F7B54', marginRight: 5}}>.</span><span style={{background: '#417EA3', marginRight: 5, padding:4}}>.</span><span style={{background: 'purple', marginRight: 5, padding:2}}>.</span>
                </h1>

                <div className="container">


                </div>

            </div>
        );
    }
}

export default Profile;