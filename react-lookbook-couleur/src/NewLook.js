import React, { Component } from 'react';
import cheerio from 'cheerio';

class NewLook extends Component {
	scrapeImages = (e) => {
		e.preventDefault()
		const link = e.currentTarget.previousSibling.value
		console.log(link, typeof link)

		const $ = cheerio.load(link)
		console.log($)
		console.log('--------------------------------------')
		const arrayOfImg = $('img')
		console.log(arrayOfImg)
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