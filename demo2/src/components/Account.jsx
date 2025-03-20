import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, incrementByAmount, getUserAccount } from './../slices/accountSlice';

const Account = () => {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const { amount } = useSelector(state => state.account);
    const { points } = useSelector(state => state.bonus);



    return (
        <div>
            <h2>
                Account
            </h2>
            <h3>Current Amount: {amount}</h3>
            <h3>Current Points: {points}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <input type="text" onChange={(e) => setValue(+e.target.value)} name="" id="" />
            <button type='text' onClick={() => dispatch(incrementByAmount(value))}>Increment by amount</button>
            <button type='text' onClick={() => dispatch(getUserAccount(1))}>Get User</button>
        </div>
    )
}

export default Account;