import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, incrementByAmount, getUserAccount } from '../actions';

const Account = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);

  const [value, setValue] = useState(0);
  
  return (
    <div>
      <h2>Account Component</h2>
      <h3>Current Amount: {amount}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)} name="" id="" />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment by value</button>
        <button onClick={() => dispatch(getUserAccount(1))}>Initialise Account</button>
    </div>
  );
}

export default Account;