import React from 'react'

var loop,
	translate;

export default class Tecnologia extends React.Component{
	render(){

		translate = this.props.translate;

		loop = translate.map((data, key)=>{
			return 	<p key={key}>
						{data}
					</p>
		});

		return 	<section id="Tecnologia">
					<h2>Tecnologia</h2>
					{loop}
				</section>
	}
}