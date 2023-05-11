import React from 'react'
import AirComponentDiv from './AirComponentDiv'
import { CiTempHigh } from 'react-icons/ci'
import { SiWindicss } from 'react-icons/si'
import { BsDropletFill } from 'react-icons/bs'
const AirComponent = () => {
  const style = {
    mainDiv: `bg-[#202b3c] h-[31%]  w-[100%] rounded-[20px] p-5 gap-5 flex flex-col `,
  }
  return (
    <div className={style.mainDiv}>
      <div className="flex justify-between px-4 ">
        <h1 className="text-gray-400 ext-[14px]">AIR CONDITIONS</h1>
        <button className="bg-blue-500 px-3 text-white py-1 rounded-[50px]">
          SEE MORE
        </button>
      </div>
      <section className="flex w-[100%] justify-start gap-60">
        <div className="flex flex-col gap-10">
          <AirComponentDiv title={'Real Feel'} num={30} Icon={CiTempHigh} />
          <AirComponentDiv title={'humidity'} num={0} Icon={BsDropletFill} />
        </div>
        <div className="flex flex-col gap-10">
          <AirComponentDiv title={'Wind'} num={0.2} Icon={SiWindicss} />
          <AirComponentDiv title={'SOMTHING'} num={22} Icon={CiTempHigh} />
        </div>
      </section>
    </div>
  )
}

export default AirComponent
