import React from 'react'
import {Route, Router, IndexRoute} from "react-router"

import App from '../views/app'
import Home from '../views/home'
import Colecao from '../views/colecao'
import Tecnologia from '../views/tecnologia'
import Institucional from '../views/institucional'
import Onde_comprar from '../views/onde_comprar'
import Duvidas from '../views/duvidas'
import Contato from '../views/contato'

export default(
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route name="translate" path="translate/:lang" component={Home}/>
			<Route path="home" component={Home}>
				<Route name="scroll" path="scroll/:id" component={Home}/>
			</Route>
			<Route path="colecao" component={Colecao} />
			<Route path="tecnologia" path="tecnologia" component={Tecnologia}/>
			<Route path="institucional" path="institucional" component={Institucional}/>
			<Route path="onde_comprar" path="onde_comprar" component={Onde_comprar}/>
			<Route path="duvidas" path="duvidas" component={Duvidas}/>
			<Route path="contato" path="contato" component={Contato}/>
		</Route>
	</Router>
)