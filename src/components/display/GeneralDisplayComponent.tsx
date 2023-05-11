import React from 'react'
import Sun from '../../assets/icons/sun.png'
import { test } from '../../redux/features/test'
const GeneralDisplayComponent = () => {
  const style = {
    mainDiv: `    h-[27.6%]  w-[100%] rounded-[20px]`,

    numDiv: `flex flex-col `,
    mainHeader: `text-white font-10`,
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.numDiv}>
        <div>
          <h1 className={style.mainHeader}>{test.name}</h1>
          <p>{test.weather[0].description}</p>
        </div>
        <div>
          <h1>{test.main.temp - 273.15}</h1>
        </div>
      </div>
    </div>
  )
}

export default GeneralDisplayComponent
