import React from 'react'
import { Router } from 'react-router'
import $ from 'jquery';
import Header from '../components/template/header'
import Footer from '../components/template/footer'
import Language_option from '../components/template/language_option'
import items from '../components/template/items'

var current_path,
	cache_obj,
	path,
	default_language = 'pt',
	local_cache = JSON.parse(localStorage.getItem("language"));

export default class Template extends React.Component{
	constructor(props){
		super(props);

		if(local_cache){
			this.state = { 
				language: local_cache.language,
				translate: local_cache.translate
			}
		}else{
			this.state = {
				language: default_language,
				translate: {
					home: [],
					colecao: [],
					tecnologia: [],
					institucional: [],
					onde_comprar: [],
					duvidas: [],
					contato: []
				}
			}
			this.switch_language(default_language);
		}

		this.resolve(
			this.props.children.props.route.path,
			this.props.children.props.routeParams.lang
		);
	}
	componentWillReceiveProps(nextProps) {
		this.resolve(
			nextProps.children.props.route.path, 
			nextProps.children.props.routeParams.lang
		);
	}
	resolve(hash, language){
		if(hash == 'translate/:lang' || hash == undefined){
			current_path = 'home';
			this.switch_language(default_language);
		}else{
			current_path = hash;
		}

		return current_path;
	}
	switch_language(language){

		path = './resources/translate/'+language+'.json';

		$.ajax({
			url: path,
			dataType: 'json',
			cache: false,
			success: function(obj){

				cache_obj = obj.translate[0];

				//set language
				this.setState({
					language: language,
					translate: cache_obj
				});

				//backstage action
				localStorage.setItem("language", JSON.stringify({
					language: language,
					translate: cache_obj
				}));

			}.bind(this),
			error: function(xhr, status, err){
				console.error(path, status, err.toString());
			}.bind(this)
		});
	}
	render(){
		return 	<div className="template">
					<Header />
					<Language_option on_switch_lang={this.switch_language.bind(this)}/>
					{this.props.children && React.cloneElement(this.props.children, { 
						language: this.state.lang,
						translate: this.state.translate[current_path]
					})}
					<Footer/>
				</div>
	}
}

Template.contextTypes = { history: React.PropTypes.object.isRequired }