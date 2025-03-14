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
        <NavLink to={location.pathname === '/Blog' ? '/' : '/'} className="logo">
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
                to={location.pathname === '/Blog' ? '/' : '/'} 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Home
              </NavLink>
            </li>

            {/* Conditional Links */}
            {location.pathname !== '/Blog' && (
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  My Projects
                </a>
              </li>
            )}
            {location.pathname !== '/Blog' && (
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About Me
                </a>
              </li>
            )}
            {location.pathname !== '/Blog' && (
              <li className="nav-item">
                <a href="#technology" className="nav-link">
                  Technology
                </a>
              </li>
            )}
            <li className="nav-item">
              <NavLink 
                to="/Blog" 
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Blog
              </NavLink>
            </li>
            {location.pathname !== '/Blog' && (
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
