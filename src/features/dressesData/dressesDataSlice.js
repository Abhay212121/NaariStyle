import { createSlice } from '@reduxjs/toolkit'

export const dressesDataSlice = createSlice({
    name: 'dressesData',
    initialState: {
        value: []
    },
    reducers: {
        setDresses: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setDresses } = dressesDataSlice.actions

export default dressesDataSlice.reducer