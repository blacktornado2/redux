import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {increment} from './../slices/bonusSlice'

const Bonus = () => {
    const dispatch = useDispatch();
    const { amount } = useSelector((state) => state.account);
    const { points } = useSelector((state) => state.bonus);


    return (
        <div>
            <h2>Bonus</h2>
            <h3>Current Amount: {amount}</h3>
            <h3>Current Points: {points}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Bonus