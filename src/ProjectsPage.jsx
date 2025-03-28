import './ProjectsPage.css';
import { Link } from 'react-router-dom'

export function ProjectsPage() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      
      {/* Link to the deployed project */}
      <div className="project-item">
        <h2 className='header-project-zen'>Zen Rolls</h2>
        <Link 
          to='https://zen-rolls-flm56gin3-zackvalavanis-projects.vercel.app/'>
          <img 
            className='image-zen'
            src='/Images/Screenshot 2025-03-28 at 11.33.05 AM.png'>
          </img>
        </Link>
        <p>
          <strong>Zen Rolls</strong> A restaurant-themed website built with a Ruby on Rails backend and a React, JavaScript, and TypeScript frontend. The app allows users to experience a fully developed website for a mock sushi restaurant, featuring a Stripe integration that simulates order placement. Users can browse a dynamic menu, add items to their cart, and go through a seamless checkout experience. The app also incorporates responsive design for mobile compatibility and interactive UI elements to enhance the user experience.
        </p>  
        <p className='title-zen'><strong>Tech Stack:</strong></p>  
        <ul className='list'>  
          <li><strong>Backend:</strong> Ruby on Rails</li>  
          <li><strong>Frontend:</strong> JavaScript, TypeScript, React</li>  
          <li><strong>Integrations:</strong> Stripe</li>  
        </ul>  
      </div>
    </div>
  );
}
