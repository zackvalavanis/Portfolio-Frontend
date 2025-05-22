import { Typography } from '@mui/material';
import './Tech.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export function Tech() {
  return (
    <div>
      <div className="tech-container">
        <h1 className="main-header">Skills & Technologies</h1>
        <div className="container2">

          {/* Frontend Section */}
          <h1 className="section-title">Frontend</h1>
          <div className="card-wrapper">
            {[
              {
                name: 'JavaScript',
                image: '/Images/JavaScript-logo.png',
                link: 'https://www.javascript.com/',
              },
              {
                name: 'React.js',
                image: '/Images/React.png',
                link: 'https://react.dev/',
              },
              { 
                name: 'HTML', 
                image: '/Images/html logo.png',
                link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'

              },
              { 
                name: 'CSS', 
                image: '/Images/css.png',
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
              },
              {
                name: 'TypeScript',
                image: '/Images/typescript.png',
                link: 'https://www.typescriptlang.org/',
              },
              {
                name: 'Tailwind',
                image: '/Images/free-tailwind-icon@2x.png',
                link: 'https://tailwindcss.com/',
              },
              {
                name: 'Bootstrap',
                image: '/Images/Bootstrap_logo.svg.png',
                link: 'https://getbootstrap.com/',
              },
              {
                name: 'Material UI',
                image: '/Images/material-ui-icon-2048x1626-on580ia9.png',
                link: 'https://mui.com/material-ui/',
              }
            ].map(({ name, image, link }) => (
              <Link to={link} key={name} className="card-link">
                <Card className="card-tech" variant="outlined">
                  <CardContent className="card-content">
                    <CardMedia className="card-media" image={image} title={`${name} Logo`} />
                    <Typography variant="h6" component="div" className="card-text">
                      {name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Backend Section */}
          <h1 className="section-title">Backend</h1>
          <div className="card-wrapper">
            {[
              {
                name: 'Ruby on Rails',
                image: '/Images/images.png',
                link: 'https://rubyonrails.org/',
              },
              {
                name: 'Python',
                image: '/Images/2945099.webp',
                link: 'https://www.python.org/',
              },
            ].map(({ name, image, link }) => (
              <Link to={link} key={name} className="card-link">
                <Card className="card-tech" variant="outlined">
                  <CardContent className="card-content">
                    <CardMedia className="card-media" image={image} title={`${name} Logo`} />
                    <Typography variant="h6" component="div" className="card-text">
                      {name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Infrastructure Section */}
          <h1 className="section-title">Infrastructure</h1>
          <div className="card-wrapper">
            {[
              {
                name: 'PostgreSQL',
                image: '/Images/Postgresql_elephant.svg.png',
                link: 'https://www.pgedge.com/products/what-is-pgedge',
              },
              {
                name: 'Docker',
                image: '/Images/docker.jpg',
                link: 'https://www.docker.com/',
              },
            ].map(({ name, image, link }) => (
              <Link to={link} key={name} className="card-link">
                <Card className="card-tech" variant="outlined">
                  <CardContent className="card-content">
                    <CardMedia className="card-media" image={image} title={`${name} Logo`} />
                    <Typography variant="h6" component="div" className="card-text">
                      {name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
