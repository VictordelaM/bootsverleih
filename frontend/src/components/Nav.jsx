import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
        <Link to="/booking"><li>BOOKING</li></Link>
        <Link to="/admin"><li>ADMIN</li></Link>
        <Link to="/gallery"><li>BOOTGALLERY</li></Link>
    </ul>
  )
}

export default Nav