import React from 'react'
import WeekForcast from './WeekForcast'

const SideDisplay = () => {
  const style = {
    section: ` h-[90%] bg-[#202b3c]  flex flex-col justify-center py-10  mr-[6rem] w-[35%] rounded-[30px]`,
  }
  return (
    <section className={style.section}>
      <h1 className="text-gray-400 px-10 ">7-DAY FORCAST</h1>
      <WeekForcast />
    </section>
  )
}

export default SideDisplay
