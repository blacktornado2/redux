import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';

import accountReducer from './slices/accountSlice.js';
import bonusReducer from './slices/bonusSlice.js'
import rewardReducer from './reducers/reward.js';

import App from './App.jsx'

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
