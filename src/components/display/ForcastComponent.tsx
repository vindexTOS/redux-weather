import React from 'react'
import { test } from '../../redux/features/test'
const ForcastComponent = () => {
  const weather = test.weather[0].main
  const style = { mainDiv: `bg-[#202b3c] h-[30%]   w-[100%] rounded-[20px]` }
  return <div className={style.mainDiv}>h</div>
}

export default ForcastComponent
