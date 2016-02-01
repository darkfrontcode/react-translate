import React from 'react'
import {Link} from 'react-router'

const Menu = React.createClass({
	render(){
		return	<nav className="root">
						<ul className="clearfix">
							<li>
								<Link to="colecao">Coleção</Link>
							</li>
							<li>
								<Link to="tecnologia">Tecnologia</Link>
							</li>
							<li>
								<Link to="institucional">Institucional</Link>
							</li>
							<li>
								<Link to="onde_comprar">Onde Comprar</Link>
							</li>
							<li>
								<Link to="duvidas">Dúvidas</Link>
							</li>
							<li>
								<Link to="contato">Contato</Link>
							</li>
						</ul>
					</nav>
					
	}
})

export default Menu