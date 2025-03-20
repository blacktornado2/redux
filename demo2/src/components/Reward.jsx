import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, incrementByPoints } from '../reducers/reward';

const Reward = () => {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const { points } = useSelector((state) => state.reward);


    return (
        <div>
            <h2>Reward Component</h2>
            <h3>Current Points: {points}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <input type="text" onChange={(e) => setValue(+e.target.value)} name="" id="" />
            <button onClick={() => dispatch(incrementByPoints(value))}>Increment By Points</button>

        </div>
    )
}

export default Reward;