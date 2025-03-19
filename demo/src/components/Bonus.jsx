import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrementBonus } from '../actions'

const Bonus = () => {
  const dispatch = useDispatch();
  const points = useSelector(state => state.bonus.points);

  return (
    <div>
      <h2>Bonus Component</h2>
      <h3>Total points: {points}</h3>
      <button onClick={() => dispatch(incrementBonus())}>Increment</button>
    </div>
  )
}

export default Bonus