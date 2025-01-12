import './Blog.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BlogCard = ({ date, title, content }) => (
  <Card
    sx={{
      height: 'auto',
      width: '100%',
      maxWidth: 900,
      margin: '20px auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box',
    }}
  >
    <CardContent>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: 'text.primary', fontSize: { xs: 16, sm: 20 } }}
      >
        {date}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{ color: 'text.secondary', mb: 1.5, fontSize: { xs: 14, sm: 18 } }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: { xs: 12, sm: 16 }, lineHeight: 1.5 }}
      >
        {content}
      </Typography>
    </CardContent>
    <CardActions></CardActions>
  </Card>
);

export function Blog() {
  const blogPosts = [
    {
      date: 'January 9th, 2025',
      title: 'Blog Post 1',
      content: `Today, I made significant progress on deploying my portfolio website. I’m excited about this next step, as it represents a milestone in showcasing my work. I’ve laid out a solid foundation for my portfolio and am now focusing on polishing its design and functionality. Within the next month, I’m aiming to deploy my first project to the portfolio, and I’m dedicating time and effort to ensure that everything is ready for this release.`,
    },
    {
      date: 'January 10th, 2025',
      title: 'Blog Post 2',
      content: `Continuing my progress on the portfolio website, I started integrating animations for a more dynamic user experience. I’m also working on adding accessibility features to ensure inclusivity for all users.`,
    },
  ];

  return (
    <div
      className="card-container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}
    >
      {blogPosts.map((post, index) => (
        <BlogCard key={index} date={post.date} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
