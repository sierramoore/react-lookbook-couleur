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
			color_id: '',
			tags: []
		}
	}

	scrapeImages = (e) => {
		e.preventDefault()
		const linkObj = {link: e.currentTarget.previousSibling.value}
		const link = e.currentTarget.previousSibling.value

		// console.log(link, typeof link, "----------------------------")

		// Make a post route to the express app with the link
		// then the express will scrape the data, and clean it
		// then responsed with the array of images
		request
			.post("http://localhost:9000/")
			.send(linkObj)
			.end((err, res) => {
				if (err) console.log(err)
					// this should be the array of images
					console.log(res.text)
					const parsedLinks = JSON.parse(res.text)

					this.setState({
						link: link,
						array_of_links: parsedLinks
					})
			})
	}

	getImageLink = (e) => {
		console.log(typeof e.currentTarget.src)
		const imgLink = e.currentTarget.src
		console.log(imgLink)
		this.setState({
			image_link: imgLink
		})
	}

	handleInput = (e) => {
		// console.log(e.currentTarget.name)
		console.log(e.currentTarget.value)
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
		console.log(this.state)
	}

	handleSubmit = (e) => {
		e.preventDefault();
    // console.log(this.state)

    const colorId = parseInt(this.state.color_id, 10)
    // console.log(this.state.color_id)
    // console.log(colorId)
    const objToSend = {
			link: this.state.link,
			image_link: this.state.image_link,
			color_id: colorId,
			tags: this.state.tags
    }
    console.log(objToSend)
    this.props.createLook(objToSend)
	}
 
	render() {
		
		const imageOptions = this.state.array_of_links.map((imgLink, i) => {
			// console.log(imgLink)
			return <img key={i} name="image_link" src={imgLink} onClick={this.getImageLink}/>})
		
		const colorOptions = this.state.user_colors.map((color, i) => {
			return <option key={i} value={color.id}>{color.color_name}</option>
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
						<select name="color_id" onChange={this.handleInput}>
							{colorOptions}
						</select>
					<br/>	
					Add tags (please separate by commas):
						<input type="text" name="tags" placeholder="ex. littleblackdress" onChange={this.handleInput}/>
					<br/>	
					Pick image:
						<div className="container">
						{imageOptions}
						</div>
					<button onClick={this.handleSubmit}>Create Look</button>	
				</form>}
			</div>
			)
	}
}

export default NewLook;