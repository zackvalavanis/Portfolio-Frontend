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
      date: 'January 19th, 2025',
      title: 'Blog Post 6',
      content: 'New Post'

    },
    { 
      date: 'January 18th, 2025',
      title: 'Blog Post 5',
      content: 'Today I worked on getting my backend (ruby on rails) deployed on Heroku. I was able to get everything running smoothly with a couple of minor tweaks to my backend code. I now have both the frontend and the backend deployed. The frontend is deployed with vercel. Now that theyre deployed, I only have a couple more items to tackle before the project is finished. First, I need to put logic in the backend for the total price of items in the cart. Afterwhich, I will need to do an integration with stripe to be able to successfully "/dummy/" order items. After that is completed, all that will be left is styling each page professionally and then I can show it off on my portfolio.'
    },
    { 
      date: 'January 15th, 2025',
      title: 'Blog Post 4',
      content: 'Today I worked on manually creating a toast notification system for my sushi website project. I was able to achieve this by passing props to a toast component which I manually created. I look forward to continuing to opitimize the website and get it deployed.'
    },
    { 
      date: 'January 14th, 2025',
      title: 'Blog Post 3',
      content: 'Today, I made significant progress on my sushi website project.I focused primarily on implementing user authentication both on the backend and the frontend. This was a crucial step to ensure that users can securely log in, register, and manage their sessions. After completing that, I turned my attention to adding a cart page, which allows users to interact with the restaurant\'s menu.They can browse food items, add them to their cart, and adjust quantities as needed. Next, I plan to implement order processing, which will allow users to complete their purchases. For this, I intend to integrate Stripe\'s API to handle payments securely. This will enable users to finalize their orders with ease, and I’m excited to dive into Stripe\'s features to ensure smooth transactions.In addition to the technical aspects, I’m working on improving the user experience with intuitive UI components, making it as easy as possible for users to navigate through the cart and checkout process.'
    },

    {
      date: 'January 10th, 2025',
      title: 'Blog Post 2',
      content: `Continuing my progress on the portfolio website. Today I worked a lot on my sushi restaurant website project. I am currently working on implementing the stripe integration with the backend so a user could place mock orders to show functionality of the site. I was able to get the orders page up and running today so the user can now add things to their cart and it will show up in their cart page. I will continue adding additional functionality this week to better improve the website and then begin to style the pages. Ocne that is all compelted, I plan to use heroku for the backend deployment and vercel for the front end.`,
    },
    {
      date: 'January 9th, 2025',
      title: 'Blog Post 1',
      content: `Today, I made significant progress on deploying my portfolio website. I’m excited about this next step, as it represents a milestone in showcasing my work. I’ve laid out a solid foundation for my portfolio and am now focusing on polishing its design and functionality. Within the next month, I’m aiming to deploy my first project to the portfolio, and I’m dedicating time and effort to ensure that everything is ready for this release.`,
    }
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
