import React from 'react'
import windIcon from '../../assets/icons/wind.png'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { AiOutlineBars } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { RiListSettingsFill } from 'react-icons/ri'
import { IconType } from 'react-icons'
import NavLinkComponent from './NavLinkComponent'

export type NavIconsList = {
  Icon: IconType
  title: string
  id: string
}

const SideNav = () => {
  const style = {
    nav: `bg-[#202b3c] h-[100%] w-[5.5rem] rounded-[20px]    items-center flex flex-col`,
    iconDiv: `bg-gray-700 h-[3rem] w-[3rem] rounded-[14px]  flex items-center justify-center `,
    icon: `w-[40px]`,
    navigator: `h-[50%] gap-8   w-[100%] flex flex-col items-center justify-start py-10 `,
    navIcons: ``,
  }

  const navIconList: NavIconsList[] = [
    { Icon: TiWeatherPartlySunny, title: 'Weather', id: 'weather' },
    { Icon: AiOutlineBars, title: 'Cities', id: 'city' },
    { Icon: FiMapPin, title: 'Map', id: 'map' },
    { Icon: RiListSettingsFill, title: 'Settings', id: 'settings' },
  ]

  return (
    <nav className={style.nav}>
      <section className={style.navigator}>
        <div className={style.iconDiv}>
          <img className={style.icon} src={windIcon} />
        </div>
        {navIconList.map((val: NavIconsList) => (
          <NavLinkComponent key={val.id} data={val} />
        ))}
      </section>
    </nav>
  )
}

export default SideNav
