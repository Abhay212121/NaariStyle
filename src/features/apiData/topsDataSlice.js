import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopsData = createAsyncThunk('fetchTopsData', async () => {
    const response = await fetch("https://dummyjson.com/products/category/tops");
    return response.json();
})


export const topsDataSlice = createSlice({
    name: 'topsDataSlice',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopsData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTopsData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTopsData.rejected, (state, action) => {
            console.log("Err is", action.payload)
            state.isError = true
        })
    }
})


export default topsDataSlice.reducer