import React from 'react'

var loop,
	translate;

export default class Institucional extends React.Component{
	render(){

		translate = this.props.translate;

		loop = translate.map((data, key)=>{
			return 	<p key={key}>
						{data}
					</p>
		});

		return 	<section id="institucional">
					<h2>Institucional</h2>
					{loop}
				</section>
	}
}