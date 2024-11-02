import './AboutMe.css';

export function AboutMe() {
  return (
    <div className="about-me-container">
      <div className='left-section'>
        <img src="https://media.licdn.com/dms/image/v2/D5603AQFrVp2Q-bSEew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702063595689?e=1735776000&v=beta&t=EflgIjIMgEL7fHiefDT2lUcTlOl2m_10tZ276r0TwTk" className="img-thumbnail"></img>
      </div> 

      <h1 className="name-title">Zack Valavanis</h1>
      <h2 className="section-title">About Me</h2>
      <div className='writing'>
      <p>
        I'm Zack Valavanis, an aspiring software engineer with a robust background in finance and a knack for creating
        data-driven solutions that drive meaningful results. Based in Chicago, I have over four years of experience
        managing high-value portfolios, analyzing financial data, and implementing efficiency improvements that have
        consistently delivered value to both clients and stakeholders. My transition into full-stack software
        engineering is driven by my passion for developing innovative solutions and enhancing processes through technology.
      </p>
      <p>
        Currently, I’m building my technical skills in software development, particularly in Ruby on Rails, React,
        JavaScript, and Python, while completing a coding bootcamp with Actualize. This hands-on training has
        strengthened my foundation in full-stack development and enabled me to tackle real-world challenges by merging
        finance and technology. I am enthusiastic about leveraging my technical knowledge to develop applications that
        streamline workflows, reduce operational costs, and enhance user experience.
      </p>
      <p>
        Throughout my career, I have developed core competencies in business systems, operational efficiency, and data
        analysis, which I’m excited to apply in a tech-driven role. From managing a $1.7 billion portfolio at Neuberger
        Berman to orchestrating cost savings of $200,000 at Accenture, I have a proven record of blending analytical
        insights with actionable strategies. This experience, coupled with my newly acquired software engineering skills,
        allows me to bring a unique perspective to projects, focusing on both technical execution and strategic impact.
      </p>
      </div>
      <h3>Core Competencies:</h3>
      <ul>
        <li>Business Systems & Data Analytics</li>
        <li>Full-Stack Development</li>
        <li>Project & Portfolio Management</li>
        <li>Efficiency Improvements & Process Optimization</li>
        <li>Risk Mitigation & Stakeholder Collaboration</li>
      </ul>
      <h3>Technical Skills:</h3>
      <p>
        <strong>Languages / Frameworks:</strong> Ruby, Rails, JavaScript, React.js, Node.js, Python, HTML/CSS
      </p>
      <p>
        <strong>Data / Tools:</strong> PostgreSQL, Salesforce, Tableau, Office 365, SAP
      </p>
      <p>
        I’m always open to new opportunities that allow me to apply my financial and technical expertise to help
        organizations solve complex problems, improve operational processes, and drive success in the evolving digital
        landscape.
      </p>
    </div>
  );
}
