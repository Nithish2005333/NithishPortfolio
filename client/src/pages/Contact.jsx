import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import SendButton from '../components/SendButton';
import BackButton from '../components/BackButton';
import FloatingLines from '../components/FloatingLines';
import LightRays from '../components/LightRays';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailjs.init("ZmSuhjNFIcQNUj-uy");
    }, []);

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (loading) return;

        setLoading(true);
        setStatus('');

        try {
            const templateParams = {
                from_name: formData.from_name,
                from_email: formData.from_email,
                mobile: formData.mobile,
                message: formData.message,
                time: new Date().toLocaleString('en-IN', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                })
            };

            const result = await emailjs.send(
                "service_ll4hsae",
                "template_cao4qa8",
                templateParams,
                "ZmSuhjNFIcQNUj-uy"
            );

            if (result.status === 200) {
                setStatus('success');
                setFormData({ from_name: '', from_email: '', mobile: '', message: '' });
                setTimeout(() => setStatus(''), 7000);
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactMethods = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'nithishwaran2005333@gmail.com',
            link: 'mailto:nithishwaran2005333@gmail.com',
            color: '#0d9488'
        },
        {
            icon: <Phone size={24} />,
            label: 'Phone',
            value: '+91 63799 69641',
            link: 'tel:+916379969641',
            color: '#14b8a6'
        },
        {
            icon: <MapPin size={24} />,
            label: 'Location',
            value: 'Karur, Tamil Nadu',
            link: 'https://maps.google.com/?q=Karur,Tamil+Nadu',
            color: '#2dd4bf'
        }
    ];

    const socials = [
        { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/nithishwaran-a-05655725b", color: '#0077b5', label: 'LINKEDIN' },
        { icon: <Github size={20} />, link: "https://github.com/Nithish2005333", color: '#ffffff', label: 'GITHUB' },
        { icon: <Instagram size={20} />, link: "https://instagram.com/itzz_nithish_", color: '#e4405f', label: 'INSTAGRAM' }
    ];

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            background: '#020617',
            color: 'white',
            fontFamily: "'Inter', sans-serif",
            overflowX: 'hidden'
        }}>
            <Navbar />
            <BackButton />

            {/* Background Effects */}
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
                        x: [0, 50, 0],
                        y: [0, -30, 0]
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
                        x: [0, -40, 0],
                        y: [0, 40, 0]
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

            {/* Main Content Container */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '140px 24px 80px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        background: 'rgba(13, 148, 136, 0.1)',
                        border: '1px solid rgba(13, 148, 136, 0.2)',
                        borderRadius: '100px',
                        color: '#2dd4bf',
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '20px',
                        letterSpacing: '0.05em'
                    }}>
                        <Sparkles size={14} /> GET IN TOUCH
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 72px)',
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        marginBottom: '16px',
                        lineHeight: 1
                    }}>
                        Let's build something <span className="gradient-text">together.</span>
                    </h1>
                    <p style={{
                        color: '#94a3b8',
                        fontSize: 'clamp(16px, 2vw, 19px)',
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontWeight: 300
                    }}>
                        Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                {/* Grid Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth > 992 ? 'repeat(2, 1fr)' : '1fr',
                    gap: '40px',
                    width: '100%',
                    alignItems: 'start'
                }}>

                    {/* Left Column: Info & Socials */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth > 640 ? 'repeat(2, 1fr)' : '1fr',
                            gap: '16px'
                        }}>
                            {contactMethods.map((method, idx) => (
                                <motion.a
                                    key={idx}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{
                                        padding: '24px',
                                        background: 'rgba(15, 23, 42, 0.85)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        borderRadius: '24px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '20px',
                                        gridColumn: idx === 0 && window.innerWidth > 640 ? 'span 2' : 'span 1'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(13, 148, 136, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(13, 148, 136, 0.2)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '16px',
                                        background: 'rgba(13, 148, 136, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        boxShadow: '0 8px 20px rgba(13, 148, 136, 0.15)',
                                        flexShrink: 0
                                    }}>
                                        {method.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '4px' }}>{method.label}</div>
                                        <div style={{ fontSize: '15px', color: 'white', fontWeight: 600, wordBreak: 'break-word' }}>{method.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Space Filler: Availability & Response Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                padding: '32px',
                                background: 'rgba(15, 23, 42, 0.85)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(13, 148, 136, 0.3)',
                                borderRadius: '28px',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: '#2dd4bf',
                                    boxShadow: '0 0 12px #2dd4bf',
                                    animation: 'pulse 2s infinite'
                                }}></div>
                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#2dd4bf', letterSpacing: '0.15em' }}>CURRENTLY AVAILABLE</span>
                            </div>

                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
                                Available for new <span className="gradient-text">projects</span> & collaborations.
                            </h3>

                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                                Open to creative ideas and opportunities. Typical response: <span style={{ color: 'white', fontWeight: 600 }}>&lt; 12 hours</span>.
                            </p>

                            <style>{`
                                @keyframes pulse {
                                    0% { transform: scale(1); opacity: 1; }
                                    50% { transform: scale(1.5); opacity: 0.5; }
                                    100% { transform: scale(1); opacity: 1; }
                                }
                            `}</style>
                        </motion.div>

                        {/* Social Links Card: Filling the area with a premium container */}
                        {/* Social Links Heading */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.35 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                marginBottom: '0px',
                                marginTop: '12px'
                            }}
                        >
                            <div style={{ height: '1px', width: '24px', background: 'rgba(255, 255, 255, 0.1)' }} />
                            <span style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.15em' }}>CONNECT SOCIALLY</span>
                            <div style={{ height: '1px', width: '24px', background: 'rgba(255, 255, 255, 0.1)' }} />
                        </motion.div>

                        {/* Social Links - Container removed, centered icons remaining */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '16px',
                                marginTop: '4px',
                                padding: '10px 0'
                            }}
                        >
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -4 }}
                                    style={{
                                        width: '54px',
                                        height: '54px',
                                        borderRadius: '16px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: social.color,
                                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.borderColor = social.color;
                                        e.currentTarget.style.boxShadow = `0 10px 30px ${social.color}33`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{
                            background: 'rgba(15, 23, 42, 0.75)',
                            backdropFilter: 'blur(15px)',
                            padding: '40px',
                            borderRadius: '32px',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Subtle inner card decor removed for maximum clarity */}

                        <form ref={formRef} onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1, display: 'grid', gap: '24px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 640 ? '1fr 1fr' : '1fr', gap: '20px' }}>
                                <div className="input-field">
                                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>YOUR NAME</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '14px', color: 'white', fontSize: '14px', outline: 'none' }}
                                        onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="input-field">
                                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>YOUR EMAIL</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '14px', color: 'white', fontSize: '14px', outline: 'none' }}
                                        onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="input-field">
                                <label style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>MOBILE NUMBER</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '14px', color: 'white', fontSize: '14px', outline: 'none' }}
                                    onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                    placeholder="+91 00000 00000"
                                />
                            </div>

                            <div className="input-field">
                                <label style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>MESSAGE</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    style={{ width: '100%', padding: '16px 18px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '18px', color: 'white', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'inherit' }}
                                    onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                <SendButton disabled={loading} style={{ width: '100%', maxWidth: '180px', height: '48px' }} />
                            </div>
                        </form>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{ marginTop: '20px', padding: '12px', background: 'rgba(20, 184, 166, 0.1)', border: '1px solid rgba(20, 184, 166, 0.2)', borderRadius: '12px', textAlign: 'center', color: '#2dd4bf', fontSize: '13px', fontWeight: 500 }}
                                >
                                    Message delivered successfully! ✨
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{ marginTop: '20px', padding: '12px', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', borderRadius: '12px', textAlign: 'center', color: '#fb7185', fontSize: '13px', fontWeight: 500 }}
                                >
                                    Something went wrong. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            <footer style={{
                padding: '60px 24px 40px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                marginTop: '40px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'white', marginBottom: '8px', letterSpacing: '0.05em' }}>
                            NITHISHWARAN <span className="gradient-text">A.</span>
                        </h3>
                        <p style={{ color: '#64748b', fontSize: '13px', maxWidth: '450px', margin: '0 auto', lineHeight: 1.6 }}>
                            I'm just a developer who loves turning complex ideas into digital realities. Whether it's a small tweak or a big project, I handle every pixel with care.
                        </p>
                    </div>

                    <div style={{ height: '1px', width: '100px', background: 'rgba(255, 255, 255, 0.05)', margin: '0 auto 24px' }} />

                    <p style={{ color: '#475569', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        © {new Date().getFullYear()} NITHISHWARAN A. &bull; ALL RIGHTS RESERVED
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
