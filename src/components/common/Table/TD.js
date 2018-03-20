import React from 'react';
import PropTypes from 'prop-types';

const TD = ({children, selectable}) => {
  return (
    <td className={selectable ? 'mdl-data-table__cell--non-numeric' : ''}>{children}</td>
  );
}

TD.propTypes = {
  children: PropTypes.node,
  selectable: PropTypes.bool
};

export default TD;
