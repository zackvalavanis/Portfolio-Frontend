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
      Date: '5/6/2025'
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
