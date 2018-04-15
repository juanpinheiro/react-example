import { createStore } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

const configureStore = () => {
	return createStore(
		reducers
	);
};

export default configureStore;
