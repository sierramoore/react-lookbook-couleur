import React, { Component } from 'react';

class NewLook extends Component {
	render() {
		return (
			<div>
				<form>
					<h3>Add a look from a website:</h3>
					Copy and paste link here:
					<br/>
					<input type="url" placeholder="https://..."/>
					<br/>
					<button>Save Link and Find Images</button>
				</form>
			</div>
			)
	}
}

export default NewLook;