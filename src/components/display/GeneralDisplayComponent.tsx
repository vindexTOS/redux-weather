import React from 'react'
import Sun from '../../assets/icons/sun.png'
import { test } from '../../redux/features/test'
import { useSelector } from 'react-redux'
import { WeatherIconsObj, iconMap } from '../../assets/icons/WeatherIcons'
const GeneralDisplayComponent = () => {
  const style = {
    mainDiv: `    h-[27.6%] flex  items-center justify-between px-10 w-[100%] rounded-[20px]`,

    numDiv: `flex flex-col justify-around gap-10 `,
    mainHeader: `text-white text-[2rem] font-medium `,
  }
  const data = useSelector((state: any) => state.dataFetch.data)

  if (data && data.list) {
    const { list } = data
    const main = list[0].weather[0].main

    const weatherIcon =
      iconMap[main as keyof typeof iconMap] || WeatherIconsObj.sun

    return (
      <div className={style.mainDiv}>
        <div className={style.numDiv}>
          <div className="flex items-start justify-center flex-col">
            <h1 className={style.mainHeader}>{data.city.name}</h1>
            <p className="text-gray-400">{list[0].weather[0].description}</p>
          </div>
          <div>
            <h1 className="text-[3rem] text-white font-bold">
              {(list[0]?.main?.temp - 273.15).toFixed(2)}°
            </h1>
          </div>
        </div>
        <div>
          <img className="w-[9rem]" src={weatherIcon} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        SOn
        <button onClick={() => console.log(data)}>CLICK</button>
      </div>
    )
  }
}

export default GeneralDisplayComponent

// Clear
// Clouds
// Drizzle
// Dust
// Fog
// Haze
// Mist
// Rain
// Sand
// Smoke
// Snow
// Squall
// Thunderstorm
// Tornado
