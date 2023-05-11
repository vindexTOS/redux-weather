import React from 'react'
import Display from './Display'

import SideDisplay from '../SideDisplay/SideDisplay'

const DisplayMain = () => {
  const style = {
    displaySection: `flex justify-around gap-5   absolute    w-[100%] h-[100%]    top-[4rem]  left-[7rem] `,
  }
  return (
    <section className={style.displaySection}>
      <Display />
      <SideDisplay />
    </section>
  )
}

export default DisplayMain
