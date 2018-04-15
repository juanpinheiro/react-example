import { applyMiddleware } from 'redux';
import cities from './cities';
import score from './score';

export default applyMiddleware(cities, score);