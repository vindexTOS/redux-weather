import React, { Reducer } from 'react'
import cityData from '../assets/cityData.json'
import { useDispatch, useSelector } from 'react-redux'
import {
  SearchCity,
  stateInterFace,
  HanndleCityDropDown,
} from '../redux/features/slices/cityJsonDataSlice'

const Cities = () => {
  const cityData = useSelector(
    (state: stateInterFace | any) => state.citySearch.filteredCitys,
  )
  const dropDown = useSelector(
    (state: stateInterFace | any) => state.citySearch.cityDropDown,
  )

  const dispatch = useDispatch()

  return (
    <div>
      {/* onClick={() => dispatch(HanndleCityDropDown())} */}
      <div>
        <input
          onChange={(e) => dispatch(SearchCity(e.target.value))}
          type="text"
          placeholder=" Search City"
        />
      </div>
      {dropDown && (
        <div>
          {cityData.map((val: any) => {
            return <div key={val.city + val.country}>{val.city}</div>
          })}
        </div>
      )}
    </div>
  )
}

export default Cities
