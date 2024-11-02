import './Header.css';

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="#home" className='logo'>ZV</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className='nav-link'>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className='nav-link'>
                My Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className='nav-link'>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className='nav-link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
