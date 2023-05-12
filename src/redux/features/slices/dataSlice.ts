import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { callWeather } from '../weatherThunk'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(callWeather.pending, (state) => {
        state.loading = true
        state.error = null
        state.data = []
      })
      .addCase(callWeather.fulfilled, (state, action: any) => {
        state.loading = false
        state.error = null
        state.data = action.payload
      })
      .addCase(callWeather.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.error
        state.data = []
      })
  },
})

export default dataSlice.reducer
