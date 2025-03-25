import { takeLatest, call, put } from 'redux-saga/effects';
import {
    FETCH_USER_REQUEST,
    FETCH_COMMENTS_REQUEST,
    fetchUserSuccess,
    fetchUserFailure,
    fetchCommentsSuccess,
    fetchCommentsFailure
} from '../actions';

// Worker Saga
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

function* fetchComments() {
    try {
        const comments = yield call(fetchCommentsData);
        console.log("fetchComments comments")
        yield put(fetchCommentsSuccess(comments));
        
    } catch (error) {
        yield put(fetchCommentsFailure(error.message));
    }
}

async function fetchCommentsData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        console.log("comments: ", data);
        return data;
    } catch (error) {
        console.log(error)
        throw new Error('fethcCommentsData failed!')
    }
}

// Watcher Saga
function* watchFetchUser() {
    yield takeLatest(FETCH_USER_REQUEST, fetchUser);
}

function* watchFetchComments() {
    yield takeLatest(FETCH_COMMENTS_REQUEST, fetchComments);
}

export function* rootSaga() {
    yield watchFetchComments();
    yield watchFetchUser();
}