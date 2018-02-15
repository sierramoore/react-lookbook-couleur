import React, { Component } from 'react';
import cheerio from 'cheerio';
import request from 'request';
const req = require('./scraper')

class NewLook extends Component {
	scrapeImages = (e) => {
		e.preventDefault()
		const link = e.currentTarget.previousSibling.value

		console.log(link, typeof link, "----------------------------")

		// Make a post route to the express app with the link

		// then the express will scrape the data, and clean it
		// then responsed with the array of images

	}
	render() {
		return (
			<div>
				<form>
					<h3>Add a look from a website:</h3>
					Copy and paste link here:
					<br/>
					<input type="url" placeholder="https://..."/>
					<button onClick={this.scrapeImages}>Save Link and Find Images</button>
				</form>
			</div>
			)
	}
}

export default NewLook;