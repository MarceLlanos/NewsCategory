import React from 'react';

const Header = (props) => {
  return ( 
    <nav>
      <div className = "nav-wrapper light-blue darken-3">
        <h1 className = "brand-logo center">{props.title}</h1>
      </div>
    </nav>
   );
}
 
export default Header;