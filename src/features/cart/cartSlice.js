import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        addInCart: (state, action) => {
            state.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        decreaseQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload)
            if (item) {
                item.quantity = item.quantity + 1;
            }
        },
        resetCart: (state) => {
            return []
        }
    }

})

export const { addInCart, deleteFromCart, decreaseQuantity, increaseQuantity, resetCart } = cartItemSlice.actions;

export default cartItemSlice.reducer;