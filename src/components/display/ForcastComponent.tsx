import React from 'react'
import { test } from '../../redux/features/test'
import Sun from '../../assets/icons/sun.png'
import { useSelector } from 'react-redux'
import { WeatherIconsObj, iconMap } from '../../assets/icons/WeatherIcons'
const ForcastComponent = () => {
  const style = {
    mainDiv: `bg-[#202b3c] h-[30%]   w-[100%] rounded-[20px] gap-5  flex flex-col justify-center   `,
  }

  const data = useSelector((state: any) => state.dataFetch.data)
  if (data && data.list) {
    const { list } = data
    const cutList = list.slice(0, 6)
    return (
      <div className={style.mainDiv}>
        <h1 className="text-gray-400 text-[1rem] ml-10">TODAY'S FORCAST</h1>
        {/* <h1 onClick={() => console.log(cutList)}>CLICK ME</h1> */}
        <div className="flex w-[100%] justify-around  ">
          {cutList.map((val: any, index: number) => {
            const main = val.weather[0].main
            const weatherIcon =
              iconMap[main as keyof typeof iconMap] || WeatherIconsObj.sun

            return (
              <div
                className={`w-[20%] flex flex-col ${
                  index !== cutList.length - 1 &&
                  'border-r-[1px] border-gray-600 '
                }  items-center justify-center gap-2 `}
                key={val.dt}
              >
                {' '}
                {/* <h1 onClick={() => console.log(weather)}>CLICK ME</h1> */}
                <p className="text-gray-400 text-[1.2rem] ">
                  {val.dt_txt.slice(10, 16)}
                </p>
                <img src={weatherIcon} className="w-[40px]" />
                <h1 className="text-[1.1rem] text-gray-300 ">
                  {(val.main.temp - 273.15).toFixed(0)}°
                </h1>
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return <div>Load</div>
  }
}

export default ForcastComponent
