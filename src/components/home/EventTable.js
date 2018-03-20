import React from 'react';
import PropTypes from 'prop-types';
import Table from '../common/table/Table';
import TR from '../common/table/TR';
import TH from '../common/table/TH';

import EventTableRow from './EventTableRow';

const EventTable = ({events}) => {
  return (
    <Table
      selectable={false}
      headerRow={
        <TR>
          <TH>Event</TH>
          <TH>Time</TH>
          <TH>Notes</TH>
        </TR>
      }
      // TODO Refactor?: Create <TBODY> component instead of passing as prop to make
      // this look more like regular html?
      bodyRows={events.map(event => <EventTableRow key={event.id} event={event} />)}
    />
  );
};

EventTable.propTypes = {
  events: PropTypes.array.isRequired
}

export default EventTable;
