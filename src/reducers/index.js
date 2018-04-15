import { combineReducers } from 'redux';
import cities from './cities';
import states from './states';

const reducers = combineReducers({
  states,
  cities,
});

export default reducers;