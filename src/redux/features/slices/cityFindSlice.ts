import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: '',
}

const cityFindSlice = createSlice({
  name: 'find',
  initialState,
  reducers: {
    lookUp: (state, action: PayloadAction<string, string>) => {
      state.city = action.payload
    },
  },
})

export const cityFinderReducer = cityFindSlice.reducer
export const { lookUp } = cityFindSlice.actions
