import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';

const Root = ({ store }) => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default Root;
