import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJewelleryData = createAsyncThunk('fetchJewelleryData', async () => {
    const response = await fetch("https://dummyjson.com/products/category/womens-jewellery")
    return response.json();
})


export const jewelleriesDataSlice = createSlice({
    name: 'jewelleriesData',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJewelleryData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchJewelleryData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchJewelleryData.rejected, (state, action) => {
            console.log("Err is", action.payload)
            state.isError = true
        })
    }
})


export default jewelleriesDataSlice.reducer