import { inc, dec, incByAmt, incBonus, getUserAccFulfilled, getUserAccPending, getUserAccRejected } from '../actions'

export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case inc:
            return { ...state, amount: state.amount + 1 };
        case dec:
            return { ...state, amount: state.amount - 1 };
        case incByAmt:
            return { ...state, amount: state.amount + action.payload };
        case getUserAccPending:
            return { ...state, isLoading: true };
        case getUserAccFulfilled:
            return { ...state, amount: action.payload, isLoading: false };
        case getUserAccRejected:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
}