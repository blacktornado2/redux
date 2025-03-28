import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import logger from 'redux-logger';
import {Provider} from 'react-redux'

import App from './App.jsx';
import {accountReducer} from './reducers/account.js';
import {bonusReducer} from './reducers/bonus.js'


const store = createStore(combineReducers({
  account: accountReducer, 
  bonus: bonusReducer
}), applyMiddleware(thunk, logger));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
