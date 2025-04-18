import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchShoeData = createAsyncThunk('fetchShoeData', async () => {
    const response = await fetch("https://dummyjson.com/products/category/womens-shoes")
    return response.json();
})


export const shoeDataSlice = createSlice({
    name: 'shoeDataSlice',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShoeData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchShoeData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchShoeData.rejected, (state, action) => {
            console.log("Err is", action.payload)
            state.isError = true
        })
    }
})


export default shoeDataSlice.reducer