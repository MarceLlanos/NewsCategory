import React, { Component } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component{

	state = {
		noticias:{}
	}

	componentDidMount(){
		this.consultarNoticias();
	}

	consultarNoticias = () => {
		let url = "https://newsapi.org/v2/top-headlines?country=mx&category=business&apikey=";
		
		fetch(url)
			.then(respuesta => {
				respuesta.json();
			})
			.then(noticias => {
				this.setState({
					noticias : noticias.articles
				});
			})
	}
	
	render(){
		return (
			<div className="container-app">
				<Header title = "Noticias"/>

				<div className = "container white contenerdor-noticias">
					<Formulario/>
					<Noticias 
						noticias = {this.state.noticias}
					/>
				</div>
			</div>
		);
	}
}

export default App;
