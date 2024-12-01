import './Header.css';
import { NavLink, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to={location.pathname === '/MyInterests' ? '/' : "/"} className='logo'>ZV</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={location.pathname === '/Myinterests' ? "/" : '/'} className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>
                Home
              </NavLink>
            </li>
            {location.pathname !== '/MyInterests' && (
            <li className="nav-item">
              <a href='#projects' className='nav-link'>
                My Projects
              </a>
            </li>
            )}
            {location.pathname !== '/MyInterests' && ( 
            <li className="nav-item">
              <a href='#about' className='nav-link'>
                About Me
              </a>
            </li>
            )}
            <li className='nav-item'>
              <NavLink to='/MyInterests' className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>
              My Interests
              </NavLink>
            </li>
            {location.pathname !== '/MyInterests' && ( 
            <li className="nav-item">
              <a href="#contact" className='nav-link'>
                Contact
              </a>
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
