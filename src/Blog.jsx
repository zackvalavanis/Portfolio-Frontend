
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Blog () { 

  return ( 
    <div className='card1'>
      <Card sx={{ height: 575, maxWidth: 1000}}>
        <CardContent>
      <Typography variant='h5' gutterBottom sx={{ color: 'text.primary', fontSize: 20}}>
          January 9th, 2025
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Blog Post 1</Typography>
        <Typography variant="body2">
          well meaning and kindly.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
      </Card>
    </div>
  )
}