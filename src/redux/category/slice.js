import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: '',
    },
    reducers: {
        chooseCategory(state, action) {
            state.category = action.payload
        },
    },
});

export const { chooseCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
