import { sidebarLinks } from '@/constants/general.const'
import React from 'react'
import { Link } from 'react-router-dom'

const Slidebar = () => {
  return (
    <div className="px-4 py-6 border-r-2 ">
      {sidebarLinks.map(link => (
        <SidebarLink
          // isActive={pathname === link.path}
          key={link.title}
          link={link}
        ></SidebarLink>
      ))}
    </div>
  )
}
function SidebarLink({ link }) {
  return (
    <Link
      to={link.path}
      className={`px-6 py-4 gap-5 flex items-center gap-c10 font-bold text-base text-gray80 rounded-xl  `}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  )
}

export default Slidebar
