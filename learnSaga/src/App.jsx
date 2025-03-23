import { useState } from 'react';
import {useSelector} from "react-redux";

import Counter from './components/Counter';
import { action } from './redux/store';

function App() {
  const state = useSelector(state => state);

  return (
    <div>
      App
      <Counter
        value={state}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')} />
    </div>
  );
}

export default App;
