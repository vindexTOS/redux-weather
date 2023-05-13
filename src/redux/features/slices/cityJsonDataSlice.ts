import { createSlice } from '@reduxjs/toolkit'
import cityData from '../../../assets/cityData.json'

type cityDataType = {
  country: string
  city: string
}
export interface stateInterFace {
  citys: cityDataType[]
  filteredCitys: cityDataType[]
  search: string
  cityDropDown: boolean
}
const initialState: stateInterFace = {
  citys: cityData.sort((a, b) => String(a.city).localeCompare(String(b.city))),
  search: '',
  cityDropDown: false,
  filteredCitys: [],
}

const citySlice = createSlice({
  name: 'city-list',
  initialState,
  reducers: {
    SearchCity: (state, action) => {
      state.search = action.payload
      state.cityDropDown = true
      state.filteredCitys = state.citys.filter((val: cityDataType) =>
        val.city.toLowerCase().includes(state.search.toLowerCase()),
      )
    },

    HanndleCityDropDown: (state) => {
      state.cityDropDown = !state.cityDropDown
      state.filteredCitys = state.citys
    },
  },
})

export default citySlice.reducer
export const {
  SearchCity,

  HanndleCityDropDown,
} = citySlice.actions
