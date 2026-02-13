import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className="back-button-wrapper">
            <button className="button" onClick={() => navigate(-1)} aria-label="Go back">
                <div className="button-box">
                    <span className="button-elem">
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                            ></path>
                        </svg>
                    </span>
                    <span className="button-elem">
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                            ></path>
                        </svg>
                    </span>
                </div>
            </button>
        </div>
    );
};

export default BackButton;
