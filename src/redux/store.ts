import { configureStore } from '@reduxjs/toolkit'
import { cityFinderReducer } from './features/slices/cityFindSlice'
import weatherREducer from './features/slices/dataSlice'
const store = configureStore({
  reducer: {
    dataFetch: weatherREducer,
    cityFinder: cityFinderReducer,
  },
})

export default store
