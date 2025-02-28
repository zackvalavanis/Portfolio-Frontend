import './Blog.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import PropTypes from 'prop-types';





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

BlogCard.propTypes = { 
  date: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired, 
  leetcode: PropTypes.string.isRequired, 
  skills: PropTypes.string.isRequired
}

export function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const blogPosts = [

    { 
      date: 'Febraury 25th, 2025',
      title: 'Blog Post 19',
      leetcode: '13 Leetcode Javascript questions, 4 Python deliberate practice questions, 3 Ruby deliberate practice questions ',
      skills: 'Python, Javascript, Typescript, CSS, Ruby, Material UI',
      content: "Today, I dived into a slew of Leetcode challenges, followed by deliberate practice in Ruby and Python. I’m committed to improving my syntax in both languages by incorporating daily practice into my routine. After that, I shifted gears and began refining the styling of my project. My goal was to ensure a seamless user experience across various screen sizes, including mobile. I managed to implement about half of the app's dynamic styling, and I’m inching closer to wrapping up this project. The finish line is in sight! "
    },

    { 
      date: 'Febraury 23rd, 2025',
      title: 'Blog Post 18',
      leetcode: '11 Leetcode Javascript questions, 7 Python deliberate practice questions, 4 Ruby deliberate practice questions ',
      skills: 'Python, Javascript, Typescript, CSS, Ruby, Material UI',
      content: "Today was a productive mix of Leetcode practice and exploring new languages. I’ve decided to pivot from Java to Python, seeing more value in its versatility for the future. I’ll be dedicating ongoing time to deliberate practice in both Ruby and Python. After finishing Leetcode, I focused on updating my portfolio page. I wanted to add more tech-related content, so I created a new section for the main page. While the styling took longer than expected, I was able to get everything pushed live and deployed."
    },

    { 
      date: 'Febraury 21st, 2025',
      title: 'Blog Post 17',
      leetcode: '6 Questions, 2 Java questions',
      skills: 'Java, Javascript, Typescript, CSS, Ruby, Material UI',
      content: "Today I focused on adding the finishing touches to my project. A key task was integrating a CartCountProvider to enable a toast notification that tracks the number of items added to the cart. Since the header is shared across multiple pages, I needed a provider to ensure the cart count stays consistent. Additionally, I spent time fixing type errors in my Typescript code. This was my deepest dive into Typescript to date, and it was both challenging and rewarding."
    },

    { 
      date: 'Febraury 20th, 2025',
      title: 'Blog Post 16',
      leetcode: '5 Questions, 4 Java questions',
      skills: 'Java, Javascript, Typescript, CSS, Ruby, Material UI',
      content: "I kicked off the day with more Leetcode practice, focusing on sharpening my skills in both Ruby and Java. After that, I started working on notifications for my cart. I wanted to display the total number of items added to the cart, and I made good progress on that front. Tomorrow, I plan to continue refining this feature and hope to wrap up this project in the next few weeks."
    },

    { 
      date: 'Febraury 18th, 2025',
      title: 'Blog Post 15',
      leetcode: '6 Questions, 2 Java questions',
      skills: 'Java, Javascript, Typescript, CSS, Ruby, Material UI',
      content: "Today’s focus was on mastering some key Leetcode problems, especially around data structures like arrays, hashes, and sets. I also took my first steps in Java programming, deciding to deliberately practice this language moving forward. I chose Java for its difficulty and widespread use cases, which I believe will strengthen my overall programming abilities. Once I completed my Leetcode session, I worked on the frontend for my orders tab. I successfully linked the backend orders model with the frontend and used an Axios GET request to retrieve the order data. I also implemented Typescript for type safety on the orders page and made significant progress on styling. Overall, a very productive day with lots of learning!"
    },

    { 
      date: 'Febraury 13th, 2025',
      title: 'Blog Post 14',
      leetcode: '4 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby, Material UI',
      content: "Today, I set a personal goal to complete at least 4 Leetcode questions daily and to publish 3 blog posts per week. I kicked off the day with 4 Leetcode questions, diving into topics like Big O notation and array manipulation. I also tackled some issues with the backend and frontend, including fixing the cart functionality. The cart orders weren’t working properly, so I updated the Ruby code in the controller. After that, I verified everything with HTTPie and added a Material UI shopping cart icon to enhance the UI."
    },

    { 
      date: 'Febraury 12th, 2025',
      title: 'Blog Post 13',
      leetcode: '6 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: "Today I completed 6 Leetcode questions and then focused on deploying my project’s frontend. I successfully deployed it via Vercel, but the next step is connecting it to the backend, which is hosted on Heroku. This will be the next hurdle I tackle in the coming weeks."
    },

    { 
      date: 'Febraury 10th, 2025',
      title: 'Blog Post 12',
      leetcode: '6 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: "I started the day by working through several Leetcode problems. I then moved on to improving my project by caching one of the pages that had performance issues. By using a useEffect hook in combination with local storage, I managed to cache the page data and retrieve it on subsequent loads. This was my first attempt at caching, and I’m excited to use this technique in future projects."
    },

    { 
      date: 'Febraury 6th, 2025',
      title: 'Blog Post 11',
      leetcode: '8 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: "I spent the morning working on Leetcode questions, honing my understanding of the two-pointer technique. Afterward, I added a new page to my sushi website, which includes the restaurant's history and a critic's review. This addition adds meaningful depth to the application. I also began integrating Stripe for payments, which I plan to finalize in the upcoming weeks."
    },

    { 
      date: 'Febraury 3rd, 2025',
      title: 'Blog Post 10',
      leetcode: '4 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: "I started the day with Leetcode practice, particularly focused on the two-pointer technique. After that, I worked on adding a new page to my sushi website, featuring the restaurant’s history and a review. This feature was successfully implemented today, adding more value to the app. Up next, I’ll continue working on Stripe integration and refining the styling."
    },

    { 
      date: 'Febraury 1st, 2025',
      title: 'Blog Post 9',
      leetcode: '4 Questions',
      skills: 'Javascript, Typescript, CSS, Ruby',
      content: 'Today’s work began with Leetcode practice, which helped me warm up for the day ahead. Then I tackled a couple of frontend issues with my cart. I fixed the images section by updating the Jbuilder file to send the correct data. I also resolved an issue where the total sum on the frontend wasn’t updating automatically when an item was deleted. I implemented dynamic updates using useState to fix this.',
    }, 

    { 
      date: 'January 28th, 2025',
      title: 'Blog Post 8',
      leetcode: '4 leetcode questions',
      skills: 'Javascript, typescript, css',
      content: 'After a refreshing ski trip, I got back into coding by solving some Leetcode questions. I focused on the backend logic for calculating the total cost of items in the cart, using Ruby’s each loop to define the logic. After verifying the backend in the Rails console, I moved to the frontend to display the cart data. I’m looking forward to integrating the API and continuing progress in the coming days.'
    },

    { 
      date: 'January 21st, 2025',
      title: 'Blog Post 7',
      leetcode: '2 leetcode questions',
      skills: 'Javascript, typescript, css',
      content: 'Today, I fine-tuned some pieces of my application using ternary operators. I updated the orders link on the main page to dynamically direct users to either the login page or the menu, depending on their login status. Additionally, I modified the toast notification to pluralize when multiple items are ordered. This was my first time using Typescript, and I’m excited to explore more of it in future projects.'
    },
    { 
      date: 'January 19th, 2025',
      title: 'Blog Post 6',
      leetcode: 'Today I completed 3 Leetcode questions. I will be tracking this metric going forward.',
      skills: 'CSS, Javascript - This is my first time posting this. I will be tracking the skills I have practiced in each session going forward.',
      content: 'Today, I dedicated my efforts to styling my project. I worked on both the login and signup pages, ensuring they had a consistent design. Using raw CSS, I crafted everything from scratch, honing my skills with forms, buttons, and text styling.'
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

   return (
    <div>
      {currentPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
