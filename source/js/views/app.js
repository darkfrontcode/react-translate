import React from 'react'
import Template from '../views/template'

export default class App extends React.Component{
	render(){
		return 	<Template>
					{this.props.children}
				</Template>
	}
}