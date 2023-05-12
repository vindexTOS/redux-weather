import React from 'react'
import { useSelector } from 'react-redux'
import AirComponentDiv from './AirComponentDiv'
import { CiTempHigh } from 'react-icons/ci'
import { SiWindicss } from 'react-icons/si'
import { BsDropletFill } from 'react-icons/bs'
const AirComponent = () => {
  const style = {
    mainDiv: `bg-[#202b3c] h-[31%]   w-[100%] rounded-[20px] px-5 gap-5 flex flex-col justify-around `,
  }
  const data = useSelector((state: any) => state.dataFetch.data)
  if (data && data.list) {
    const { list } = data
    const weather = list[0]
    return (
      <div className={style.mainDiv}>
        <div className="flex justify-between px-4   ">
          <h1 className="text-gray-400 ext-[14px]">AIR CONDITIONS</h1>
        </div>
        <section className="flex w-[100%] justify-between pr-60 pl-3 mb-10">
          <div className="flex justify-around w-[100%]">
            <AirComponentDiv
              title={'Real Feel'}
              num={Number((weather.main.feels_like - 273.15).toFixed(0))}
              unit="°"
              Icon={CiTempHigh}
            />
            <AirComponentDiv
              title={'Humidity'}
              num={weather.main.humidity.toFixed(0)}
              unit="%"
              Icon={BsDropletFill}
            />

            <AirComponentDiv
              title={'Wind'}
              num={weather.wind.speed}
              unit="km/h"
              Icon={SiWindicss}
            />
          </div>
        </section>
      </div>
    )
  } else {
    return <div>Load</div>
  }
}

export default AirComponent
