import React from 'react'
import $ from 'jquery'

var items;

export default class Language_option extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		items = {
			language_select: $('#language_select'),
			language_option: $('#language_option')
		}
	}
	on_switch_lang(language){
		this.props.on_switch_lang(language);

		items.language_select.removeClass('active');
		items.language_option.removeClass('active');
	}
	render(){
		return	<nav id="language_option">
						<ul className="clearfix">
							<li>
								<a onClick={this.on_switch_lang.bind(this, 'pt')}>Português[BR]</a>
							</li>
							<li>
								<a onClick={this.on_switch_lang.bind(this, 'spa')}>Espanhol</a>
							</li>
							<li>
								<a onClick={this.on_switch_lang.bind(this, 'en')}>Inglês</a>
							</li>
						</ul>
					</nav>
					
	}
}