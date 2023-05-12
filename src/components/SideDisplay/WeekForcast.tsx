import React from 'react'
import { useSelector } from 'react-redux'
import { iconMap, WeatherIconsObj } from '../../assets/icons/WeatherIcons'
const WeekForcast = () => {
  const data = useSelector((state: any) => state.dataFetch.data)

  if (data && data.list) {
    const { list } = data

    const groupedData = list.reduce((acc: any, val: any) => {
      const timestamp = val.dt
      const date = new Date(timestamp * 1000)
      const day = date.getDay()

      if (!acc[day]) {
        acc[day] = val
      }

      return acc
    }, [])
    return (
      <div className="flex flex-col">
        {/* <h1 onClick={() => console.log(groupedData)}>Click</h1> */}
        {groupedData.map((val: any) => {
          const timestamp = val.dt
          const date = new Date(timestamp * 1000)
          const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ]
          const dayOfWeekName = daysOfWeek[date.getDay()]
          const main = val.weather[0].main
          const weatherIcon =
            iconMap[main as keyof typeof iconMap] || WeatherIconsObj.sun
          return (
            <div
              className="flex flex-col items-center justify-between px-6  "
              key={val.dt}
            >
              <div className="flex items-center justify-between  h-[100px]">
                <h1 className="text-[1.2rem] text-gray-400 w-[6rem]">
                  {dayOfWeekName}
                </h1>
                <div className="flex w-[7rem] items-center justify-between">
                  <img className="w-[40px]" src={weatherIcon} />{' '}
                  <h1 className="text-white">{main}</h1>
                </div>
              </div>
              <div className="w-[90%] h-[1px]   bg-gray-600"></div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default WeekForcast
