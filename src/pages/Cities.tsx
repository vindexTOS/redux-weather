import React, { Reducer, useEffect } from 'react'
import { countryAPI } from '../redux/features/countryThunk'
import { getCountry } from '../redux/features/slices/countryFetch'
import { callWeather } from '../redux/features/weatherThunk.ts'
import { lookUp } from '../redux/features/slices/cityFindSlice.ts'
import CityWeather from '../components/cities/cityWeather.tsx'
import FakeFlag from '../assets/photoUtils/fakeFlag.avif'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
  SearchCity,
  stateInterFace,
  HanndleCityDropDown,
} from '../redux/features/slices/cityJsonDataSlice'
import { ThunkDispatch } from '@reduxjs/toolkit'

const Cities = () => {
  const cityData = useSelector(
    (state: stateInterFace | any) => state.citySearch.filteredCitys,
  )
  const dropDown = useSelector(
    (state: stateInterFace | any) => state.citySearch.cityDropDown,
  )
  const countryString = useSelector(
    (state: string | any) => state.countryFetch.coutry,
  )
  const countryData = useSelector(
    (state: any) => state.countryFetch.countryData,
  )
  const data = useSelector((state: any) => state.dataFetch.data)
  const city = useSelector((state: any) => state.cityFinder.city)

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const style = {
    mainDiv: `absolute left-40 top-20  gap-10 flex  items-center `,
    inputDiv: `bg-[#202b3c]  p-2 w-[20rem] flex items-center justify-between rounded-t-[10px] rounded-b-[6px]`,
    btnWrapper: `cursor-pointer text-white text-[1.1rem]`,
  }

  useEffect(() => {
    dispatch(countryAPI(String(countryString)))
    dispatch(callWeather(city))
  }, [countryString, city])

  return (
    <div className={style.mainDiv}>
      <div className="h-[600px] flex flex-col relative top-20  ">
        <h1 onClick={() => console.log(countryData)}>CLICK TO SEE RESULTS</h1>

        <div className={style.inputDiv}>
          <input
            className="bg-transparent outline-none text-white"
            onChange={(e) => dispatch(SearchCity(e.target.value))}
            type="text"
            placeholder={city ? city : ' Search City'}
          />
          <div
            onClick={() => dispatch(HanndleCityDropDown())}
            className={style.btnWrapper}
          >
            {!dropDown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </div>
        </div>
        {dropDown && (
          <div className=" max-h-[500px] w-[20rem] top-20 bg-[#202b3c] overflow-y-scroll rounded-[10px] flex flex-col absolute  py-2">
            {cityData.map((val: any) => {
              return (
                <div
                  onClick={() => {
                    dispatch(lookUp(val.city)),
                      dispatch(getCountry(String(val.country)))
                  }}
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
      <div className="flex flex-col items-center gap-2  h-[100%]">
        <img
          className="w-[300px] h-[200px] "
          src={countryData?.flags ? countryData?.flags[1] : FakeFlag}
        />
        <CityWeather />
      </div>
    </div>
  )
}

export default Cities
