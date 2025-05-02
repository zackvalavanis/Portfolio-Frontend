import './ProjectsPage.css';
import { Link } from 'react-router-dom'

export function ProjectsPage() {
  return (
    <div className='whole-page'>
      <h1 className='title-1'>My Projects</h1>

      <div className="projects">
        {/* Flex container for project cards */}
          <div className="project-item">
            <h2 className='header-project-zen'>Restaurant Website</h2>
            <Link to='https://zen-rolls-flm56gin3-zackvalavanis-projects.vercel.app/'>
              <img
                className='image-small'
                src='/Images/Screenshot 2025-03-28 at 11.33.05 AM.png'
                alt='Zen Rolls'
              />
            </Link>
            <p>
              <strong>Zen Rolls</strong> A restaurant-themed website built with a Ruby on Rails backend and a React, JavaScript, and TypeScript frontend...
            </p>
            <p className='title-zen'><strong>Tech Stack:</strong></p>
            <ul className='list'>
              <li><strong>Backend:</strong> Ruby on Rails</li>
              <li><strong>Frontend:</strong> JavaScript, TypeScript, React</li>
              <li><strong>Integrations:</strong> Stripe</li>
            </ul>
            <div className='frontend-backend'>
              <a className='frontend' href='https://github.com/zackvalavanis/zenRolls-Frontend'>Frontend Code</a>
              <a className='backend' href='https://github.com/zackvalavanis/Zen_Rolls_API'>Backend Code</a>
            </div>
          </div>

          <div className="project-item">
            <h2 className='header-project-2'>HTML & CSS</h2>
            <Link to='https://zackvalavanis.github.io/Webpage-Project/'>
              <img
                className='image-small'
                src='/Images/Screenshot 2025-05-02 at 9.24.51 AM.png'
                alt='web-design-image'
              />
            </Link>
            <p>
              <strong>Zen Rolls</strong> A restaurant-themed website built with a Ruby on Rails backend and a React, JavaScript, and TypeScript frontend...
            </p>
            <p className='title-zen'><strong>Tech Stack:</strong></p>
            <ul className='list'>
              <li><strong>Backend:</strong> N/A</li>
              <li><strong>Frontend:</strong> HTML and CSS       </li>
              <li><strong>Integrations:</strong> N/A</li>
            </ul>
            <div className='frontend-backend'>
              <a className='frontend' href='https://github.com/zackvalavanis/zenRolls-Frontend'>Frontend Code</a>
            </div>
          </div>
        </div>
      </div>
  );
}