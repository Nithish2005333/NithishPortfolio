import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import DiscoverButton from '../components/DiscoverButton';
import { Code2, Globe, Palette, Smartphone, Sparkles, Zap, ArrowRight, Github, Database } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code2 size={32} />,
            title: 'Web Development',
            description: 'Building responsive, performant web applications using modern frameworks like React, Next.js, and Node.js.',
            features: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Platforms', 'Content Management Systems']
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Mobile Development',
            description: 'Creating native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
            features: ['Android Apps', 'Cross-platform Solutions', 'App Optimization', 'UI/UX Design']
        },
        {
            icon: <Database size={32} />,
            title: 'Backend Development',
            description: 'Designing and implementing robust server-side solutions with RESTful APIs and database management.',
            features: ['REST API Development', 'Database Design', 'Authentication & Security', 'Cloud Integration']
        },
        {
            icon: <Palette size={32} />,
            title: 'UI/UX Design',
            description: 'Crafting intuitive and visually appealing interfaces that enhance user engagement and satisfaction.',
            features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
        },
        {
            icon: <Globe size={32} />,
            title: 'Full Stack Solutions',
            description: 'End-to-end development services covering both frontend and backend for complete web solutions.',
            features: ['MERN Stack', 'Real-time Applications', 'Third-party Integrations', 'Performance Optimization']
        },
        {
            icon: <Zap size={32} />,
            title: 'Consulting & Support',
            description: 'Technical consultation, code reviews, and ongoing support to ensure your projects succeed.',
            features: ['Code Review', 'Performance Audit', 'Technical Consulting', 'Maintenance & Support']
        }
    ];

    const process = [
        { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
        { step: '02', title: 'Planning', description: 'Creating a detailed roadmap and timeline' },
        { step: '03', title: 'Design', description: 'Crafting beautiful and functional interfaces' },
        { step: '04', title: 'Development', description: 'Building with clean, scalable code' },
        { step: '05', title: 'Testing', description: 'Ensuring quality and performance' },
        { step: '06', title: 'Launch', description: 'Deploying and monitoring your project' }
    ];

    return (
        <div>
            {/* Back Button */}
            <BackButton />
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '900px', textAlign: 'center' }}
                >
                    <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}>
                        My <span className="gradient-text">Services</span>
                    </h1>
                    <p className="hero-subtitle">
                        Comprehensive development solutions tailored to bring your ideas to life
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="grid-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="glass-card glow" style={{ padding: '40px', height: '100%' }}>
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    marginBottom: '24px'
                                }}>
                                    {service.icon}
                                </div>

                                <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>
                                    {service.title}
                                </h3>

                                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
                                    {service.description}
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{
                                            color: 'var(--text-secondary)',
                                            marginBottom: '12px',
                                            paddingLeft: '24px',
                                            position: 'relative'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--primary)',
                                                fontWeight: 700
                                            }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="section" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">My <span className="gradient-text">Process</span></h2>
                    <p className="section-subtitle">
                        A structured approach to delivering exceptional results
                    </p>

                    <div className="grid-3">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass-card"
                                style={{ padding: '32px', textAlign: 'center' }}
                            >
                                <div style={{
                                    fontSize: '48px',
                                    fontWeight: 900,
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    marginBottom: '16px'
                                }}>
                                    {item.step}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Tech Stack Section */}
            <section className="section">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Technologies I <span className="gradient-text">Use</span></h2>
                    <p className="section-subtitle">
                        Modern tools and frameworks to build robust solutions
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS',
                            'Java', 'Android Studio', 'Git', 'Figma', 'REST APIs', 'Redux', 'SASS', 'Webpack'].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.03 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card"
                                    style={{ padding: '16px 24px', cursor: 'default' }}
                                >
                                    <span style={{ fontSize: '16px', fontWeight: 600 }}>{tech}</span>
                                </motion.div>
                            ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card glow"
                    style={{
                        padding: '80px 40px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))'
                    }}
                >
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '24px' }}>
                        Ready to Start Your <span className="gradient-text">Project?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Let's discuss your requirements and create something amazing together.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <DiscoverButton text="Get Started" to="/contact" />
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                    © {new Date().getFullYear()} Nithishwaran A. Built with React & Framer Motion
                </p>
            </footer>
        </div>
    );
};

export default Services;
