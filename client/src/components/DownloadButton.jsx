import React, { useState } from 'react';
import './DownloadButton.css';

const RESUME_DOWNLOAD_URL = '/Nithishwaran_Resume_Updated.pdf';

const DownloadButton = ({ resumeUrl = RESUME_DOWNLOAD_URL, fileName = 'Nithishwaran_Resume_Updated.pdf' }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleDownload = () => {
        if (isChecked) return;

        setIsChecked(true);

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            setIsChecked(false);
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
                <p className="download-title"><span className="download-line">Download</span><span className="download-line">Resume</span></p>
                <p className="download-title">Downloaded!</p>
            </label>
        </div>
    );
};

export default DownloadButton;
