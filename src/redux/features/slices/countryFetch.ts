import { createSlice } from '@reduxjs/toolkit'
import { countryAPI } from '../countryThunk'

const initialState = {
  coutry: '',
  countryData: [],
  loading: false,
  error: null,
}

const countryFetchSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    getCountry: (state, action) => {
      state.coutry = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(countryAPI.pending, (state) => {
        state.loading = true
        state.error = null
        state.countryData = []
      })
      .addCase(countryAPI.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.countryData = action.payload.data
      })
      .addCase(countryAPI.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.error
        state.countryData = []
      })
  },
})

export default countryFetchSlice.reducer
export const { getCountry } = countryFetchSlice.actions
