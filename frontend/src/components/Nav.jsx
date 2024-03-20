import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <>
  <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <Link to="/booking"><li>BOOKING</li></Link>
            <Link to="/admin"><li>ADMIN</li></Link>
            <Link to="/gallery"><li>BOOTGALLERY</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
        </ul>
      </div>
    </div>

  </>
      )
}

export default Nav