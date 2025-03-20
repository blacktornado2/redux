import { createAction, createReducer } from "@reduxjs/toolkit"

export const increment = createAction('reward/increment');
export const incrementByPoints = createAction('reward/incrementByPOints');

const initialState = {
    points: 21
}

const rewardReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(increment, (state, action) => {
        state.points++
    })
    .addCase(incrementByPoints, (state, action) => {
        state.points += action.payload
    })
});


export default rewardReducer;
