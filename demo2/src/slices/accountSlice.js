import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    amount: 1
};

export const getUserAccount = createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI) => {
        const {data} = await axios.get(`http://localhost:8080/accounts/${userId}`)
        return data.amount;
    }
);

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.amount += 1
        },
        decrement: (state) => { state.amount -= 1 },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.amount = action.payload;
        })
        .addCase(getUserAccount.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getUserAccount.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

    }
});

// Action creators are generated ofr each case reducer funtion
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

// Export reducer from slice
export default accountSlice.reducer;