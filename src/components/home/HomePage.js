import React from 'react';
import EventTable from './EventTable';
class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      events: [
        {id: 0, name: 'Test1', startTime: '12:32', endTime: '4:32', notes: 'note'},
        {id: 1, name: 'Test2', startTime: '1:42', endTime: '3:31', notes: 'note'},
        {id: 2, name: 'Test3', startTime: '5:32', endTime: '5:34', notes: 'note'}
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Daily Log</h1>
        <EventTable
          events={this.state.events}
        />
      </div>
    );
  }
}

export default HomePage;
