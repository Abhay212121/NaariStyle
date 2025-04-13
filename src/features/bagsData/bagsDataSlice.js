import { createSlice } from '@reduxjs/toolkit'

export const bagsDataSlice = createSlice({
    name: 'bagsData',
    initialState: {
        value: []
    },
    reducers: {
        setBags: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setBags } = bagsDataSlice.actions

export default bagsDataSlice.reducer