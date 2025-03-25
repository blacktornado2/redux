// Actions
// Users
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// Comments
export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';


// action creators
export const fetchUserRequest = (userId) => ({
    type: FETCH_USER_REQUEST,
    payload: userId,
});

export const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user,
});

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});

export const fetchCommentsRequest = () => ({
    type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (comments) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments
});

export const fetchCommentsFailure = (error) => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: error
}) 
