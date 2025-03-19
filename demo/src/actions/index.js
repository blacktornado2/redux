import axios from "axios";

export const inc = "INCREMENT";
export const dec = "DECREMENT";
export const incByAmt = "INCREMENT_BY_AMOUNT";
export const incBonus = "INCREMENT_BONUS";
export const getUserAccPending = "GET_USER_ACCOUNT_PENDING";
export const getUserAccFulfilled = "GET_USER_ACCOUNT_FULFILLED"; 
export const getUserAccRejected = "GET_USER_ACCOUNT_REJECTED";

export function increment() {
    return {type: inc}
}

export function decrement() {
    return {type: dec}
}

export function incrementByAmount(value) {
    return {type: incByAmt, payload: value}
}

export function incrementBonus() {
    return {type: incBonus}
}

export function getUserAccountFulfilled(value) {
    return {type: getUserAccFulfilled, payload: value}
}

export function getUserAccountRejected(error) {
    return {type: getUserAccRejected, payload: error}
}

export function getUserAccountPending() {
    return {type: getUserAccPending}
}

export function getUserAccount(id) {
    return async (dispatch, getState) => { 
        try {
            dispatch(getUserAccountPending())
            const {data} = await axios.get(`http://localhost:8080/accounts/${id}`);
            dispatch(getUserAccountFulfilled(data.amount));
        } catch (error) {
            dispatch(getUserAccountRejected(error.message))
        }
        
    }
}
