import React, { Reducer } from 'react'

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
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

  const style = {
    mainDiv: `absolute left-40 top-20  gap-2 flex flex-col items-center justify-center`,
    inputDiv: `bg-[#202b3c]  p-2 w-[20rem] flex items-center justify-between rounded-t-[10px] rounded-b-[6px]`,
    btnWrapper: `cursor-pointer text-white text-[1.1rem]`,
  }

  return (
    <div className={style.mainDiv}>
      <div className={style.inputDiv}>
        <input
          className="bg-transparent outline-none"
          onChange={(e) => dispatch(SearchCity(e.target.value))}
          type="text"
          placeholder=" Search City"
        />
        <div
          onClick={() => dispatch(HanndleCityDropDown())}
          className={style.btnWrapper}
        >
          {!dropDown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </div>
      </div>
      {dropDown && (
        <div className=" max-h-[500px] w-[20rem] bg-[#202b3c] overflow-y-scroll rounded-[10px] flex flex-col  py-2">
          {cityData.map((val: any) => {
            return (
              <div
                className="hover:bg-[#0b121e] w-[100%] text-gray-300 px-10 "
                key={val.city + val.country}
              >
                {val.city}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Cities
