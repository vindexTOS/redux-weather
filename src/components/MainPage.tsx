import React from 'react'
import SideNav from './navigation/SideNav'
import SearchArea from './SearchArea'
import DisplayMain from './display/DisplayMain'
const MainPage = () => {
  const style = { section: `flex   gap-5 w-[100%]    relative` }
  return (
    <section className={style.section}>
      <SideNav />
      <SearchArea />
      <DisplayMain />
    </section>
  )
}

export default MainPage
