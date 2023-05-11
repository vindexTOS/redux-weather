import React from 'react'
import { useSelector } from 'react-redux'
import { test } from '../../redux/features/test'
import GeneralDisplayComponent from './GeneralDisplayComponent'
import ForcastComponent from './ForcastComponent'

import AirComponent from './AirComponent'
const Display = () => {
  //   const { data, loading, error } = useSelector(
  //     (state: any) => state.dataFetch.data,
  //   )

  const style = {
    section: `w-[100%] h-[100%]   flex flex-col gap-3  top-40   `,
  }

  return (
    <section className={style.section}>
      <GeneralDisplayComponent />
      <ForcastComponent />
      <AirComponent />
    </section>
  )
}

export default Display
