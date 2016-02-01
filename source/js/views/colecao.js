import React from 'react'

var loop,
	translate;

export default class colecao extends React.Component{
	render(){

		translate = this.props.translate;

		loop = translate.map((data, key)=>{
			return 	<p key={key}>
						{data}
					</p>
		});

		return 	<section id="colecao">
					<h2>Coleção</h2>
					{loop}
				</section>
	}
}