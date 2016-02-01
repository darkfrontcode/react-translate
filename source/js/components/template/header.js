import React from 'react'
import $ from 'jquery'
import Menu from './menu'

var items;

export default class Header extends React.Component{
	componentDidMount(){
		items = {
			language_select: $('#language_select'),
			language_option: $('#language_option')
		}

		//language menu drop/down
		items.language_select.on({
			click: function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active');
					items.language_option.removeClass('active');
				}else{
					$(this).addClass('active');
					items.language_option.addClass('active');
				}
			}
		});

	}
	render(){
		return 	<header className="root">
					<div className="content clearfix">
						<Menu />
						<a id="language_select">
							<div className="top">
								<i></i>
							</div>
							<div className="bottom">
								<span>Choose your</span>
								<span>Language</span>
							</div>
							<div className="line"></div>
						</a>
					</div>
				</header>
	}
}