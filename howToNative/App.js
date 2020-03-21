/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Container } from './Container'
import { Provider } from 'react-redux'
import reducer from './utils/reducers/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(thunk, logger))
console.log(store.getState())
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>

  );
};



export default App;
