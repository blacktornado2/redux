import { useSelector } from 'react-redux'

import Account from './components/Account'
import Bonus from './components/Bonus'

function App() {
  const { amount, isLoading, error } = useSelector(state => state.account);
  const { points } = useSelector(state => state.bonus);

  return (
    <div className='App'>
      <h2>App</h2>
      {
        isLoading ? <p> Loading... </p> : error ? <p> error </p> : <h3> Current Amount: {amount} </h3>
      }
      <h3>Total Bonus: {points}</h3>
      <Account />
      <Bonus />
    </div>
  )
}

export default App
