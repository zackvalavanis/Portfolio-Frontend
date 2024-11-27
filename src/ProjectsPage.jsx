import './ProjectsPage.css';

export function ProjectsPage() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      
      {/* Link to the deployed project */}
      <div className='project-item'>
        <h2>Calendar</h2>
        <p>Check out my latest project:</p>
        <a href="https://capstone-to-do-frontend-a91vy1orq-zackvalavanis-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
          View Project
        </a>

        {/* Optional: Project Preview (You can use an iframe or an image thumbnail) */}
        <iframe
          src="https://capstone-to-do-frontend-a91vy1orq-zackvalavanis-projects.vercel.app/"
          width="600"
          height="400"
          title="Project Preview"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
