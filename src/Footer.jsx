import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* LinkedIn Icon */}
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/zack-valavanis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        {/* GitHub Icon */}
        <a
          className="icon-link-2"
          href="https://github.com/zackvalavanis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
