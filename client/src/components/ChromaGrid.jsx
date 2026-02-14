import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import './ChromaGrid.css';

export const ChromaGrid = ({
    items,
    className = '',
    radius = 300,
    columns = 3,
    rows = 2,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out',
    spotlight = false
}) => {
    const navigate = useNavigate();
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const cardRefs = useRef([]);
    const [centeredIndex, setCenteredIndex] = useState(null);

    const demo = [
        {
            image: 'https://i.pravatar.cc/300?img=8',
            title: 'Alex Rivera',
            subtitle: 'Full Stack Developer',
            handle: '@alexrivera',
            borderColor: '#4F46E5',
            gradient: 'linear-gradient(145deg, #4F46E5, #000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=11',
            title: 'Jordan Chen',
            subtitle: 'DevOps Engineer',
            handle: '@jordanchen',
            borderColor: '#10B981',
            gradient: 'linear-gradient(210deg, #10B981, #000)',
            url: 'https://linkedin.com/in/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=3',
            title: 'Morgan Blake',
            subtitle: 'UI/UX Designer',
            handle: '@morganblake',
            borderColor: '#F59E0B',
            gradient: 'linear-gradient(165deg, #F59E0B, #000)',
            url: 'https://dribbble.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=16',
            title: 'Casey Park',
            subtitle: 'Data Scientist',
            handle: '@caseypark',
            borderColor: '#EF4444',
            gradient: 'linear-gradient(195deg, #EF4444, #000)',
            url: 'https://kaggle.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=25',
            title: 'Sam Kim',
            subtitle: 'Mobile Developer',
            handle: '@thesamkim',
            borderColor: '#8B5CF6',
            gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=60',
            title: 'Tyler Rodriguez',
            subtitle: 'Cloud Architect',
            handle: '@tylerrod',
            borderColor: '#06B6D4',
            gradient: 'linear-gradient(135deg, #06B6D4, #000)',
            url: 'https://aws.amazon.com/'
        }
    ];
    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    /* Mobile: center card shows color (like hover on PC), others grayscale */
    useEffect(() => {
        const mql = window.matchMedia('(max-width: 768px)');
        const isMobile = () => mql.matches;
        if (!isMobile()) return;

        let rafId = null;
        const updateCenteredCard = () => {
            if (!isMobile()) return;
            rafId = requestAnimationFrame(() => {
                const cards = cardRefs.current;
                const len = data.length;
                if (len === 0) return;
                const vh = window.innerHeight / 2;
                let closestIdx = 0;
                let closestDist = Infinity;
                for (let i = 0; i < len; i++) {
                    const card = cards[i];
                    if (!card || !card.getBoundingClientRect) continue;
                    const rect = card.getBoundingClientRect();
                    const centerY = rect.top + rect.height / 2;
                    const dist = Math.abs(centerY - vh);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestIdx = i;
                    }
                }
                setCenteredIndex(closestIdx);
            });
        };

        const handleResizeOrMediaChange = () => { if (isMobile()) updateCenteredCard(); };
        updateCenteredCard();
        window.addEventListener('scroll', updateCenteredCard, { passive: true });
        window.addEventListener('touchmove', updateCenteredCard, { passive: true });
        window.addEventListener('touchstart', updateCenteredCard, { passive: true });
        window.addEventListener('resize', handleResizeOrMediaChange);
        mql.addEventListener('change', handleResizeOrMediaChange);
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', updateCenteredCard);
            window.removeEventListener('touchmove', updateCenteredCard);
            window.removeEventListener('touchstart', updateCenteredCard);
            window.removeEventListener('resize', handleResizeOrMediaChange);
            mql.removeEventListener('change', handleResizeOrMediaChange);
        };
    }, [data.length]);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = e => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = url => {
        const isPlaceholder = !url || url === '#' || url === '';
        if (isPlaceholder) {
            navigate(-1);
        } else if (url) {
            if (url.startsWith('/')) {
                navigate(url);
            } else {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        }
    };

    const handleCardMove = e => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${!spotlight ? 'chroma-grid--clean' : ''} ${className}`}
            style={{
                '--r': `${radius}px`,
                '--cols': columns,
                '--rows': rows
            }}
            onPointerMove={spotlight ? handleMove : undefined}
            onPointerLeave={spotlight ? handleLeave : undefined}
        >
            {data.map((c, i) => (
                <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 0.8,
                        delay: (i % columns) * 0.15,
                        ease: [0.215, 0.61, 0.355, 1]
                    }}
                    ref={el => { cardRefs.current[i] = el; }}
                    className={`chroma-card cursor-target ${centeredIndex === i ? 'chroma-card--centered' : ''}`}
                    onMouseMove={handleCardMove}
                    onClick={() => handleCardClick(c.url)}
                    style={{
                        '--card-border': c.borderColor || 'transparent',
                        '--card-gradient': c.gradient,
                        cursor: c.url ? 'pointer' : 'default'
                    }}
                >
                    <div className="chroma-img-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {c.image ? (
                            <img src={c.image} alt={c.title} loading="lazy" />
                        ) : (
                            <div className="card-icon-overlay" style={{ opacity: 0.8, color: 'white' }}>
                                {c.icon}
                            </div>
                        )}
                        {c.category && (
                            <span className="chroma-card-category" style={{
                                position: 'absolute', top: '12px', left: '12px',
                                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                                padding: '6px 12px', borderRadius: '8px',
                                fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em',
                                textTransform: 'uppercase', color: '#fff',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {c.category}
                            </span>
                        )}
                        {c.handle && (
                            <span className="chroma-card-handle" style={{
                                position: 'absolute', bottom: '12px', right: '12px',
                                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
                                padding: '4px 10px', borderRadius: '6px',
                                fontSize: '10px', fontWeight: 500, color: 'rgba(255,255,255,0.9)',
                                border: '1px solid rgba(255,255,255,0.08)'
                            }}>
                                {c.handle}
                            </span>
                        )}
                    </div>
                    <footer className="chroma-info" style={{ minHeight: '100px' }}>
                        <h3 className="name">{c.title}</h3>
                        <p className="role">{c.subtitle}</p>
                        {c.description && (
                            <p className="chroma-card-desc">{c.description}</p>
                        )}
                        <div className="chroma-info-actions">
                            {c.github && (
                                <a
                                    href={c.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="chroma-github-link"
                                    aria-label="View on GitHub"
                                >
                                    <SiGithub size={18} />
                                </a>
                            )}
                            <span className="chroma-view-link">View Project →</span>
                        </div>
                    </footer>
                </motion.article>
            ))}
            {spotlight && (
                <>
                    <div className="chroma-overlay" />
                    <div ref={fadeRef} className="chroma-fade" />
                </>
            )}
        </div>
    );
};

export default ChromaGrid;
