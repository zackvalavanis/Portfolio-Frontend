import './AboutMe.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom'

export function AboutMe() {
  // Track the expanded card by its index
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleExpandClick = (index) => {
    // If the clicked card is already expanded, collapse it, else expand it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  }));

  return (
    <div className='about-me-container'>
      <h1 className='head-comment'>Experience:</h1>

      {/* Card 1 */}
      <Card sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={
            <a href="https://www.linkedin.com/company/neuberger-berman/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <CardMedia
              component="img"
              sx={{ height: 40, width: 40 }} // Adjust size here
              image="src/assets/Images/NB Logo.jpeg"
              alt="Neuberger Berman Logo"
            />
            </a>
          }
          title="Neuberger Berman"  
          subheader="Analytics Analyst"
        />
        <CardContent>
          <p><b>Summary:</b></p>
          <Typography>
            Worked as an Analytics Analyst at Neuberger Berman, managing a $2.7B portfolio and delivering 1%+ alpha. Developed tax-efficient strategies, cutting clients' capital gains taxes by up to 10%, and created a VBA automation that saved 12 hours annually. Helped grow the portfolio by $100M, enhancing client trust and efficiency.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expandedIndex === 0}
            onClick={() => handleExpandClick(0)}
            aria-expanded={expandedIndex === 0}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedIndex === 0} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
              - Managed a $2.7B diversified portfolio across several clients and asset classes, driving growth and consistently generating over 1% alpha relative to market benchmarks.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Designed and executed tax-efficient investment strategies for diverse client portfolios, achieving up to 10% reductions in capital gains taxes and significantly lowering clients’ overall tax burdens.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Developed and implemented a VBA automation solution that saves 12 hours annually, with strong potential for scaling and improving efficiency across the organization.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Implemented data-driven strategies that contributed to an increase of approximately $100M in the book over the course of the year, enhancing client trust and engagement.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      {/* Card 2 */}
      <Card sx={{ maxWidth: 1000, marginTop: 2 }}>
      <CardHeader
            avatar={
            <a href='https://www.linkedin.com/company/accenture/posts/?feedView=all' target="_blank" rel="noopener noreferrer">
            <CardMedia
              component="img"
              sx={{ height: 40, width: 40 }} // Adjust size here
              image="src/assets/Images/Accenture Logo.png"
              alt="Accenture Logo"
            />
            </a>
          }
          title="Accenture"
          subheader="Real Estate Management Analyst"
        />
        
        <CardContent>
          <p><b>Summary:</b></p>
          <Typography>
            As a Real Estate Management Analyst at Accenture, I focused on optimizing real estate portfolios, providing strategic insights that contributed to reducing costs and improving overall performance. My work involved detailed data analysis, cost-benefit assessments, and strategic planning.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expandedIndex === 1}
            onClick={() => handleExpandClick(1)}
            aria-expanded={expandedIndex === 1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedIndex === 1} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
              - Oversaw the management of a $1.1B portfolio of 37 large commercial office spaces, accommodating thousands of employees, while improving tenant satisfaction scores by 20% and improving operational efficiency.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Streamlined vendor operations and implemented process improvements, resulting in a cost savings of $200,000, equivalent to a 5% reduction to operating expenses.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Orchestrated a seamless transition of 12 properties by streamlining vendor management and rent processes, resulting in a 5% reduction in costs due to improved operational efficiency.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Conducted regular audits of operational processes, identifying areas for improvement that led to a 25% decrease in maintenance response times.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      {/* Card 3 */}
      <Card sx={{ maxWidth: 1000, marginTop: 2 }}>
        <CardHeader
          avatar={
            <a href='https://www.linkedin.com/company/advantage-futures/posts/?feedView=all' target="_blank" rel="noopener noreferrer">
              <CardMedia 
              component="img"
              sx={{ height: 40, width: 40 }} // Adjust size here
              image="src/assets/Images/Advantage Futures Logo.jpeg"
              alt="Advantage Futures Logo"
            />
            </a>
          }
          title="Advantage Futures"
          subheader='Risk Analyst'
        />
        <CardContent>
          <p><b>Summary:</b></p>
          <Typography>
            As a Risk Analyst at Advantage Futures, I analyzed market risk, developed risk management strategies, and implemented systems to minimize exposure. My work helped the team make informed decisions on managing portfolios and mitigating risk factors in volatile market conditions.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expandedIndex === 2}
            onClick={() => handleExpandClick(2)}
            aria-expanded={expandedIndex === 2}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedIndex === 2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
              - Streamlined quarterly reporting by implementing VBA macros to automate data compilation, reducing reporting time by over 50% and boosting overall efficiency, allowing for increased focus on client portfolios.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Managed the analysis of volume and open interest in emerging exchange-traded products, including Bitcoin and Ethereum futures, leading to a 15% improvement in portfolio performance tracking.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Conducted data analysis on margin usage, providing insights that reduced risk exposure by 20% and identified optimization opportunities for capital allocation.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Conducted P&L and volume analysis with risk assessments, providing insights that enhanced decision-making and led to a 10% reduction in operational risk and associated costs.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      {/* Card 4 */}
      <Card sx={{ maxWidth: 1000, marginTop: 2 }}>
        <CardHeader
          avatar={ 
            <a href='https://www.linkedin.com/company/onshoresecurity/posts/?feedView=all' target='blank' rel="noopener noreferrer">
            <CardMedia 
              component="img"
              sx={{ height: 40, width: 40 }} // Adjust size here
              image="src/assets/Images/Onshore Logo.jpeg"
              alt="OnShore Logo"
            />
            </a>
          }
          title="OnShore Security"
          subheader='Assistant to the CFO - Intern'
        />
        <CardContent>
          <p><b>Summary:</b></p>
          <Typography >
          Worked closely with the CFO to enhance financial reporting and data integration, improving efficiency and accuracy across key financial processes. Led initiatives that optimized decision-making and forecasting through improved data visualization and streamlined reporting systems.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expandedIndex === 3}
            onClick={() => handleExpandClick(3)}
            aria-expanded={expandedIndex === 3}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedIndex === 3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
              - Collaborated with the CFO to extract financial data from QuickBooks & seamlessly integrate it into a front -end database, enabling effective KPI visualization and increasing operational efficiency by 30% and reducing reporting time by 20%.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Managed the creation of comprehensive profit and loss statements for the past 3 years, providing a clearer and more precise financial picture that improved decision-making accuracy by 20% and enabled better forecasting.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              - Developed and implemented standardized reporting templates that streamlined financial analysis processes, resulting in a 25% increase in reporting accuracy and significantly enhancing strategic planning capabilities.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
