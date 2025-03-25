import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
    const [userId, setUserId] = useState(1);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    return (
        <div>User
            {
                user ? (<div>
                    <h2>Name: {user.name}</h2>
                    <h3>email: {user.email}</h3>
                    <h3>username: {user.email} </h3>
                </div>
                ) : <div>No User</div>
            }
            <input type="number" name="" placeholder='Enter the userId of user' id="" onChange={(e) => setUserId(+e.target.value)} />
            <button onClick={() => dispatch(fetchUserRequest(userId))}>Get user</button>
        </div>
    )
}

export default User