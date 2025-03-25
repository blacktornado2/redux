import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCommentsRequest } from '../../redux/actions';

const Comments = () => {
    
  const  dispatch = useDispatch();
  const {comments, isLoading, error} = useSelector(state => state.comments);

  return (
    <div>Comments
        <button onClick={() => dispatch(fetchCommentsRequest())}>Fetch Comments</button>
    </div>
  )
}

export default Comments