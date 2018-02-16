import React, { Component } from 'react';



class Looks extends Component {
	constructor(props) {
		super(props)

		this.state = {
			color_name: this.props.colorName,
			looks: this.props.lookList
		}
	}

	render(){

		const lookList = this.state.looks.map((look, i) => {
    		console.log(look)
    		return <a href={look.link} target="_blank"><img key={look.id} src={look.image} id={look.id} className="look-view-img"/></a>
    		
   })

		return (
			<div>
				{lookList}
			</div>
		)
	}
}







export default Looks;