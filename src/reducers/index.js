import { combineReducers } from 'redux';
import cities from './cities';
import states from './states';
import score from './score';

const reducers = combineReducers({
  states,
  cities,
  score,
});

export default reducers;