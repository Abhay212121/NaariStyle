import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDressesData = createAsyncThunk('fetchDressesData', async () => {
    const response = await fetch("https://dummyjson.com/products/category/womens-dresses")
    return response.json();
})


export const dressesDataSlice = createSlice({
    name: 'dressesData',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDressesData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchDressesData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchDressesData.rejected, (state, action) => {
            console.log("Err is", action.payload)
            state.isError = true
        })
    }
})


export default dressesDataSlice.reducer