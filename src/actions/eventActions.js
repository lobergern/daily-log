import { LOAD_EVENTS_SUCCESS, CREATE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS } from '../constants/actionTypes';
import EventApi from '../api/mockEventApi';

export function loadEventsSuccess(events) {
  return {type: LOAD_EVENTS_SUCCESS, events};
}

export function createEventSuccess(event) {
  return {type: CREATE_EVENT_SUCCESS, event}
}

export function updateEventSuccess(event) {
  return {type: UPDATE_EVENT_SUCCESS, event};
}

export function loadEvents() {
  return function(dispatch) {
    EventApi.loadEvents()
      .then(events => {
        dispatch(loadEventsSuccess(events));
      })
      .catch(error => {
        throw(error);
      });
  }
}

export function saveEvent(event) {
  return function(dispatch) {
    return EventApi.saveEvent(event)
      .then(savedEvent => {
        event.id ? dispatch(updateEventSuccess(savedEvent)) :
          dispatch(createEventSuccess(savedEvent));
      })
      .catch(error => {
        throw(error);
      });
  }
}
