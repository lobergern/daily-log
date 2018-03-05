import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TR from '../common/Table/TR';
import TD from '../common/Table/TD';


const EventTableRow = ({event, selectable}) => {
  return (
    <TR selectable={selectable}>
      <TD><Link to={`event/${event.id}`}>{event.name}</Link></TD>
      <TD>{`/event/${event.startTime}`}</TD>
      <TD>{event.endTime}</TD>
      <TD>{event.notes}</TD>
    </TR>
  );
};

EventTableRow.propTypes = {
  event: PropTypes.object.isRequired,
  selectable: PropTypes.bool
};

export default EventTableRow;
