import React from 'react'
import {Link} from "react-router"

const NotFound = React.Component({
	render(){
		return 	<section id="not_found">
					<span className="big">Erro 404</span>
					<span>Desculpe, esta página não foi encontrada!</span>
					<span><Link to="/">Clique aqui</Link><span> para ir para a página inicial.</span></span>
				</section>
	}
})

export default NotFound