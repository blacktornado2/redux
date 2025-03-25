import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";

import {fetchUserRequest} from '../redux/actions';
import User from './components/User';
import Comments from './components/Comments';

// import Counter from './components/Counter';

function App() {
  
  return (
    <div>
     App 
     <User />
     <Comments />
    </div>
  );
}

export default App;
