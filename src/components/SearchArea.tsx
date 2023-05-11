import { ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { callWeather } from '../redux/features/weatherThunk.ts'
import { lookUp } from '../redux/features/slices/cityFindSlice.ts'
const SearchArea = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const city = useSelector((state: any) => state.cityFinder.city)
  const data = useSelector((state: any) => state.dataFetch.data)

  const style = {
    section: `bg-[#202b3c] w-[70%]  h-[50px] p-3 rounded-[10px]`,
    input: `outline-none bg-transparent w-[95%] text-gray-300`,
  }
  useEffect(() => {
    console.log(data)
  }, [city])

  return (
    <section className={style.section}>
      <input
        placeholder=" Search for cities"
        className={style.input}
        type="text"
        onChange={(e) => dispatch(lookUp(String(e.target.value)))}
      />
      {/* <button onClick={() => dispatch(callWeather(city))}>CALL API</button> */}
    </section>
  )
}

export default SearchArea
