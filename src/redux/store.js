import { configureStore } from '@reduxjs/toolkit'
import bagsDataReducer from '../features/bagsData/bagsDataSlice'
import topsDataReducer from '../features/topsData/topsDataSlice'
import jewelleriesDataReducer from '../features/jewelleriesData/jewelleriesDataSlice'
import watchDataReducers from '../features/watchData/watchDataSlice'
import shoesDataReducers from '../features/shoeData/shoeDataSlice'
import dressesDataReducer from '../features/dressesData/dressesDataSlice'

export default configureStore({
    reducer: {
        bagsData: bagsDataReducer,
        topsData: topsDataReducer,
        jewelleriesData: jewelleriesDataReducer,
        watchData: watchDataReducers,
        shoesData: shoesDataReducers,
        dressesData: dressesDataReducer
    }
})