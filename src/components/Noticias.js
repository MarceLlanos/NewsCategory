import React, { Component } from 'react';
import Noticia from './Noticia';

class Noticias extends Component {
  state = {  }
  render() { 
    return ( 
      <div className ="row">
        <Noticia />
      </div>
     );
  }
}
 
export default Noticias;