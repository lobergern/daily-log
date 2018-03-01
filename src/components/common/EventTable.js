import React from 'react';
import PropTypes from 'prop-types';
import EventTableRow from './EventTableRow';

const Table = ({events}) => {
  return (
    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Event</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => <EventTableRow key={event.key} event={event} />)}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  events: PropTypes.array.isRequired
}

export default Table;
