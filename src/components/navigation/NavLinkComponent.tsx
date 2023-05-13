import React, { FC } from 'react'
import { NavIconsList } from './SideNav'
import { useNavigate, useLocation } from 'react-router-dom'
type NavLinkProps = {
  data: NavIconsList
}
const NavLinkComponent: FC<NavLinkProps> = ({ data }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { Icon, title, id } = data

  const style = {
    mainDiv: `flex flex-col items-center justify-center gap-2 cursor-pointer   `,
    icons: `text-[1.2rem]  ${
      location.pathname === id ? ' text-blue-400' : 'text-gray-400'
    }`,
    p: ` ${location.pathname === id ? ' text-blue-300' : 'text-gray-400'}`,
  }
  return (
    <div onClick={() => navigate(id)} className={style.mainDiv}>
      <Icon className={style.icons} />
      <p className={style.p}>{title}</p>
    </div>
  )
}

export default NavLinkComponent
