import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


// const store = createStore(reducer)
const loggerMiddlerware = createLogger();

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddlerware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
