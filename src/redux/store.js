import { configureStore } from '@reduxjs/toolkit'
import bagsDataReducer from '../features/apiData/bagsDataSlice'
import topsDataReducer from '../features/apiData/topsDataSlice'
import jewelleriesDataReducer from '../features/apiData/jewelleriesDataSlice'
import watchDataReducers from '../features/apiData/watchDataSlice'
import shoesDataReducers from '../features/apiData/shoeDataSlice'
import dressesDataReducer from '../features/apiData/dressesDataSlice'
import selectedProductReducer from '../features/selected product/selectedProductSlice'

export default configureStore({
    reducer: {
        bagsData: bagsDataReducer,
        topsData: topsDataReducer,
        jewelleriesData: jewelleriesDataReducer,
        watchData: watchDataReducers,
        shoesData: shoesDataReducers,
        dressesData: dressesDataReducer,
        selectedProduct: selectedProductReducer
    }
})