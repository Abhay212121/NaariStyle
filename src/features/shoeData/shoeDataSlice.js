import { createSlice } from '@reduxjs/toolkit'

export const shoeDataSlice = createSlice({
    name: 'shoesData',
    initialState: {
        value: []
    },
    reducers: {
        setShoes: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setShoes } = shoeDataSlice.actions

export default shoeDataSlice.reducer