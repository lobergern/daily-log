import { LOAD_EVENTS_SUCCESS, CREATE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS } from '../constants/actionTypes';
import initialState from "./initialState";

export default function eventReducer(state = initialState.events, action) {
  switch (action.type) {
    case LOAD_EVENTS_SUCCESS:
      return action.events;
    case CREATE_EVENT_SUCCESS:
      return [...state, Object.assign(action.event)];
    case UPDATE_EVENT_SUCCESS:
      return [
        ...state.filter(event => event.id !== action.event.id),
        Object.assign(action.event)
      ];
    default:
      return state;
  }
}
