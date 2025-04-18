import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWatchData = createAsyncThunk('fetchWatchData', async () => {
    const response = await fetch("https://dummyjson.com/products/category/womens-watches")
    return response.json();
})


export const watchDataSlice = createSlice({
    name: 'watchDataSlice',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWatchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchWatchData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchWatchData.rejected, (state, action) => {
            console.log("Err is", action.payload)
            state.isError = true
        })
    }
})


export default watchDataSlice.reducer