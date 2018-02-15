import React, { Component } from 'react';
import request from 'superagent';

class NewLook extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user_colors: this.props.userColors,
			array_of_links: [],
			link: '',
			image_link: '',
			color: '',
			tags: []
		}
	}

	scrapeImages = (e) => {
		e.preventDefault()
		const link = {link: e.currentTarget.previousSibling.value}

		// console.log(link, typeof link, "----------------------------")

		// Make a post route to the express app with the link
		// then the express will scrape the data, and clean it
		// then responsed with the array of images
		request
			.post("http://localhost:9000/")
			.send(link)
			.end((err, res) => {
				if (err) console.log(err)
					// this should be the array of images
					console.log(res.text)
					const parsedLinks = JSON.parse(res.text)

					this.setState({
						link: e.currentTarget.previousSibling.value,
						array_of_links: parsedLinks
					})
			})
	}

	handleInput = (e) => {
		// console.log(e.currentTarget.name)
		// console.log(e.currentTarget.value)
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
		console.log(this.state)
	}

	handleSubmit = (e) => {
		e.preventDefault();
    // console.log(this.state)
    this.props.createLook(this.state)
	}
 
	render() {
		
		const imageOptions = this.state.array_of_links.map((imgLink, i) => {
			console.log(imgLink)
			return <img key={i} name="image_link" src="imgLink" onClick={this.handleInput}/>})
		
		const colorOptions = this.state.user_colors.map((color, i) => {
			return <option key={i}>{color.color_name}</option>
		})
			

		return (
			<div>
				<form>
					<h3>Add a look from a website:</h3>
					Copy and paste link here:
					<br/>
					<input type="url" placeholder="https://..."/>
					<button onClick={this.scrapeImages}>Save Link</button>
				</form>

				{ this.state.link === '' ? null : 
				<form>
					Choose color:
						<select name="color" onChange={this.handleInput}>
							{colorOptions}
						</select>
					Add tags (please separate by commas):
						<input type="text" name="tags" placeholder="ex. #littleblackdress" onChange={this.handleInput}/>
					Pick image:
						<div>
						{imageOptions}
						</div>
					<button onClick={this.handleSubmit}>Create Look</button>	
				</form>}
			</div>
			)
	}
}

export default NewLook;