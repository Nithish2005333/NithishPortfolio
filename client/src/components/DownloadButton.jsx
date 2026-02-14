import React, { useState } from 'react';
import './DownloadButton.css';

const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1keets2j-zcGLNxBx3LN5Njnmagz1zHiJ';

const DownloadButton = ({ resumeUrl = RESUME_DOWNLOAD_URL, fileName = 'Nithishwaran_Resume.pdf' }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleDownload = () => {
        if (isChecked) return;

        setIsChecked(true);

        // Trigger direct download - Google Drive export URL prompts file download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

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
                <p className="download-title"><span className="download-line">Download</span><span className="download-line">Resume</span></p>
                <p className="download-title">Downloaded!</p>
            </label>
        </div>
    );
};

export default DownloadButton;
