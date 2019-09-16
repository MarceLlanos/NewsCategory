import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component{

  state = {
    noticias:{}
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = "https://newsapi.org/v2/top-headlines?country=mx&category=business&apikey=";
    fetch(url).then(respuesta => {
      respuesta.json();
    }).then(noticias => {
      this.setState({noticias : noticias.articles});
    })
  }
  render(){
    return (
      <div className="App">
        <Header title = "Noticias"/>
      </div>
    );
  }
}

export default App;
