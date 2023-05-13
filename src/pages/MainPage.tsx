import React from 'react'
import SideNav from '../components/navigation/SideNav'
import SearchArea from '../components/SearchArea'
import DisplayMain from '../components/display/DisplayMain'
import { Outlet } from 'react-router-dom'
const MainPage = () => {
  const style = { section: `flex   gap-5 w-[100%]    relative` }
  return (
    <section className={style.section}>
      <SideNav />
      <SearchArea />
      <Outlet />
    </section>
  )
}

export default MainPage
