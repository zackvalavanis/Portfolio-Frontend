import './Header.css'
import { NavLink } from 'react-router-dom'

export function Header () { 
  return ( 
    <div className='header'>
      <div className='header-center'>
      <NavLink to='/'  className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
      <NavLink to='/Projects'  className={({ isActive }) => (isActive ? 'active-link' : '')}>My Projects</NavLink>
      <NavLink to='/About'  className={({ isActive }) => (isActive ? 'active-link' : '')}>About Me</NavLink>
      <NavLink to='/contact'  className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact</NavLink>
      </div>
    </div>
  )
}