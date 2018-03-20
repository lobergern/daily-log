import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions/eventActions';
import EventForm from './EventForm';

class ManageEventPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      event: props.event,
      toHomePage: false
    };

    this.updateEventState = this.updateEventState.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
  }

  updateEventState(e) {
    const field = e.target.name;
    const event = Object.assign({}, this.state.event);
    event[field] = e.target.value;
    this.setState({event});
  }

  saveEvent(e) {
    e.preventDefault();
    this.props.actions.saveEvent(this.state.event)
    this.setState({toHomePage: true});
  }

  render() {
    if (this.state.toHomePage) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h1>Manage Event</h1>
        <EventForm
          event={this.state.event}
          onChange={this.updateEventState}
          onSave={this.saveEvent}
           />
      </div>
    );
  }
}

ManageEventPage.propTypes = {
  event: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  let event = {name: '', notes: ''};

  const eventId = ownProps.match.params.id;
  if (eventId) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {event};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEventPage);
