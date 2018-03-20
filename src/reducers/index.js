import { combineReducers } from 'redux';
import events from './eventReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  events,
  routing: routerReducer
});

export default rootReducer;
