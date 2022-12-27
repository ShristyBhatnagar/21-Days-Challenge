import React from 'react'
import './Header.css'
import { MdHome } from "react-icons/md";
import { TbFriends } from "react-icons/tb";
import { RxLinkedinLogo } from "react-icons/rx";
import { ImSearch } from "react-icons/im";
import { GiSuitcase } from "react-icons/gi";
import { FiMessageSquare } from "react-icons/fi";
import { TfiBell } from "react-icons/tfi";
import { VscAccount, VscGripper, VscPlay } from "react-icons/vsc";



const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='LSide'>
          <RxLinkedinLogo size={30} className="Logo" />
          <input type={"text"} placeholder="Search" className='typesearch'/><ImSearch size={30} className="search"/>
          
          </div>
          <div className="Rside">
          <a href='#'> <div className='ico'><MdHome size={30}/>Home</div></a>
          <a href='#'> <div className='ico'><TbFriends size={30} />My Network</div></a>
          <a href='#'> <div className='ico'><GiSuitcase size={30} />Jobs</div></a>
          <a href='#'>  <div className='ico'><FiMessageSquare size={30} />Messages</div></a>
          <a href='#'><div className='ico'><TfiBell size={30} />Notification</div></a>
          <a href='#'> <div className='ico'><TfiBell size={30} />Notification</div></a>
          <a href='#'> <div className='ico'><VscAccount size={30} />Me</div></a>
          <a href='#'><div className='ico'><VscGripper size={30} />Work</div></a>
          <a href='#'> <div className='ico'><VscPlay size={30} />Learning</div></a></div>
            </div>

    </>


  )
}

export default Header