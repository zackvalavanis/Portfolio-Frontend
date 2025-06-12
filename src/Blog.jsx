import './Blog.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import PropTypes from 'prop-types';

const BlogCard = ({ date, title, content, leetcode, skills }) => (
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
        variant="h6"
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
      {skills && (
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: 12, sm: 16 }, lineHeight: 1.5, marginBottom: '16px' }}
        >
          <b>Skills Practiced:</b> {skills}
        </Typography>
      )}
      {leetcode && (
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: 12, sm: 16 }, lineHeight: 1.5, marginBottom: '16px' }}
        >
          <b>Leetcode:</b> {leetcode}
        </Typography>
      )}
      <Typography
        variant="body2"
        sx={{ whiteSpace: 'pre-line', fontSize: { xs: 12, sm: 16 }, lineHeight: 1.5 }}
      >
        {content}
      </Typography>
    </CardContent>
    <CardActions />
  </Card>
);

BlogCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  leetcode: PropTypes.string,
  skills: PropTypes.string,
};

export function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const blogPosts = [
    {
      date: '5/25/2025 - 6/7/2025',
      title: 'What Have I Been Working On',
      content: `This week, I’ve made significant progress in both algorithmic problem-solving and full-stack development.

On the backend of my vacation/travel project, I implemented GraphQL to enable flexible, type-based queries. This allows the frontend to request exactly the data it needs — nothing more, nothing less — which improves efficiency and scalability. For example, the user profile can now fetch just the liked destinations, including only fields like title, city, or image, depending on what's needed on the page. Integrating GraphQL not only improved data handling across components, but also gave me deeper insight into API architecture and schema design.

I also built a profile page that lets users "like" destinations. Those liked destinations are now stored and easily accessible through the user’s profile. This improves user experience by allowing quick access to saved places.

In parallel, I’ve continued to deepen my front-end skills. I’ve started transitioning parts of the React frontend into TypeScript (TSX), improving both type safety and maintainability. I’ve been learning to define custom types and interfaces that work cleanly with props, context, and GraphQL query results.

Additionally, I’ve recently joined Capture as a Software Engineer Intern. My focus so far has been on UI/UX design, contributing to frontend improvements and collaborating with a team of four developers to enhance core features.`,
      leetcode: 'Two Pointers, Prefix Sums, Sliding Window',
      skills: 'TypeScript, React (TSX), JavaScript, HTML, CSS (Flexbox), Ruby on Rails, PostgreSQL, Docker, GraphQL',
    },
    {
      date: '5/18/2025 - 5/24/2025',
      title: 'What Have I Been Working On',
      content: `This week, I’ve made significant progress in both algorithmic problem-solving and full-stack development.

On the technical interview front, I’ve been following a structured LeetCode learning path focused on data structures and algorithms. I successfully mastered three core algorithmic techniques: two pointers, prefix sums, and the sliding window pattern. These concepts are foundational for optimizing array and string manipulation problems, and I’ve been actively applying them to solve a variety of LeetCode challenges.

Alongside this, I completed the entire Foundations course of The Odin Project, which provided a deeper dive into HTML and CSS fundamentals. I gained hands-on experience using Flexbox, semantic HTML, and class/id selectors to structure and style web pages effectively. I also discovered and began using Emmet, a powerful shorthand tool that significantly increased my speed when writing HTML boilerplate and markup.

Throughout the course, I built several projects to reinforce my learning, including:
- A calculator built with vanilla JavaScript.
- A responsive static site leveraging Flexbox for layout.
- An Etch-a-Sketch drawing grid.
- A multi-page recipes website showcasing basic routing and styling.

With the foundations behind me, I’ve now transitioned into the next phase of the Odin curriculum, which focuses on advanced front-end and back-end technologies, including JavaScript, Node.js, Express, and React.

In addition to my coursework, I’ve been developing a personal travel blog web application to document and display my travel experiences. The stack includes:
- Frontend: React (with React Router for page navigation)
- Backend: Ruby on Rails (handling API endpoints and business logic)
- Database: PostgreSQL
- Infrastructure: The entire application is containerized using Docker, allowing for a consistent development environment and future deployment scalability.

This project has allowed me to integrate full-stack concepts and apply them in a real-world context, including RESTful routing, state management, CRUD operations, and responsive UI design.`,
      leetcode: 'Two Pointers, Prefix Sums, Sliding Window',
      skills: 'HTML, CSS (Flexbox), JavaScript, React, Ruby on Rails, PostgreSQL, Docker',
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="page-container">
      <div className="container-all">
        {currentPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
        <div className="pagination" aria-label="Blog pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
            aria-label="Previous page"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
