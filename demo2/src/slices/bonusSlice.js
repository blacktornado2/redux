import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 0
}

const incrementByAmount = createAction('account/incrementByAmount');

const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {state.points += 1 }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementByAmount, (state, action) => {
            if(action.payload >= 100) {
                state.points++;
            }
        })
    }
});

export const {increment} = bonusSlice.actions;

export default bonusSlice.reducer;