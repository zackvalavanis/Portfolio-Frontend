import './Blog.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Blog () { 

  return ( 
    <div className='card1'>
      <Card sx={{ height: 475, maxWidth: 1000, margin: 10, justifyContent: 'Center'}}>
        <CardContent>
      <Typography variant='h5' gutterBottom sx={{ color: 'text.primary', fontSize: 20}}>
          January 9th, 2025
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Blog Post 1</Typography>
        <Typography variant="body2">
          <p>
            Today, I made significant progress on deploying my portfolio website. I’m excited about this next step, as it represents a milestone in showcasing my work. I’ve laid out a solid foundation for my portfolio and am now focusing on polishing its design and functionality. Within the next month, I’m aiming to deploy my first project to the portfolio, and I’m dedicating time and effort to ensure that everything is ready for this release.
          </p>
          <p>
            To make the portfolio stand out, I’ve been working diligently on the front-end, using Material-UI to create a sleek, modern interface. The clean and responsive design is essential for making a strong first impression, so I’ve been customizing the layout and adding interactive elements where necessary. In addition to Material-UI, I’ve been using HTML and CSS to refine the overall look and feel, ensuring that it’s visually appealing and functional across different screen sizes.
          </p>
          <p>
            I’m focused on creating a smooth user experience while highlighting my projects and skills effectively. This process involves not only integrating the design elements but also making sure that the content is organized in a way that’s easy for potential employers or collaborators to navigate. The goal is to ensure that my portfolio reflects my technical abilities while also being a visually compelling representation of my work.

          </p>
          <p>
            Overall, it’s been a productive day, and I’m eager to continue making progress and adding projects to the portfolio as I complete them. 
          </p>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
      </Card>
    </div>
  )
}