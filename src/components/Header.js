import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return ( 
    <nav>
      <div className = "nav-wrapper light-blue darken-3">
        <h1 className = "brand-logo center">{props.title}</h1>
      </div>
    </nav>
   );
}
Header.propTypes = {
  title : PropTypes.string.isRequired
}
 
export default Header;