import './Blog.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BlogCard = ({ date, title, content, leetcode, skills}) => (
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
        sx={{ fontSize: { xs: 12, sm: 16 }, lineHeight: 1.5, marginBottom: '16px'}}
      >
        <b>Skills Practiced:</b> {skills}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: { xs: 12, sm: 16 }, lineHeight: 1.5, marginBottom: '16px'}}
      >
        <b>Leetcode:</b> {leetcode}
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
      date: 'Febraury 10th, 2025',
      title: 'Blog Post 12',
      leetcode: '6 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: "I worked on several leetcode questions to get started today. I like to start with the hardest part of the day before getting to more interesting and fun items. I then worked on caching on of the pages in my application. This is the first time I explorered caching and I wanted to do so as I had noticed my items page was sometimes slow to load. I ended up using a useEffect hook in tandem with setting a variable to both save down the cached data in local storage and then to retrieve that data from local storage if the page had previously been loaded. This was my first attempt and I definitely will be using this in other projects going forward."
    },

    { 
      date: 'Febraury 6th, 2025',
      title: 'Blog Post 11',
      leetcode: '8 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: "Today, I began by working on some Leetcode questions, focusing on deepening my understanding of the two-pointer technique and iterating through arrays. Once I finished with Leetcode, I shifted my focus to adding a new page to my sushi website. This page provides a brief history of the restaurant, as well as a critic's review. I’m pleased to report that I successfully implemented this feature today, adding meaningful depth to the application. Moving forward, I plan to work on integrating Stripe and finalize the styling in the coming weeks. I began working on the stripe integration today as well. I was able to just about finish the whole stripe integration today. I will need to add another model for orders so that a user can then go in and view their past orders."
    },

    { 
      date: 'Febraury 3rd, 2025',
      title: 'Blog Post 10',
      leetcode: '4 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: "Today, I began by working on some Leetcode questions, focusing on deepening my understanding of the two-pointer technique and iterating through arrays. Once I finished with Leetcode, I shifted my focus to adding a new page to my sushi website. This page provides a brief history of the restaurant, as well as a critic's review. I’m pleased to report that I successfully implemented this feature today, adding meaningful depth to the application. Moving forward, I plan to work on integrating Stripe and finalize the styling in the coming weeks."
    },

    { 
      date: 'Febraury 1st, 2025',
      title: 'Blog Post 9',
      leetcode: '4 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: 'Today, I started with some Leetcode questions to warm up. After that, I needed to fix the images section on my front end. I resolved this by updating the Jbuilder file in the backend to send the correct data to the front end. Once that was fixed, I encountered another issue—the total sum on the front end wasn’t updating automatically when an item was deleted. I fixed this by using a couple of variables and the useState function to dynamically update the sum whenever items were added or removed from the cart.',
    }, 

    { 
      date: 'January 28th, 2025',
      title: 'Blog Post 8',
      leetcode: '4 leetcode questions',
      skills: 'Javascript, typescript, css',
      content: 'I just got back from an incredible ski trip to Breckenridge and I am ready to get back into study mode. I started today with some leetcode questions just to warm up as I had not coded for almost a week. I worked on the core logic of my app today which essentially is to calculate the total cost of a users cart. I did most of the work in the backend on ruby using each loops and defining the logic for the sum and total. After the backend data was working and checked in the rails console, I moved on to the front end and to gathering all of the data in the cart to display. I was able to display everything I needed in the frontend and will continue to work on the API integrations going forward.'
    },
    { 
      date: 'January 21st, 2025',
      title: 'Blog Post 7',
      leetcode: '2 leetcode questions',
      skills: 'Javascript, typescript, css',
      content: 'Today I focused on updating a couple specific pieces of my application using ternary operators. I updated the orders link on my main page so that if you are logged off, it will take you to the login page and if youre logged in, you will be taken to the menu page. in addition to that, I added a ternary operator on my toast so that if you order more than one item it pluralizes the toast. Finally, I added some typescript to the toast component. This is my first use of typescript but I hope to cultivate this skill going forward.'
    },
    { 
      date: 'January 19th, 2025',
      title: 'Blog Post 6',
      leetcode: 'Today I completed 3 Leetcode questions. I will be tracking this metric going forward.',
      skills: 'CSS, Javascript - This is my first time posting this. I will be tracking the skills I have practiced in each session going forward.',
      content: 'Today I really focused on styling my project. I styled both the login and signup pages. I made them in the same style as to stay consistent in the application. I used css to style everything from scratch and the practice definitely honed my skills at raw css styling involing forms, buttons, and raw text.'
    },
    { 
      date: 'January 18th, 2025',
      title: 'Blog Post 5',
      leetcode: '',
      content: 'Today I worked on getting my backend (ruby on rails) deployed on Heroku. I was able to get everything running smoothly with a couple of minor tweaks to my backend code. I now have both the frontend and the backend deployed. The frontend is deployed with vercel. Now that theyre deployed, I only have a couple more items to tackle before the project is finished. First, I need to put logic in the backend for the total price of items in the cart. Afterwhich, I will need to do an integration with stripe to be able to successfully "/dummy/" order items. After that is completed, all that will be left is styling each page professionally and then I can show it off on my portfolio.'
    },
    { 
      date: 'January 15th, 2025',
      title: 'Blog Post 4',
      leetcode: '',
      content: 'Today I worked on manually creating a toast notification system for my sushi website project. I was able to achieve this by passing props to a toast component which I manually created. I look forward to continuing to opitimize the website and get it deployed.'
    },
    { 
      date: 'January 14th, 2025',
      title: 'Blog Post 3',
      leetcode: '',
      content: 'Today, I made significant progress on my sushi website project.I focused primarily on implementing user authentication both on the backend and the frontend. This was a crucial step to ensure that users can securely log in, register, and manage their sessions. After completing that, I turned my attention to adding a cart page, which allows users to interact with the restaurant\'s menu.They can browse food items, add them to their cart, and adjust quantities as needed. Next, I plan to implement order processing, which will allow users to complete their purchases. For this, I intend to integrate Stripe\'s API to handle payments securely. This will enable users to finalize their orders with ease, and I’m excited to dive into Stripe\'s features to ensure smooth transactions.In addition to the technical aspects, I’m working on improving the user experience with intuitive UI components, making it as easy as possible for users to navigate through the cart and checkout process.'
    },

    {
      date: 'January 10th, 2025',
      title: 'Blog Post 2',
      leetcode: '',
      content: `Continuing my progress on the portfolio website. Today I worked a lot on my sushi restaurant website project. I am currently working on implementing the stripe integration with the backend so a user could place mock orders to show functionality of the site. I was able to get the orders page up and running today so the user can now add things to their cart and it will show up in their cart page. I will continue adding additional functionality this week to better improve the website and then begin to style the pages. Ocne that is all compelted, I plan to use heroku for the backend deployment and vercel for the front end.`,
    },
    {
      date: 'January 9th, 2025',
      title: 'Blog Post 1',
      leetcode: '',
      content: `Today, I made significant progress on deploying my portfolio website. I’m excited about this next step, as it represents a milestone in showcasing my work. I’ve laid out a solid foundation for my portfolio and am now focusing on polishing its design and functionality. Within the next month, I’m aiming to deploy my first project to the portfolio, and I’m dedicating time and effort to ensure that everything is ready for this release.`,
    }
  ];

  return (
    <div
      className="card-container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}
    >
      {blogPosts.map((post, index) => (
        <BlogCard key={index} date={post.date} title={post.title} content={post.content} leetcode={post.leetcode} skills={post.skills}/>
      ))}
    </div>
  );
}
