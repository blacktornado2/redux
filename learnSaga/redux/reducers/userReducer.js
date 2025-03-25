import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actions";

const initialState = {
    user: null,
    isLoading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, isLoading: true, error: null }
        case FETCH_USER_SUCCESS:
            return { ...state, user: action.payload, isLoading: false }
        case FETCH_USER_FAILURE:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    }
};

export default userReducer;