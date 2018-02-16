import React, { Component } from 'react';
import './Profile.css';
import Looks from './Looks'
import request from 'superagent';


class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.userId,
      name: '',
      username: '',
      email: '',
      palette_name: '',
      palette_id: this.props.paletteId,
      colors: [],
      color_id: '',
      color_name: '',
      looks: ''
		}
	}
	componentDidMount() {
		const id = this.state.id;
		console.log(id);
		request
			.get("http://localhost:9292/users/" + id)
			.end((err, res) => {
				if (err) console.log(err);
					// console.log(res)
				const parsedResponse = JSON.parse(res.text);
				console.log(parsedResponse)
				this.setState({
					name: parsedResponse.name,
					username: parsedResponse.username,
					email: parsedResponse.email,
					palette_name: parsedResponse.palette_name,
					colors: parsedResponse.colors
				})
			})
	}

	showLook = (e) => {
		// console.log(e.currentTarget)
		// console.log(e.currentTarget.id)
		console.log(typeof this.state.looks)
		const colorId = e.currentTarget.id
		request
      .get("http://localhost:9292/looks/color/" + colorId)
      .end((err, res) => {
        if (err) console.log(err)
          // console.log(res)
        const parsedResponse = JSON.parse(res.text)
        console.log(parsedResponse, '<-------- this paresed response')
        this.setState({
          color_id: parsedResponse.color_id,
          color_name: parsedResponse.color_name,
          looks: parsedResponse.looks
        })
        console.log(this.state.looks)
        console.log(typeof this.state.looks)
      })

	}

	backToPalette = () => {
		this.setState({
			looks: ''
		})
	}

  render() {
  
    	const colorList = this.state.colors.map((color, i) => {
    		return <div key={color.id} id={color.id} onClick={this.showLook}>
    			<h3>{color.color_name}</h3>

    		</div>
    	})

        return (
        	<main>
        	  { this.state.looks === '' ?  
	        	  <div>
	            	<h1 id="greeting">Hi, {this.state.name}</h1>
	            	<h2>Your palette: {this.state.palette_name}</h2>
	            	<div>
	            		{colorList}
	            	</div>
	            </div> :
	            <div>
	            	<h1>{this.state.color_name}</h1>
	            	<a onClick={this.backToPalette}>Back to your palette</a>
            		<Looks colorName={this.state.color_name} lookList={this.state.looks}/>
            	</div>
          	}	
          </main>	
        );
    }
}

export default Profile;