import React from 'react'

var loop,
	translate;

export default class Duvidas extends React.Component{
	render(){

		translate = this.props.translate;

		loop = translate.map((data, key)=>{
			return 	<p key={key}>
						{data}
					</p>
		});

		return 	<section id="duvidas">
					<h2>Dúvidas</h2>
					{loop}
				</section>
	}
}