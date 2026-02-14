import { useRef, useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDrag } from '@use-gesture/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './SkillCarousel.css';

const ROTATE_X = -5;
const PERSPECTIVE = 1400;
const AUTO_ROTATE_SPEED = 0.08;

const SkillCarousel = ({ skills }) => {
    const wrapperRef = useRef(null);
    const innerRef = useRef(null);
    const rotationRef = useRef(0);
    const rafRef = useRef(null);

    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
            : '99, 102, 241';
    };

    const [selectedSkill, setSelectedSkill] = useState(null);

    const applyTransform = useCallback(() => {
        const inner = innerRef.current;
        if (!inner || selectedSkill) return;
        inner.style.transform = `translate(-50%, -50%) perspective(${PERSPECTIVE}px) rotateX(${ROTATE_X}deg) rotateY(${rotationRef.current}deg)`;
    }, [selectedSkill]);

    const rotateCarousel = useCallback((direction) => {
        if (selectedSkill) return;
        const quantity = skills?.length || 4;
        const stepDeg = 360 / quantity;
        const delta = direction === 'left' ? -stepDeg : stepDeg;
        rotationRef.current += delta;
        applyTransform();
    }, [skills?.length, applyTransform, selectedSkill]);

    useDrag(
        ({ delta: [dx], tap }) => {
            if (selectedSkill) return;
            if (!tap) {
                rotationRef.current += dx * 0.5;
                applyTransform();
            }
        },
        {
            target: wrapperRef,
            axis: 'x',
            pointer: { touch: true },
            filterTaps: true
        }
    );

    useEffect(() => {
        if (selectedSkill) {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
            return () => {
                document.body.style.overflow = '';
                document.body.style.touchAction = '';
            };
        }

        const handleWheel = (e) => {
            const wrapper = wrapperRef.current;
            if (!wrapper || selectedSkill) return;
            const rect = wrapper.getBoundingClientRect();
            const inBounds = e.clientY >= rect.top && e.clientY <= rect.bottom && e.clientX >= rect.left && e.clientX <= rect.right;
            if (!inBounds) return;

            e.preventDefault();
            e.stopPropagation();
            rotationRef.current += -e.deltaY * 0.2;
            applyTransform();
        };

        wrapperRef.current?.addEventListener('wheel', handleWheel, { passive: false, capture: true });

        const loop = () => {
            if (selectedSkill) return;
            rotationRef.current += AUTO_ROTATE_SPEED;
            applyTransform();
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);

        return () => {
            wrapperRef.current?.removeEventListener('wheel', handleWheel, { capture: true });
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [applyTransform, selectedSkill]);

    return (
        <div ref={wrapperRef} className="skill-carousel-wrapper">
            {/* Left Navigation Button */}
            {!selectedSkill && (
                <button
                    className="carousel-nav-btn carousel-nav-left"
                    onClick={() => rotateCarousel('left')}
                    aria-label="Previous skill"
                >
                    <ChevronLeft size={22} />
                </button>
            )}

            <div ref={innerRef} className="skill-carousel-inner" style={{ '--quantity': skills.length }}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-carousel-card"
                        onClick={() => setSelectedSkill(skill)}
                        style={{
                            '--index': index,
                            '--color-card': hexToRgb(skill.color),
                            cursor: 'pointer'
                        }}
                    >
                        {/* Glow outside content to avoid overflow clipping */}
                        <div className="skill-card-glow" aria-hidden="true" />
                        <div className="skill-card-content">
                            {/* Header - frontend_focus_card layout */}
                            <div className="skill-card-header">
                                <div className="skill-icon-box">
                                    <div className="skill-icon-glow" />
                                    <div className="skill-icon-inner">
                                        {skill.icon}
                                    </div>
                                </div>
                                <div className="skill-header-text">
                                    <span className="skill-label">FOCUS AREA</span>
                                    <h3 className="skill-title">{skill.name}</h3>
                                    <p className="skill-description">{skill.description}</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="skill-divider" />

                            {/* Feature Timeline */}
                            {skill.features && skill.features.length > 0 ? (
                                <div className="skill-feature-timeline">
                                    <div className="skill-feature-line" />
                                    {skill.features.map((feat, i) => (
                                        <div key={i} className="skill-feature">
                                            <div className="skill-feature-icon-box">
                                                {feat.icon}
                                            </div>
                                            <div className="skill-feature-text">
                                                <h4 className="skill-feature-title">{feat.title}</h4>
                                                <p className="skill-feature-desc">{feat.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="skill-description-fallback">{skill.description}</p>
                            )}

                            {/* Expertise Level */}
                            <div className="skill-level-container">
                                <div className="skill-level-text">
                                    <h3 className="skill-level-label">Expertise Level</h3>
                                    <span className="skill-level-value">Advanced · {skill.level}%</span>
                                </div>
                                <div className="skill-progress-track">
                                    <div
                                        className="skill-progress-bar"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Navigation Button */}
            {!selectedSkill && (
                <button
                    className="carousel-nav-btn carousel-nav-right"
                    onClick={() => rotateCarousel('right')}
                    aria-label="Next skill"
                >
                    <ChevronRight size={22} />
                </button>
            )}

            {/* Modal Detail View - Rendered via Portal to body for proper backdrop blur */}
            {createPortal(
                <AnimatePresence>
                    {selectedSkill && (
                        <div className="skill-modal-overlay">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            className="skill-modal-backdrop cursor-target"
                            onClick={() => setSelectedSkill(null)}
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="skill-modal-content"
                                style={{
                                    '--color-accent': hexToRgb(selectedSkill.color)
                                }}
                            >
                                <button className="skill-modal-close cursor-target" onClick={() => setSelectedSkill(null)}>
                                    <X size={24} />
                                </button>

                                <div className="skill-modal-body">
                                    <div className="skill-modal-header">
                                        <div className="skill-modal-icon-box">
                                            {selectedSkill.icon}
                                        </div>
                                        <div>
                                            <span className="skill-modal-label">CORE SPECIALIZATION</span>
                                            <h2 className="skill-modal-title">{selectedSkill.name}</h2>
                                        </div>
                                    </div>

                                    <p className="skill-modal-description">{selectedSkill.description}</p>

                                    <div className="skill-modal-divider" />

                                    <div className="skill-modal-grid">
                                        <div className="skill-modal-features">
                                            <h3 className="skill-modal-subheading">Key Expertise</h3>
                                            <div className="skill-modal-features-list">
                                                {selectedSkill.features?.map((feat, i) => (
                                                    <div key={i} className="skill-modal-feature-item">
                                                        <div className="skill-modal-feature-icon">{feat.icon}</div>
                                                        <div>
                                                            <h4 className="skill-modal-feature-title">{feat.title}</h4>
                                                            <p className="skill-modal-feature-text">{feat.text}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="skill-modal-stats">
                                            <div className="skill-modal-stat-card">
                                                <h3 className="skill-modal-subheading">Mastery Level</h3>
                                                <div className="skill-modal-progress-ring">
                                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                                        <path className="circle-bg"
                                                            d="M18 2.0845
                                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                        <path className="circle"
                                                            strokeDasharray={`${selectedSkill.level}, 100`}
                                                            d="M18 2.0845
                                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                        <text x="18" y="20.35" className="percentage">{selectedSkill.level}%</text>
                                                    </svg>
                                                </div>
                                                <p className="skill-modal-status">ADVANCED PROFICIENCY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}


        </div>
    );
};

export default SkillCarousel;
