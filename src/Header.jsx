import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


export function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to={location.pathname === '/MyInterests' ? '/' : '/'} className="logo">
          ZV
        </NavLink>

        {/* Hamburger Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to={location.pathname === '/MyInterests' ? '/' : '/'} 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Home
              </NavLink>
            </li>

            {/* Conditional Links */}
            {location.pathname !== '/MyInterests' && (
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  My Projects
                </a>
              </li>
            )}
            {location.pathname !== '/MyInterests' && (
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About Me
                </a>
              </li>
            )}
            <li className="nav-item">
              <NavLink 
                to="/MyInterests" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                My Interests
              </NavLink>
            </li>
            {location.pathname !== '/MyInterests' && (
              <li className="nav-item">
                <a href="#contact" className="nav-link">
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
