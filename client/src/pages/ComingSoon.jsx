import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Terminal, Cpu, Shield, ArrowLeft, Code2, Construction, Sparkles } from 'lucide-react';
import LightRays from '../components/LightRays';
import FloatingLines from '../components/FloatingLines';

const ComingSoon = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#020617',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Background Effects Container */}
            <div style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}>
                {/* Animated Grid Background */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    opacity: 0.8,
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }} />

                <LightRays
                    raysOrigin="bottom-center"
                    raysColor="#475569"
                    raysColor2="#1e293b"
                    raysColor3="#334155"
                    raysSpeed={0.1}
                    rayLength={0.4}
                    lightSpread={0.3}
                    saturation={0}
                    className="opacity-[0.01]"
                />

                <FloatingLines
                    linesGradient={['#334155', '#475569', '#1e293b']}
                    animationSpeed={0.3}
                    style={{ opacity: 0.15 }}
                />

                {/* Glowing Ambience Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.01, 0.03, 0.01],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        right: '-5%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(71, 85, 105, 0.02) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />

                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.005, 0.02, 0.005],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(71, 85, 105, 0.01) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />
            </div>

            <motion.div
                className="coming-soon-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: windowWidth > 992 ? '1000px' : '580px',
                    width: '92%',
                    padding: windowWidth > 992 ? '60px' : '60px 40px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '40px',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.7)',
                    display: 'grid',
                    gridTemplateColumns: windowWidth > 992 ? '1fr 1fr' : '1fr',
                    gap: '60px',
                    alignItems: 'center',
                    textAlign: windowWidth > 992 ? 'left' : 'center'
                }}
            >
                {/* Left Column: Branding & Info */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: windowWidth > 992 ? 'flex-start' : 'center' }}>
                    {/* Header Badge */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '100px',
                            color: '#94a3b8',
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            marginBottom: '24px'
                        }}
                    >
                        <Construction size={16} /> WORK IN PROGRESS
                    </motion.div>

                    {/* Header Icon */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            justifyContent: windowWidth > 992 ? 'flex-start' : 'center',
                            marginBottom: '32px'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '90px',
                            height: '90px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '28px',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            <Code2 size={40} color="#94a3b8" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    inset: '-8px',
                                    border: '1px dashed rgba(255, 255, 255, 0.1)',
                                    borderRadius: '32px'
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div variants={itemVariants}>
                        <h1 style={{
                            fontSize: 'clamp(32px, 5vw, 44px)',
                            fontWeight: '900',
                            color: 'white',
                            marginBottom: '16px',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1
                        }}>
                            Crafting <span className="gradient-text">Something Great.</span>
                        </h1>
                        <p style={{ color: '#94a3b8', fontSize: '17px', lineHeight: '1.6', fontWeight: 300, maxWidth: '500px' }}>
                            I'm currently building this module with <span style={{ color: '#fff' }}>modern tech</span> and <span style={{ color: '#fff' }}>precision design</span>. Stay tuned for the reveal.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Progress & Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Progress Indicators */}
                    <motion.div variants={itemVariants} style={{ textAlign: 'left', width: '100%' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '11px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Sparkles size={12} color="#ec4899" /> Feature Implementation</span>
                                <span style={{ color: '#ec4899' }}>85%</span>
                            </div>
                            <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '100px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '85%' }}
                                    transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                                    style={{ height: '100%', background: 'linear-gradient(90deg, #ec4899, #8b5cf6)', borderRadius: '100px' }}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '11px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Cpu size={12} color="#8b5cf6" /> UI/UX Optimization</span>
                                <span style={{ color: '#8b5cf6' }}>65%</span>
                            </div>
                            <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '100px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '65%' }}
                                    transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
                                    style={{ height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #2dd4bf)', borderRadius: '100px' }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Status Items */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '12px'
                        }}
                    >
                        <div style={{
                            padding: '16px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Terminal size={16} color="#94a3b8" />
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800' }}>Phase</div>
                                <div style={{ fontSize: '13px', color: 'white', fontWeight: '600', whiteSpace: 'nowrap' }}>Beta</div>
                            </div>
                        </div>
                        <div style={{
                            padding: '16px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Shield size={16} color="#94a3b8" />
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800' }}>Status</div>
                                <div style={{ fontSize: '13px', color: 'white', fontWeight: '600', whiteSpace: 'nowrap' }}>Secured</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Button */}
                    <motion.div variants={itemVariants}>
                        <button
                            onClick={() => navigate('/projects')}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '14px 28px',
                                borderRadius: '14px',
                                fontSize: '14px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3)',
                                width: windowWidth > 992 ? 'auto' : '100%',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.3)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <div style={{ color: '#94a3b8', display: 'flex' }} id="btn-icon">
                                <ArrowLeft size={16} color="currentColor" />
                            </div>
                            Explore More Work
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
