import React from 'react'

var loop,
	translate;

export default class Onde_comprar extends React.Component{
	render(){

		translate = this.props.translate;

		loop = translate.map((data, key)=>{
			return 	<p key={key}>
						{data}
					</p>
		});

		return 	<section id="onde_comprar">
					<h2>Onde Comprar</h2>
					{loop}
				</section>
	}
}