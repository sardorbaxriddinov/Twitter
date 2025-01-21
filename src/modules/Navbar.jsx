import React, { useState } from 'react'
import Logo from "../assets/images/logo.svg"
import { navbarList } from '../hooks/useRoute'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("Home")

  return (
    <div className='w-[22%] h-[100vh] border-r-[2px] border-slate-400 overflow-y-auto pt-[31px] '>
        <img className='mb-[49px]' src={Logo} alt="Site Logo" width={40} height={33} />
        <nav className='space-y-[30px]'>
            {navbarList.map(item => (
              <NavLink onClick={(e) => setActiveIcon(item.title)} className={"flex items-center gap-[20px]"} key={item.id} to={item.path}>
                {activeIcon == item.title ? item.activeIcon : item.icon}
                <span>{item.title}</span>
              </NavLink>
            ))}
        </nav>
        <Button title={"Tweet"} type={"button"} extraClass={'!w-[230px] !mt-[30px]'}/>
    </div>
  )
}

export default Navbar