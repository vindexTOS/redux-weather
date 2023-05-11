import React from 'react'
import { test } from '../../redux/features/test'
import Sun from '../../assets/icons/sun.png'
const ForcastComponent = () => {
  const style = {
    mainDiv: `bg-[#202b3c] h-[30%]   w-[100%] rounded-[20px] gap-5  flex flex-col justify-center   `,
  }
  const testObk = [
    { time: '6:00am', img: Sun, c: 25, id: 1 },
    { time: '6:00am', img: Sun, c: 25, id: 2 },
    { time: '6:00am', img: Sun, c: 25, id: 3 },
    { time: '6:00am', img: Sun, c: 25, id: 4 },
    { time: '6:00am', img: Sun, c: 25, id: 5 },
    { time: '6:00am', img: Sun, c: 25, id: 6 },
  ]
  return (
    <div className={style.mainDiv}>
      <h1 className="text-gray-400 text-[1rem] ml-10">TODAY'S FORCAST</h1>

      <div className="flex w-[100%] justify-around  ">
        {testObk.map((val: any, index: number) => (
          <div
            className={`w-[20%] flex flex-col ${
              index !== testObk.length - 1 && 'border-r-[1px] border-gray-600 '
            }  items-center justify-center gap-2 `}
            key={val.id}
          >
            <p className="text-gray-400 text-[1.2rem] ">{val.time}</p>
            <img src={val.img} className="w-[40px]" />
            <h1 className="text-[1.4rem] text-white">{val.c}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForcastComponent
