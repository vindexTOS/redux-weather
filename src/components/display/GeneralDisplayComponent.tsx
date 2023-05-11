import React from 'react'
import Sun from '../../assets/icons/sun.png'
import { test } from '../../redux/features/test'
const GeneralDisplayComponent = () => {
  const style = {
    mainDiv: `    h-[27.6%] flex  items-center justify-between px-10 w-[100%] rounded-[20px]`,

    numDiv: `flex flex-col justify-around gap-10 `,
    mainHeader: `text-white text-[2rem] font-medium `,
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.numDiv}>
        <div className="flex items-start justify-center flex-col">
          <h1 className={style.mainHeader}>{test.name}</h1>
          <p className="text-gray-400">{test.weather[0].description}</p>
        </div>
        <div>
          <h1 className="text-[3rem] text-white font-bold">
            {test.main.temp - 273.15}°
          </h1>
        </div>
      </div>
      <div>
        <img className="w-[9rem]" src={Sun} />
      </div>
    </div>
  )
}

export default GeneralDisplayComponent
