import React from 'react';
import PropTypes from 'prop-types';

const TH = ({children, selectable}) => {
  return (
    <th className={selectable ? 'mdl-data-table__cell--non-numeric' : ''}>{children}</th>
  );
}

TH.propTypes = {
  children: PropTypes.node.isRequired,
  selectable: PropTypes.bool
};

export default TH;
