import React from 'react'
import {Link} from 'react-router'

const Logo = React.createClass({
	render(){
		return 	<h1 className="logo">
					<Link to="home" title="Página Inicial">
						<p>Pegada</p>
					</Link>
				</h1>
	}
})

export default Logo