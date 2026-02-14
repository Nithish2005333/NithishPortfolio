import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X, Terminal, ArrowLeft } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">
                {/* Logo or Back Button - on mobile, back button replaces logo when not on home */}
                {isMobile && location.pathname !== '/' ? (
                    <button
                        className="header-segment navbar-back-btn"
                        onClick={() => navigate(-1)}
                        aria-label="Go back"
                    >
                        <ArrowLeft size={20} />
                        <span className="navbar-back-text">Back</span>
                    </button>
                ) : (
                    <Link to="/" className="header-segment logo-segment">
                        <div className="logo-icon logo-icon-desktop">
                            <Terminal size={18} />
                        </div>
                        <span className="logo-text">NITHISH<span className="logo-accent">.DEV</span></span>
                    </Link>
                )}

                {/* Right Side Segments */}
                <div className="header-right">
                    {/* Navigation Segment */}
                    <nav className="header-segment nav-segment">
                        <ul className="nav-links-list">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className={`nav-item-link ${isActive ? 'active' : ''}`}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-bg"
                                                    className="active-bg-glow"
                                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Status Segment */}
                    <div className="header-segment cta-segment">
                        <Link to="/contact" className="status-indicator">
                            <span className="status-pulse"></span>
                            <span className="status-text">Available</span>
                        </Link>
                        <button className="mobile-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-nav-overlay"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <div className="mobile-nav-content">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`mobile-nav-link ${isActive ? 'mobile-nav-active' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
