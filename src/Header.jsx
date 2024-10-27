import './Header.css'
import { Link } from 'react-router-dom'

export function Header () { 
  return ( 
    <div className='header'>
      <div className='header-center'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/About'>About Me</Link>
      </div>
    </div>
  )
}