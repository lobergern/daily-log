import React from 'react';
import PropTypes from 'prop-types';

const TR = ({children, selectable}) => {

  const selectableRowChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      selectable: selectable && child === children[0]
    });
  });

  return (
    <tr>{selectableRowChildren}</tr>
  );
}

TR.propTypes = {
  children: PropTypes.node.isRequired,
  selectable: PropTypes.bool
}

export default TR;
