import React, { FC } from 'react'
import { NavIconsList } from './SideNav'

type NavLinkProps = {
  data: NavIconsList
}
const NavLinkComponent: FC<NavLinkProps> = ({ data }) => {
  const { Icon, title, id } = data
  const style = {
    mainDiv: `flex flex-col items-center justify-center gap-2`,
    icons: `text-[1.2rem] text-gray-400`,
    p: `text-gray-400 `,
  }
  return (
    <div className={style.mainDiv}>
      <Icon className={style.icons} />
      <p className={style.p}>{title}</p>
    </div>
  )
}

export default NavLinkComponent
