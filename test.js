import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

// Using multiple reducers to simplify state management

const actions = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    incrementByAmount: "INCREMENT_BY_AMOUNT",
    init: "INIT",
    incrementBonus: "INCREMENT_BONUS"
}

const store = createStore(combineReducers({
    account: accountReducer,   // new variables will be made in global state with name account and bonus
    bonus: bonusReducer
}), applyMiddleware(thunk, logger));

function accountReducer(state={amount: 1}, action) {
    switch(action.type) {
        case(actions.increment): 
            return {...state, amount: state.amount + 1};
        case actions.decrement:
            return {...state, amount: state.amount - 1};
        case actions.incrementByAmount:
            return {...state, amount: state.amount + action.payload};
        case actions.init:
            return {...state, amount: action.payload};
        default: 
            return state;
    }
}

function bonusReducer(state={points: 0}, action) {
    switch(action.type) {
        case(actions.incrementBonus):
            return {...state, points: state.points + 1};
        default:   
            return state;
    }
}

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
    return {type: actions.init, payload: value}
}

function incrementBonus() {
    return {type: actions.incrementBonus}
}

store.dispatch(increment());