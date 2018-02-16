import React, { Component } from 'react';
import request from 'superagent';

class Edit extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: this.props.userId,
			name: '',
			email: '',
			old_password: '',
			new_password: '',
			confirm_password: '',
			palette_name: '',
			palette_id: '',
			show_pass: false
		}

	}

	componentDidMount() {
		const id = this.state.id
		// console.log(id)
		request
			.get("http://localhost:9292/users/edit/" + id)
			.end((err, res) => {
				if (err) console.log(err)
				const parsedResponse = JSON.parse(res.text)
				// console.log(parsedResponse)
				this.setState({
					name: parsedResponse.name,
					email: parsedResponse.email,
					palette_name: parsedResponse.palette_name,
					palette_id: parsedResponse.palette_id
				})
				console.log(this.state)
			})
	}

	handleInput = (e) => {
		// console.log(e.currentTarget.name)
		// console.log(e.currentTarget.value)
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateUser(this.state)
	}

	showPassChange = () => {
		this.setState({
			show_pass: true
		})
	}

	updatePassword = () => {
		// THIS IS NOT FINISHED YET
		const passwords = {
			new_password: this.state.new_password,
			old_password: this.state.old_password
		}

		if (this.state.new_password === this.state.confirm_password) {
			request
				.post("http://localhost:9292/users/password")
				.send(passwords)
				.end((err, res) => {
					if(err) console.log(err)
						console.log(res)
				})
		}
	}


	verifyDelete = () => {
		// this will check to make sure the user really wants to delete their account - just in case button is accidentally hit
	}

	deleteAccount = () => {
		const id = this.state.id
		console.log(id)
		this.props.deleteUser(id)
	}

	render() {
		return (
			<div>
				<form>
					Name:<input type="text" name="name" placeholder={this.state.name} onChange={this.handleInput}/>
					<br/>
	        Email:<input type="text" name="email" placeholder={this.state.email} onChange={this.handleInput}/>
	        <br/>
	        <br/>
	        { this.state.show_pass === false ? <button onClick={this.showPassChange}>Change Your Password</button> : 
	        	<div>
	        		<input type="password" name="password" placeholder="old password" />
	        		<br/>
	        		<input type="password" name="password" placeholder="new password" onChange={this.handleInput}/> 
	        		<br/>
	        		<input type="password" name="password" placeholder="confirm new password" />
	        		<br/>
	        		<button onClick={this.updatePassword}>Change Password</button> 
	        	</div>}
	        <br/>
	        Your current palette is: {this.state.palette_name}
	        <br/>
	        Change your palette:
	        <select name='palette_id' onChange={this.handleInput}>
						<option value="1">Light Spring</option>
						<option value="2">Clear Spring</option>
					  <option value="3">Warm Spring</option>
					  <option value="4">Light Summer</option>
					  <option value="5">Soft Summer</option>
					  <option value="6">Cool Summer</option>
					  <option value="7">Deep Autumn</option>
					  <option value="8">Soft Autumn</option>
					  <option value="9">Warm Autumn</option>
					  <option value="10">Deep Winter</option>
					  <option value="11">Clear Winter</option>
					  <option value="12">Cool Winter</option>
					</select>
	        <br/>	
	        <br/>	
	        <button onClick={this.handleSubmit}>Save Changes</button>
        </form>

        <button onClick={this.deleteAccount} style={{'backgroundColor': 'red'}}>Delete Account</button>
			</div>
			)
	}
}

export default Edit;
	