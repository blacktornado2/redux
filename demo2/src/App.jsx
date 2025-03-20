import { useSelector } from 'react-redux'

import Account from './components/Account'
import Bonus from './components/Bonus'
import Reward from './components/Reward';

function App() {
  const { amount } = useSelector(state => state.account);
  const { points } = useSelector(state => state.bonus);

  return (
    <div className='App'>
      <h2>App</h2>
      <h3>Total Amount: {amount}</h3>
      <h3>Total Points: {points}</h3>
      <Account />
      <Bonus />
      <Reward />
    </div>
  )
}

export default App
