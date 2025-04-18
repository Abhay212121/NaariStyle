import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBagsData = createAsyncThunk('fetchBagsData', async () => {
    const response = await fetch("https://dummyjson.com/products/category/womens-bags")
    return response.json();
})


export const bagsDataSlice = createSlice({
    name: 'bagsData',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBagsData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchBagsData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchBagsData.rejected, (state, action) => {
            console.log("Err is", action.payload)
            state.isError = true
        })
    }
})


export default bagsDataSlice.reducer