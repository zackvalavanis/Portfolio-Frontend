import './ProjectsPage.css';

export function ProjectsPage() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      
      {/* Link to the deployed project */}
      <div className="project-item">
        <h2>Calendar</h2>
        <p>Check out my latest project:</p>
        <div className='linked-items'>
        <a 
          href="https://capstone-to-do-frontend-a91vy1orq-zackvalavanis-projects.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Website
        </a>
        <a 
          href='https://github.com/zackvalavanis/Capstone_To_Do'
          target='blank'
          rel="noopener noreferrer"
        >
          Backend Code
        </a>
        <a
          href='https://github.com/zackvalavanis/To_Do_Frontend'
          target='blank'
          rel="noopener noreferrer"
        >
          Frontend Code
        </a>
        {/* Project Preview - Image */}
        <img 
          src="/Images/Calendar.jpg" /* Ensure the path is correct */
          alt="Calendar Project Preview"
        />
        </div>
      </div>
    </div>
  );
}
