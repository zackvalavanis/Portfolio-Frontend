import './ProjectsPage.css';
import { Link } from 'react-router-dom'

export function ProjectsPage() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      
      {/* Link to the deployed project */}
      <div className="project-item">
        <h2 className='header-project-zen'>Zen Rolls Sushi Website</h2>
        <Link 
          to='https://zen-rolls-flm56gin3-zackvalavanis-projects.vercel.app/'>
          <img 
            className='image-zen'
            src='/Images/Screenshot 2025-03-28 at 11.33.05 AM.png'>
          </img>
        </Link>
        <p>
          <strong>Zen Rolls</strong> is a restaurant-themed website I built to showcase my web development skills.  
        </p>  
        <p><strong>Tech Stack:</strong></p>  
        <ul>  
          <li><strong>Backend:</strong> Ruby on Rails</li>  
          <li><strong>Frontend:</strong> JavaScript, TypeScript, React</li>  
          <li><strong>Integrations:</strong> Stripe</li>  
        </ul>  
      </div>
    </div>
  );
}
