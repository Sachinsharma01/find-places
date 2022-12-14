import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/NavLinks.css'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">YOUR PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks