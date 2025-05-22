import './ProjectsPage.css';

export function ProjectsPage() {
  return (
    <div className='whole-page'>
      <h1 className='title-1'>My Projects</h1>

      <div className="projects">

        {/* Project: Zen Rolls */}
        <div className="project-item">
          <h2 className='header-project'>Restaurant Website</h2>
          <a
            href='https://zen-rolls-flm56gin3-zackvalavanis-projects.vercel.app/'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <img
              className='image-small'
              src='/Images/Screenshot 2025-03-28 at 11.33.05 AM.png'
              alt='Zen Rolls Screenshot'
            />
          </a>
          <p>
            <strong>Zen Rolls</strong> is a modern, restaurant-themed web application designed to simulate a food ordering experience. It features a Ruby on Rails backend that handles API requests and data management, and a responsive frontend built with React, JavaScript, and TypeScript.
          </p>
          <div className='stack-section'>
            <p className='title-zen'><strong>Tech Stack:</strong></p>
            <ul className='list'>
              <li><strong>Backend:</strong> Ruby on Rails</li>
              <li><strong>Frontend:</strong> JavaScript, TypeScript, React</li>
              <li><strong>Integrations:</strong> Stripe</li>
            </ul>
          </div>
          <div className='frontend-backend two-buttons'>
            <a className='frontend' href='https://github.com/zackvalavanis/zenRolls-Frontend' target='_blank' rel='noopener noreferrer'>Frontend Code</a>
            <a className='backend' href='https://github.com/zackvalavanis/Zen_Rolls_API' target='_blank' rel='noopener noreferrer'>Backend Code</a>
          </div>
        </div>

        {/* Project: HTML & CSS Web Design */}
        <div className="project-item">
          <h2 className='header-project'>HTML & CSS</h2>
          <a
            href='https://zackvalavanis.github.io/Webpage-Project/'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <img
              className='image-small'
              src='/Images/Screenshot 2025-05-02 at 9.24.51 AM.png'
              alt='Web Design Screenshot'
            />
          </a>
          <p>
            <strong>HTML & CSS Web Design</strong> is a simple, responsive landing page built to demonstrate frontend skills using only HTML and CSS.
          </p>
          <div className='stack-section'>
            <p className='title-zen'><strong>Tech Stack:</strong></p>
            <ul className='list'>
              <li><strong>Backend:</strong> N/A</li>
              <li><strong>Frontend:</strong> HTML, CSS</li>
              <li><strong>Integrations:</strong> N/A</li>
            </ul>
          </div>
          <div className='frontend-backend'>
            <a className='frontend-button' href='https://github.com/zackvalavanis/Webpage-Project' target='_blank' rel='noopener noreferrer'>Frontend Code</a>
          </div>
        </div>

      </div>
    </div>
  );
}
