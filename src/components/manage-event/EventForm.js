import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button/Button';


const EventForm = ({event, onChange, onSave}) => (
  <form>
    <div className="mdl-textfield mdl-js-textfield">
      <input type="text" id="name" name="name" className="mdl-textfield__input" onChange={onChange} value={event.name}/>
      <label htmlFor="name" className="mdl-textfield__label">Name:</label>
    </div>
    <div className="mdl-textfield mdl-js-textfield">
      <textarea className="mdl-textfield__input" id="notes" name="notes" onChange={onChange} value={event.notes} type="text" rows= "3" ></textarea>
      <label className="mdl-textfield__label" htmlFor="sample5">Notes</label>
    </div>
    <Button onClick={onSave}>Save</Button>
  </form>
);

EventForm.propTypes = {
  event: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default EventForm;
