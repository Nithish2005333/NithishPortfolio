import React from 'react';
import './NeonGlowBorder.css';

const NeonGlowBorder = ({ 
    children, 
    color = "#6366f1", 
    borderRadius = 32, 
    borderWidth = 1.5,
    speed = "4s"
}) => {
    return (
        <div 
            className="neon-glow-wrapper" 
            style={{ 
                '--border-color': color, 
                '--radius': `${borderRadius}px`,
                '--border-width': `${borderWidth}px`,
                '--rotation-speed': speed
            }}
        >
            <div className="neon-glow-beam" />
            <div className="neon-glow-ambient" />
            <div className="neon-glow-content">
                {children}
            </div>
        </div>
    );
};

export default NeonGlowBorder;
