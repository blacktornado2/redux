import { takeLatest, call, put } from 'redux-saga/effects';
import {
    FETCH_USER_REQUEST,
    fetchUserSuccess,
    fetchUserFailure
} from '../actions';


function* fetchUser(action) {
    try {
        const user = yield call(fetchUserData, action.payload);
        yield put(fetchUserSuccess(user));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('network response was not ok');
    }
}


export const rootSaga = () => {

}