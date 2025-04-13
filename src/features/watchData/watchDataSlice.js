import { createSlice } from '@reduxjs/toolkit'

export const watchDataSlice = createSlice({
    name: 'watchData',
    initialState: {
        value: []
    },
    reducers: {
        setWatches: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setWatches } = watchDataSlice.actions

export default watchDataSlice.reducer