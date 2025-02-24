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
          <h1 className="frontend-tech">Frontend</h1>
          <div className="card-wrapper">
            <Link to="https://www.javascript.com/" style={{ textDecoration: 'none' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 30, width: 30, objectFit: 'contain' }}
                    image="public/Images/JavaScript-logo.png"
                    title="JavaScript Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    JavaScript
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            <Link to="https://react.dev/" style={{ textDecoration: 'none' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 30, width: 31, objectFit: 'contain' }}
                    image="public/Images/react.png"
                    title="React Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    React.js
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            <Link to="https://www.typescriptlang.org/" style={{ textDecoration: 'none' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 30, width: 30, objectFit: 'contain' }}
                    image="public/Images/typescript.png"
                    title="TypeScript Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    TypeScript
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            <Link to="https://tailwindcss.com/" style={{ textDecoration: 'none' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 25, width: 38, objectFit: 'contain' }}
                    image="public/Images/free-tailwind-icon@2x.png"
                    title="Tailwind Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    Tailwind
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            <Link to="https://getbootstrap.com/" style={{ textDecoration: 'none' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 25, width: 38, objectFit: 'contain' }}
                    image="public/Images/Bootstrap_logo.svg.png"
                    title="Bootstrap Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    Bootstrap
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            <Link to="https://mui.com/material-ui/?srsltid=AfmBOopdq-UNwFat3P5kN8_nhrtpKe1AengdDRZu4TNxhJAKb6lsM-f0" style={{ textDecoration: 'none' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 30, width: 35, objectFit: 'contain' }}
                    image="public/Images/material-ui-icon-2048x1626-on580ia9.png"
                    title="Material UI Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    Material UI
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Backend Section */}
          <h1 className="backend-tech">Backend</h1>
          <div className="card-wrapper">
            <Link to="https://rubyonrails.org/" style={{ textDecoration: 'none' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 30, width: 46, objectFit: 'contain' }}
                    image="public/Images/images.png"
                    title="Ruby on Rails Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    Ruby on Rails
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            <Link to="https://www.python.org/" style={{ textDecoration: 'none' }}>
              <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75, alignItems: 'center'}}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 30, width: 30, objectFit: 'contain' }}
                    image="public/Images/2945099.webp"
                    title="Python Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '15px' }}>
                    Python
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </div>

    {/* Infrastructure Section */}
          <h1 className="infrastructure">Infrastructure</h1>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Card className="card-tech" variant="outlined" sx={{ width: 250, height: 75 }}>
              <Link 
                to="https://www.pgedge.com/products/what-is-pgedge?utm_campaign=Cloud%20Developer%20Launch-Tier1&utm_source=google&utm_medium=ppc&utm_term=postgresql%20distributed%20database&utm_campaign=pgEdge+Cloud+Search+Tier+One+(Core+targets)&utm_source=google&utm_medium=ppc&hsa_acc=7527569200&hsa_cam=21265962872&hsa_grp=161582937826&hsa_ad=698780582065&hsa_src=g&hsa_tgt=kwd-452304563727&hsa_kw=postgresql%20distributed%20database&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s3axdTmOodd1xt_eSWAPMR00TNMHkds171r0YVOKE11BPZ1TAAuZooaAog-EALw_wcB" 
                style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <CardMedia
                    sx={{ height: 30, width: 30, objectFit: 'contain' }}
                    image="public/Images/Postgresql_elephant.svg.png"
                    title="PostGresSQL Logo"
                  />
                  <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', lineHeight: '15px', color: 'black' }}>
                    PostgreSQL
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
