import { createSlice } from '@reduxjs/toolkit'

export const jewelleriesDataSlice = createSlice({
    name: 'jewelleriesData',
    initialState: {
        value: []
    },
    reducers: {
        setJewelleries: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setJewelleries } = jewelleriesDataSlice.actions

export default jewelleriesDataSlice.reducer