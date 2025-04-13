import { createSlice } from '@reduxjs/toolkit'

export const topsDataSlice = createSlice({
    name: 'topsData',
    initialState: {
        value: []
    },
    reducers: {
        setTops: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setTops } = topsDataSlice.actions

export default topsDataSlice.reducer