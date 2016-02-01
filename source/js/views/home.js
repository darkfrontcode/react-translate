import React from 'react'

var loop,
	translate;

export default class Home extends React.Component{
	render(){
		translate = this.props.translate;
		
		loop = translate.map((data, key)=>{
			return 	<p key={key}>
						{data}
					</p>
		});

		return 	<section id="home">
					<h2>Home</h2>
					{loop}
				</section>
	}
}