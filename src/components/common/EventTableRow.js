import React from 'react';
import PropTypes from 'prop-types';


const TableRow = ({event}) => {
  return(
    <tr>
      <td>{event.name}</td>
      <td>{event.startTime}</td>
      <td>{event.endTime}</td>
      <td>{event.notes}</td>
    </tr>
  );
};

TableRow.propTypes = {
  event: PropTypes.object.isRequired
};

export default TableRow;
