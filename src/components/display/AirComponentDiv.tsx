import React, { FC } from 'react'
import { IconType } from 'react-icons'

type AirComponentProp = {
  Icon: IconType
  title: string
  num: number
  unit: string
}

const AirComponentDiv: FC<AirComponentProp> = ({ Icon, title, num, unit }) => {
  return (
    <div className="flex flex-col items-center  ">
      <div className="flex items-center justify-center gap-2">
        <Icon className="text-white text-[2rem] " />
        <h1 className="text-gray-400">{title}</h1>
      </div>
      <p className="text-gray-400  text-[1.6rem]">
        {num} {unit}
      </p>
    </div>
  )
}

export default AirComponentDiv
