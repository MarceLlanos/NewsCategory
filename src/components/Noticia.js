import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (noticia) => {
	
	const {urlToImage, title, description, source, url} = noticia.noticia;

  return ( 
    <div className = "col s12 m6 l4 ">
      <div className = "card">
				<div className = "card-image">
					<img src = {urlToImage} alt = {title}/>
					<span className = "card-title">{source.name}</span>
				</div>
				<div className = "card-content">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className = "card-action">
					<a href = {url} target = '_blank' className = "waves-effects waves-light btn">Noticia Completa</a>
				</div>
			</div>
    </div>
   );
}

Noticia.propTypes = {
		noticia : PropTypes.shape({
		urlToImage : PropTypes.string, 
		title: PropTypes.string,
		description: PropTypes.string,
		source: PropTypes.object
	})
}
 
export default Noticia;