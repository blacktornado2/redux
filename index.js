import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import {thunk} from 'redux-thunk';

// Store
const store = createStore(reducer, applyMiddleware(logger.default, thunk)); // createStore is deprecated, we can use legacy_createStore as createStore

// Reducer
function reducer(state={amount: 1}, action) {
    switch(action.type) {
        case("INCREMENT"): 
            return {...state, amount: state.amount + 1};
        case "DECREMENT":
            return {...state, amount: state.amount - 1};
        case "INCREMENT_BY_AMOUNT":
            return {...state, amount: state.amount + action.payload};
        case action.init:
            return {...state, amount: action.payload};
        default: return state;

    }
}

// Global State
// console.log(store.getState());

// Action = {type: TYPE, payload: PAYLOAD}
// Action is not a part of redux, action is a convention
// We dispatch action on an event
// store.dispatch({type: 'INCREMENT'});

// console.log(store.getState());

// store.dispatch({type: 'DECREMENT'});

// store.subscribe will be called any time an action is dispatched
// store.subscribe(() => {
//     console.log(store.getState());
// })

// setInterval(() => {
//     store.dispatch({type: 'INCREMENT'});
// }, 4000)

// store.dispatch({type: "INCREMENT_BY_AMOUNT", payload: 10})

// Action creators
function increment() {
    return {type: "INCREMENT"}
}

function decrement() {
    return {type: "DECREMENT"}
}

function incrementByAmount(value) {
    return {type: "INCREMENT_BY_AMOUNT", payload: value}
}

function initUser(value) {
    return {type: action.init, payload: value}
}

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(incrementByAmount(23));

// Make action type constant
const action = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    incrementByAmount: "INCREMENT_BY_AMOUNT",
    init: "init"
}

// dispatching with action creator
// store.dispatch(initUser(100));

// dispatching without action creator
// store.dispatch({type: action.increment});


async function getUser() {
    const {data} = await axios.get('http://localhost:3000/accounts/1');
    console.log(data)
}
// getUser();

// doesn't work
// async function initUser2() {
//     const {data} = await axios.get('http://localhost:3000/accounts/1');
//     return {type: action.init, payload: data.amount};
// }
// store.dispatch(initUser2());


async function initUser3(dispatch, getState) {
    const {data} = await axios.get('http://localhost:3000/accounts/1');
    return {type: action.init, payload: data.amount};
}
store.dispatch(initUser3);

