import { configureStore } from '@reduxjs/toolkit'
import { cityFinderReducer } from './features/slices/cityFindSlice'
import citySearchReducer from './features/slices//cityJsonDataSlice'
import weatherREducer from './features/slices/dataSlice'

const store = configureStore({
  reducer: {
    dataFetch: weatherREducer,
    cityFinder: cityFinderReducer,
    citySearch: citySearchReducer,
  },
})

export default store
