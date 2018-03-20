import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, onClick}) => {
  return(
    <button
      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      onClick={onClick} >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;
