import { Link } from 'react-router-dom';
import './LearnMoreButton.css';

const LearnMoreButton = ({ text, to, onClick, type = 'button', className = '' }) => {
    const content = (
        <button className={`learn-more-btn ${className}`} type={type} onClick={onClick}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">{text}</span>
        </button>
    );

    if (to) {
        return <Link to={to} style={{ textDecoration: 'none', display: 'inline-block' }}>{content}</Link>;
    }

    return content;
};

export default LearnMoreButton;
