import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LogoLoop from '../components/LogoLoop';
import SkillCarousel from '../components/SkillCarousel';
import { ArrowRight, Code2, Database, Smartphone, Palette, Globe, Zap, Layout, Layers, ShieldCheck, Activity } from 'lucide-react';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
    SiExpress, SiTailwindcss, SiSass, SiSolidity, SiEthereum,
    SiWeb3Dotjs, SiAndroidstudio, SiFigma, SiAdobexd, SiMysql, SiTypescript,
    SiPython, SiGit, SiCanva, SiC
} from 'react-icons/si';
import { FaJava, FaFileExcel, FaFileWord, FaFilePowerpoint } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import DiscoverButton from '../components/DiscoverButton';

const About = () => {
    const skills = [
        {
            name: 'Frontend Development',
            level: 90,
            icon: <Code2 size={24} />,
            color: '#6366F1',
            description: 'Building dynamic, responsive web apps with React, modern JavaScript, and clean component architectures.',
            features: [
                { icon: <Layout size={20} />, title: 'Component Architecture', text: 'Reusable components, clean separation, and scalable folder structures.' },
                { icon: <Layers size={20} />, title: 'State Management', text: 'Context, hooks, and predictable data flow for complex UIs.' },
                { icon: <ShieldCheck size={20} />, title: 'Performance', text: 'Code splitting, lazy loading, and optimized rendering patterns.' },
                { icon: <Activity size={20} />, title: 'Responsive Design', text: 'Mobile-first, flexible layouts, and cross-browser compatibility.' }
            ]
        },
        {
            name: 'Backend & Databases',
            level: 85,
            icon: <Database size={24} />,
            color: '#22C55E',
            description: 'Designing REST APIs and data layers using Node.js, Express, MongoDB, and SQL with a focus on reliability.',
            features: [
                { icon: <Code2 size={20} />, title: 'API Architecture', text: 'Structured routing, reusable services, middleware layering.' },
                { icon: <Layers size={20} />, title: 'Data Modeling', text: 'Schema planning, indexing strategies, relational mapping.' },
                { icon: <ShieldCheck size={20} />, title: 'Security & Auth', text: 'JWT authentication, role-based authorization, encryption.' },
                { icon: <Activity size={20} />, title: 'Performance & Scaling', text: 'Caching strategies, query optimization, monitoring.' }
            ]
        },
        {
            name: 'Mobile Development',
            level: 75,
            icon: <Smartphone size={24} />,
            color: '#EC4899',
            description: 'Creating Android experiences with Java/Kotlin and Android Studio, from UI flows to API integration.',
            features: [
                { icon: <Layout size={20} />, title: 'UI/UX Flows', text: 'Intuitive navigation, Material Design, and smooth transitions.' },
                { icon: <Layers size={20} />, title: 'Native Integration', text: 'Platform APIs, hardware access, and system services.' },
                { icon: <ShieldCheck size={20} />, title: 'API Integration', text: 'REST clients, background sync, and offline support.' },
                { icon: <Activity size={20} />, title: 'Testing & Debug', text: 'Unit tests, UI tests, and performance profiling.' }
            ]
        },
        {
            name: 'UI / UX & Product',
            level: 80,
            icon: <Palette size={24} />,
            color: '#F97316',
            description: 'Designing intuitive interfaces in Figma and Adobe XD, balancing aesthetics, usability, and brand identity.',
            features: [
                { icon: <Layout size={20} />, title: 'Visual Design', text: 'Typography, color systems, and consistent design tokens.' },
                { icon: <Layers size={20} />, title: 'Prototyping', text: 'Interactive mockups, user flows, and design handoff.' },
                { icon: <ShieldCheck size={20} />, title: 'Usability', text: 'User research, accessibility, and usability testing.' },
                { icon: <Activity size={20} />, title: 'Design Systems', text: 'Component libraries, documentation, and versioning.' }
            ]
        }
    ];

    const techLogos = [
        // MERN Stack
        { node: <SiMongodb color="#47A248" />, title: "MongoDB" },
        { node: <SiExpress color="#FFFFFF" />, title: "Express" },
        { node: <SiReact color="#61DAFB" />, title: "React" },
        { node: <SiNodedotjs color="#339933" />, title: "Node.js" },

        // Core Web Technologies
        { node: <SiHtml5 color="#E34F26" />, title: "HTML5" },
        { node: <SiCss3 color="#1572B6" />, title: "CSS3" },
        { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript" },
        { node: <SiTypescript color="#3178C6" />, title: "TypeScript" },

        // Styling Frameworks
        { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS" },
        { node: <SiSass color="#CC6699" />, title: "Sass" },

        // Programming Languages
        { node: <SiPython color="#3776AB" />, title: "Python" },
        { node: <FaJava color="#FFFFFF" />, title: "Java" },
        { node: <SiC color="#A8B9CC" />, title: "C" },

        // Database & Tools
        { node: <SiMysql color="#4479A1" />, title: "MySQL" },
        { node: <SiGit color="#F05032" />, title: "Git" },

        // Mobile Development
        { node: <SiAndroidstudio color="#3DDC84" />, title: "Android Studio" },

        // Design Tools
        { node: <SiFigma color="#F24E1E" />, title: "Figma" },
        { node: <SiAdobexd color="#FF61F6" />, title: "Adobe XD" },
        { node: <SiCanva color="#00C4CC" />, title: "Canva" },

        // Blockchain
        { node: <SiSolidity color="#FFFFFF" />, title: "Solidity" },
        { node: <SiEthereum color="#3C3C3D" />, title: "Ethereum" },
        { node: <SiWeb3Dotjs color="#F16822" />, title: "Web3.js" },

        // Office Tools
        { node: <FaFileExcel color="#217346" />, title: "Excel" },
        { node: <FaFileWord color="#2B579A" />, title: "Word" },
        { node: <FaFilePowerpoint color="#B7472A" />, title: "PowerPoint" },
    ];

    const timeline = [
        {
            year: '2019 - 2020',
            title: 'SSLC – Govt Boys Hr Sec School, Vangal (Karur)',
            description: 'Completed SSLC with 81.4%, building a strong foundation in core academics.'
        },
        {
            year: '2021 - 2022',
            title: 'HSC – Govt Boys Hr Sec School, Vangal (Karur)',
            description: 'Finished Higher Secondary with 72.8%, focusing on Computer Science stream.'
        },
        {
            year: '2022 - Present',
            title: 'B.E. CSE – Anna University Regional Campus, Coimbatore',
            description: 'Pursuing Bachelor of Computer Science and Engineering with a CGPA of 8.06 (up to 6th semester).'
        },
        {
            year: '2023',
            title: 'Full Stack Development Intern – PARKQWICK Pvt. Ltd.',
            description: 'Worked on MERN stack features for a smart parking and mobility platform, contributing to real-world product development.'
        },
        {
            year: 'Projects',
            title: 'Hands‑on Project Experience',
            description:
                'Built Placement App (MERN), Car Rental web app, Portfolio sites, Student Management System, Web Tech Record, Blockchain Quiz DApp, and Podcast Android app.'
        },
        {
            year: 'Achievements & Certifications',
            title: 'Sports & Tech Milestones',
            description:
                'Represented Tamil Nadu in national-level throwball and school games competitions; completed professional certifications in MongoDB, Oracle Cloud Infrastructure (OCI) Blockchain, Android App Development, AI Fluency, and various other cutting-edge technologies.'
        }
    ];

    return (
        <div style={{ paddingBottom: '40px' }}>
            <BackButton />
            <Navbar />

            {/* Compact Hero Section */}
            <section className="hero" style={{ minHeight: '35vh', paddingTop: '100px', paddingBottom: '40px', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }} />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 1, margin: '0 auto' }}
                >
                    <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 7vw, 72px)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                        About <span className="gradient-text" style={{ fontStyle: 'italic' }}>Me</span>
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: '18px', marginBottom: '0', color: '#cbd5e1', fontWeight: 300 }}>
                        <span style={{ color: '#6366f1' }}>//</span> Engineering scalable solutions and crafting intuitive digital experiences.
                    </p>
                </motion.div>
            </section>

            {/* Main Content Sections */}
            <div className="about-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Story Section - Modern Two-Column Layout */}
                <section style={{ marginBottom: '100px' }}>
                    <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '32px', marginBottom: '32px' }}>
                        {/* Left Column - Deep Bio Card */}
                        <motion.div
                            className="about-bio-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.7) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '32px',
                                padding: '48px 40px',
                                position: 'relative',
                                overflow: 'hidden',
                                backdropFilter: 'blur(20px)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Visual Accents */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '4px',
                                background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)'
                            }} />

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '8px 16px',
                                    background: 'rgba(99, 102, 241, 0.15)',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(99, 102, 241, 0.3)',
                                    marginBottom: '28px'
                                }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#818cf8',
                                        boxShadow: '0 0 10px #6366f1'
                                    }} />
                                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#c7d2fe', letterSpacing: '0.1em' }}>ENGINEERING THE FUTURE</span>
                                </div>

                                <h2 style={{ fontSize: '42px', marginBottom: '24px', fontWeight: 900, lineHeight: 1.1, color: 'white' }}>
                                    Who <span className="gradient-text">I Am</span>
                                </h2>

                                <div style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.8 }}>
                                    <p style={{ marginBottom: '20px', fontSize: '19px', color: '#f8fafc', fontWeight: 600, borderLeft: '4px solid #6366f1', paddingLeft: '20px' }}>
                                        Hi! I'm a passionate Computer Science student and developer driven by a deep curiosity for building robust software systems.
                                    </p>
                                    <p style={{ marginBottom: '16px' }}>
                                        I thrive on the challenge of translating complex requirements into elegant, efficient, and user-centric solutions. My journey is defined by a relentless pursuit of knowledge—mastering the intricacies of web development and optimizing algorithms.
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        With a hands-on approach honed through diverse projects and internships, I don't just write code; I engineer value. I am committed to writing clean, maintainable code and fostering an environment of innovation.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Quick Stats & Info */}
                        <div className="about-stats-grid" style={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gap: '16px' }}>
                            {[
                                { label: 'Projects Completed', value: '15+', icon: <Globe size={24} />, color: '#6366f1' },
                                { label: 'Core Technologies', value: '20+', icon: <Zap size={24} />, color: '#ec4899' },
                                { label: 'Years Experience', value: '2+', icon: <Code2 size={24} />, color: '#8b5cf6' },
                                { label: 'Current CGPA', value: '8.06', icon: <Activity size={24} />, color: '#10b981' }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="about-stat-card"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -5, background: 'rgba(30, 41, 59, 0.7)', transition: { duration: 0.2 } }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                        padding: '24px',
                                        background: 'rgba(15, 23, 42, 0.6)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '24px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                        cursor: 'default'
                                    }}
                                >
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        background: `rgba(${stat.color === '#6366f1' ? '99, 102, 241' : stat.color === '#ec4899' ? '236, 72, 153' : stat.color === '#8b5cf6' ? '139, 92, 246' : '16, 185, 129'}, 0.12)`,
                                        border: `1px solid ${stat.color}55`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: stat.color,
                                        boxShadow: `0 0 15px ${stat.color}22`
                                    }}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '28px', fontWeight: 900, color: 'white', lineHeight: 1 }}>{stat.value}</div>
                                        <div style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '6px', fontWeight: 600, letterSpacing: '0.02em' }}>{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Full-Width Quote/Highlight Section */}
                    <motion.div
                        className="about-quote"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            padding: '32px 40px',
                            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.08), rgba(236, 72, 153, 0.08))',
                            borderRadius: '24px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                            <div style={{ fontSize: '24px', color: '#6366f1', opacity: 0.6 }}>"</div>
                            <p style={{ fontSize: '17px', color: '#f1f5f9', fontStyle: 'italic', maxWidth: '850px', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                                I don't just solve problems; I strive to understand the 'why' behind them, enabling me to build solutions that aren't just functional, but future-proof.
                            </p>
                            <div style={{ fontSize: '24px', color: '#ec4899', opacity: 0.6 }}>"</div>
                        </div>
                    </motion.div>
                </section>

                {/* Skills & Tech Section */}
                <section className="about-skills" style={{ marginBottom: '100px' }}>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'center', marginBottom: '20px', fontWeight: 800 }}>
                        Core <span className="gradient-text">Skills</span>
                    </h2>
                    <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto 50px', fontSize: '18px', textAlign: 'center', lineHeight: 1.6, fontWeight: 400 }}>
                        Specialized expertise across multiple domains, from building dynamic web applications to crafting intuitive user experiences.
                    </p>

                    <SkillCarousel skills={skills} />

                    <div className="about-tech" style={{ textAlign: 'center', marginBottom: '50px', marginTop: '120px' }}>
                        <h3 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px', fontWeight: 800 }}>
                            Technologies <span className="gradient-text">I Use</span>
                        </h3>
                        <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto', fontSize: '18px', lineHeight: 1.6 }}>
                            A comprehensive toolkit of modern technologies, creative software, and productivity tools.
                        </p>
                    </div>

                    <div style={{
                        position: 'relative',
                        padding: '22px 32px',
                        background: 'rgba(15, 23, 42, 0.9)',
                        backdropFilter: 'blur(24px)',
                        borderRadius: '24px',
                        border: '1px solid rgba(148, 163, 184, 0.25)',
                        boxShadow: '0 24px 60px rgba(15, 23, 42, 0.7)',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '80px',
                                background: 'linear-gradient(to right, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%)',
                                zIndex: 2
                            }} />
                            <div style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '80px',
                                background: 'linear-gradient(to left, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%)',
                                zIndex: 2
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 3 }}>
                            <LogoLoop
                                logos={techLogos.slice(0, Math.ceil(techLogos.length / 2))}
                                speed={40}
                                direction="left"
                                pauseOnHover={true}
                                isScrollable={true}
                                scaleOnHover={true}
                                className="logoloop--tech-showcase"
                                logoHeight={36}
                                gap={24}
                            />
                            <LogoLoop
                                logos={techLogos.slice(Math.ceil(techLogos.length / 2))}
                                speed={45}
                                direction="right"
                                pauseOnHover={true}
                                isScrollable={true}
                                scaleOnHover={true}
                                className="logoloop--tech-showcase"
                                logoHeight={36}
                                gap={24}
                            />
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section style={{ marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>
                        My <span className="gradient-text">Timeline</span>
                    </h2>
                    <div
                        className="about-timeline"
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            position: 'relative',
                            paddingLeft: '32px'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                left: '16px',
                                top: 0,
                                bottom: 0,
                                width: '2px',
                                background: 'linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(236,72,153,0.4))',
                                opacity: 0.9
                            }}
                        />
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ position: 'relative', marginBottom: index === timeline.length - 1 ? 0 : 28 }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '8px',
                                        top: '18px',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '9999px',
                                        background: '#020617',
                                        border: '2px solid var(--primary)',
                                        boxShadow: '0 0 0 4px rgba(99,102,241,0.35)'
                                    }}
                                />
                                <div
                                    className="glass-card"
                                    style={{
                                        padding: '18px 22px 20px',
                                        marginLeft: '24px',
                                        border: '1px solid rgba(148, 163, 184, 0.35)',
                                        background: 'rgba(15, 23, 42, 0.95)'
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.12em',
                                            color: 'var(--primary)',
                                            marginBottom: '6px'
                                        }}
                                    >
                                        {item.year}
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '17px',
                                            fontWeight: 700,
                                            marginBottom: '6px',
                                            color: 'white'
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '14px',
                                            lineHeight: 1.5,
                                            margin: 0
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card glow"
                        style={{
                            padding: '60px 40px',
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))'
                        }}
                    >
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '16px' }}>
                            Let's Work <span className="gradient-text">Together</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <DiscoverButton text="Get In Touch" to="/contact" />
                        </div>
                    </motion.div>
                </section>
            </div>

            {/* Compact Footer */}
            <footer style={{ padding: '40px 24px 20px', textAlign: 'center', marginTop: '60px', opacity: 0.7 }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    © {new Date().getFullYear()} Nithishwaran A. Built with React & Framer Motion
                </p>
            </footer>
        </div>
    );
};

export default About;
