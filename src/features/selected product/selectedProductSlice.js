import { createSlice } from "@reduxjs/toolkit";



export const selectedProductSlice = createSlice({
    name: "selectedProduct",
    initialState: {},
    reducers: {
        selectObj: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { selectObj } =
    selectedProductSlice.actions;

export default selectedProductSlice.reducer;