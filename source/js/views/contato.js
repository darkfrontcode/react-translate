import React from 'react'

var loop,
	translate;

export default class Contato extends React.Component{
	render(){

		translate = this.props.translate;

		loop = translate.map((data, key)=>{
			return 	<p key={key}>
						{data}
					</p>
		});

		return 	<section id="contato">
					<h2>Contato</h2>
					{loop}
				</section>
	}
}