import React, { useState } from 'react';
import './DownloadButton.css';

const DownloadButton = ({ resumeUrl = '/Resume.pdf', fileName = 'Nithishwaran_Resume.pdf' }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleDownload = () => {
        if (isChecked) return;

        setIsChecked(true);

        // Simulate download delay to match animation
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 3500);
    };

    return (
        <div className="download-container">
            <label className="download-label">
                <input
                    type="checkbox"
                    className="download-input"
                    checked={isChecked}
                    onChange={handleDownload}
                />
                <span className="download-circle">
                    <svg
                        className="download-icon"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 19V5m0 14-4-4m4 4 4-4"
                        ></path>
                    </svg>
                    <div className="download-square"></div>
                </span>
                <p className="download-title">Resume</p>
                <p className="download-title">Success</p>
            </label>
        </div>
    );
};

export default DownloadButton;
