import { useRef, useEffect, useState } from 'react';
import './SendButton.css';

const SendButton = ({ onClick, style, className, disabled }) => {
    const buttonRef = useRef(null);
    const pathRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        // Log to verify the button is being clicked
        console.log("SendButton clicked. Disabled:", disabled, "Active:", isActive);

        if (isActive || disabled) return;

        // If the button is part of a form, it will trigger the form's onSubmit.
        // If an onClick prop is provided, we call it.
        if (onClick) onClick(e);

        setIsActive(true);

        const gsap = window.gsap;
        const button = buttonRef.current;
        const path = pathRef.current;

        if (!gsap || !button || !path) {
            // Even without GSAP, simulate completion so it's not stuck
            setTimeout(() => setIsActive(false), 2000);
            return;
        }

        const tl = gsap.timeline();

        tl.to(path, {
            morphSVG: 'M136,77.5h-1H4.8H4c-2.2,0-4-1.8-4-4v-47c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0C44,22.5,66,10,66,10  s3,12.5,69.1,12.5c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47C140,75.7,138.2,77.5,136,77.5z',
            duration: .3,
            delay: .3
        }).to(path, {
            morphSVG: 'M136,77.5c0,0-11.7,0-12,0c-90,0-94.2,0-94.2,0s-10.8,0-25.1,0c-0.2,0-0.8,0-0.8,0c-2.2,0-4-1.8-4-4v-47  c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0c39.1,0,61.1,0,61.1,0s3,0,69.1,0c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47  C140,75.7,138.2,77.5,136,77.5z',
            duration: 1.7,
            ease: 'elastic.out(1, .15)',
            onComplete() {
                setIsActive(false);
            }
        });
    };

    return (
        <button
            ref={buttonRef}
            className={`send-button ${isActive ? 'active' : ''} ${className || ''}`}
            onClick={handleClick}
            style={style}
            type="submit"
            disabled={disabled}
        >
            <svg className="btn-layer" viewBox="0 0 140 100" preserveAspectRatio="none">
                <path
                    ref={pathRef}
                    d="M136,77.5c0,0-11.7,0-12,0c-90,0-94.2,0-94.2,0s-10.8,0-25.1,0c-0.2,0-0.8,0-0.8,0c-2.2,0-4-1.8-4-4v-47  c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0c39.1,0,61.1,0,61.1,0s3,0,69.1,0c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47  C140,75.7,138.2,77.5,136,77.5z"
                />
            </svg>
            <svg className="plane" viewBox="0 0 28 26" preserveAspectRatio="none">
                <path d="M5.25,15.24,18.42,3.88,7.82,17l0,4.28a.77.77,0,0,0,1.36.49l3-3.68,5.65,2.25a.76.76,0,0,0,1-.58L22,.89A.77.77,0,0,0,20.85.1L.38,11.88a.76.76,0,0,0,.09,1.36Z" />
            </svg>
            <ul>
                <li>Send</li>
                <li>Done</li>
            </ul>
        </button>
    );
};

export default SendButton;
