import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LogoLoop from '../components/LogoLoop';
import LearnMoreButton from '../components/LearnMoreButton';
import DiscoverButton from '../components/DiscoverButton';
import VariableProximity from '../components/VariableProximity';
import ProfileCard from '../components/ProfileCard';
import DownloadButton from '../components/DownloadButton';
import ElectricBorder from '../components/ElectricBorder';
import ChromaGrid from '../components/ChromaGrid';
import { ArrowRight, Code2, Sparkles, Smartphone, Zap, Globe, Cpu, Terminal, Braces, Hash, Monitor, Palette } from 'lucide-react';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
    SiExpress, SiTailwindcss, SiSass, SiSolidity, SiEthereum,
    SiWeb3Dotjs, SiAndroidstudio, SiApple, SiFigma, SiAdobexd, SiMysql, SiTypescript,
    SiPython, SiGit, SiCanva, SiGithub, SiLinkedin, SiInstagram, SiGmail
} from 'react-icons/si';
import { FaJava, FaFileExcel, FaFileWord, FaFilePowerpoint } from 'react-icons/fa';

import { useState, useRef, useMemo } from 'react';

const Home = () => {
    const heroRef = useRef(null);
    const projects = [
        {
            title: "Nimbus Cloud",
            subtitle: "React • Vercel • Cloud Services",
            handle: "Cloud Platform",
            category: "Web Application",
            description: "A modern cloud platform showcasing seamless deployment and scalable architecture for web applications.",
            url: "https://nimbus-cloud-liard.vercel.app/",
            github: "https://github.com/Nithish2005333/NimbusCloud.git",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1771000699/690b4fa1-152f-4fad-8339-9b41b76046f6.png",
            borderColor: "#0EA5E9",
            gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
            icon: <Globe size={40} />
        },
        {
            title: "Sabarnaa Printers",
            subtitle: "React • Tailwind • Cloudinary",
            handle: "Business Website",
            category: "Commercial",
            description: "A premium digital gateway for Sabarnaa Printers, highlighting high-end offset printing and innovative packaging solutions.",
            url: "https://sabarnaa-printerz.vercel.app/",
            github: "https://github.com/Nithish2005333/sabarnaa-printerz.git",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983590/d824c9cd-1f83-4877-b759-5b6c92bc5f0a.png",
            borderColor: "#F43F5E",
            gradient: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
            icon: <Globe size={40} />
        },
        {
            title: "Placement App",
            subtitle: "React • Node.js • MongoDB • Express",
            handle: "Full Stack App",
            category: "Platform",
            description: "An integrated career management hub providing students and admins with verified profile synchronization.",
            url: "https://placementapp-0htf.onrender.com/",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983002/Screenshot_2026-02-13_165525_ttrhif.png",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            icon: <Code2 size={40} />
        },
        // {
        //     title: "Car Rental",
        //     subtitle: "React • SCSS • JavaScript",
        //     handle: "Booking Engine",
        //     category: "Web Application",
        //     description: "A feature-complete booking engine for premium car rentals, featuring dynamic filtering and checkout flow.",
        //     url: "https://car-rental-one-taupe.vercel.app/",
        //     image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983003/Screenshot_2026-02-13_165628_ottkp8.png",
        //     borderColor: "#EC4899",
        //     gradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
        //     icon: <Smartphone size={40} />
        // }
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

    const [techRow1, techRow2] = useMemo(() => {
        const mid = Math.ceil(techLogos.length / 2);
        return [techLogos.slice(0, mid), techLogos.slice(mid)];
    }, [techLogos]);

    return (
        <div className="home-page">
            {/* Background LightRays - Premium consistency */}


            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '100px 20px 60px' }}>

                {/* Single Developer Symbol Background */}
                <div style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.04, zIndex: 0 }}>
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Code2 size={500} color="var(--primary)" />
                    </motion.div>
                </div>

                <div style={{ maxWidth: '1400px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '100px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>

                    {/* Left Side - Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: '1', minWidth: '350px', display: 'flex', justifyContent: 'center' }}
                    >
                        <ProfileCard />
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        className="hero-content-block"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={{ flex: '1.5', minWidth: '350px' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginBottom: '16px' }}>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{
                                    fontSize: 'clamp(40px, 7vw, 70px)',
                                    fontWeight: 600,
                                    color: 'white',
                                    marginBottom: '4px',
                                    fontFamily: "'Space Grotesk', sans-serif"
                                }}
                            >
                                Hi, I am
                            </motion.h2>

                            <div style={{
                                fontSize: 'clamp(60px, 11vw, 150px)',
                                fontWeight: 900,
                                lineHeight: 0.8,
                                fontFamily: "'Space Grotesk', sans-serif"
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block',
                                    paddingBottom: '5px'
                                }}>
                                    <VariableProximity
                                        label="Nithishwaran"
                                        className="proximity-title"
                                        fromFontVariationSettings="'wght' 300"
                                        toFontVariationSettings="'wght' 900"
                                        containerRef={heroRef}
                                        radius={200}
                                        falloff="exponential"
                                    />
                                </div>
                            </div>
                        </div>

                        <p style={{
                            fontSize: 'clamp(18px, 1.8vw, 24px)',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.4,
                            marginBottom: '32px',
                            maxWidth: '750px',
                            fontWeight: 300
                        }}>
                            Building <span style={{ color: 'white', fontWeight: 600 }}>seamless digital experiences</span> through
                            <span className="gradient-text" style={{ fontWeight: 700 }}> clean code</span> and <span style={{ color: 'white', fontWeight: 600 }}>modern design</span>.
                            Transforming complex technical ideas into <span style={{ color: 'white' }}>elegant, high-performance solutions</span> for the modern web.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                                <DownloadButton />
                                <Link
                                    to="/contact"
                                    style={{
                                        textDecoration: 'none',
                                        padding: '10px 28px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        borderRadius: '10px',
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        letterSpacing: '0.5px',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Let's Connect
                                </Link>
                            </div>

                            {/* Social Links Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '12px 0' }}
                            >
                                {[
                                    { icon: <SiGithub />, color: '#ffffff', link: 'https://github.com/Nithish2005333' },
                                    { icon: <SiLinkedin />, color: '#0077b5', link: 'https://linkedin.com/in/nithishwaran-a-05655725b' },
                                    { icon: <SiInstagram />, color: '#e4405f', link: 'https://instagram.com/itzz_nithish_' },
                                    { icon: <SiGmail />, color: '#ea4335', link: 'mailto:nithishwaran2005333@gmail.com' }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                        initial={{ color: social.color }}
                                        whileHover={{
                                            scale: 1.15,
                                            color: social.color,
                                            filter: `drop-shadow(0 0 8px ${social.color}44)`
                                        }}
                                        style={{
                                            fontSize: '30px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: social.color,
                                            transition: 'color 0.3s ease, filter 0.3s ease'
                                        }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Ambient Decorative Background */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(129, 140, 248, 0.06) 0%, transparent 70%)',
                    filter: 'blur(120px)',
                    zIndex: 0
                }} />
            </section>

            {/* Services / What I Do */}
            <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '40px 20px 60px' }}>
                {/* Decorative Section Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                    zIndex: -1
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>What <span className="gradient-text">I Do</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '18px', lineHeight: 1.6 }}>
                        Transforming complex ideas into high-performance digital solutions with <span style={{ color: 'white' }}>modern technology</span> and <span style={{ color: 'white' }}>elegant design</span>.
                    </p>
                </motion.div>

                <div className="grid-3" style={{ gap: '32px' }}>
                    {[
                        {
                            title: "Web Development",
                            icon: <Monitor size={40} />,
                            desc: "Modern, responsive websites built with React and cutting-edge tech.",
                            color: "#6366f1",
                            number: "01"
                        },
                        {
                            title: "App Development",
                            icon: <Smartphone size={40} />,
                            desc: "Cross-platform mobile applications with seamless performance.",
                            color: "#c084fc",
                            number: "02"
                        },
                        {
                            title: "UI/UX Design",
                            icon: <Palette size={40} />,
                            desc: "Intuitive and beautiful interfaces that engage users.",
                            color: "#f472b6",
                            number: "03"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.12, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
                            style={{ willChange: "transform" }}
                        >
                            <ElectricBorder
                                color={item.color}
                                borderRadius={32}
                                speed={1.5}
                                chaos={0.12}
                            >
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="glass-card"
                                    style={{
                                        padding: '50px 40px',
                                        height: '100%',
                                        border: 'none',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        backdropFilter: 'blur(20px)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    {/* background number */}
                                    <span style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '10px',
                                        fontSize: '120px',
                                        fontWeight: 900,
                                        color: item.color,
                                        opacity: 0.05,
                                        fontFamily: 'Space Grotesk, sans-serif',
                                        pointerEvents: 'none'
                                    }}>
                                        {item.number}
                                    </span>

                                    <div style={{
                                        color: item.color,
                                        marginBottom: '32px',
                                        background: `${item.color}15`,
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: `0 0 20px ${item.color}22`,
                                        border: `1px solid ${item.color}33`
                                    }}>
                                        {item.icon}
                                    </div>

                                    <h3 style={{
                                        fontSize: '28px',
                                        marginBottom: '16px',
                                        fontWeight: 800,
                                        fontFamily: 'Space Grotesk, sans-serif',
                                        color: 'white'
                                    }}>
                                        {item.title}
                                    </h3>

                                    <p style={{
                                        color: 'rgba(255,255,255,0.6)',
                                        fontSize: '17px',
                                        lineHeight: 1.7,
                                        margin: 0,
                                        flex: 1
                                    }}>
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </ElectricBorder>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section" style={{ position: 'relative', padding: '60px 40px' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                        A selection of my recent work showcasing modern web development and creative problem-solving
                    </p>

                    <div style={{ marginTop: '40px' }}>
                        <ChromaGrid
                            items={projects}
                            radius={350}
                            damping={0.45}
                            fadeOut={0.6}
                            ease="power3.out"
                            columns={2}
                            spotlight={false}
                        />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                        <LearnMoreButton text="View All Projects" to="/projects" />
                    </div>
                </motion.div>
            </section>

            {/* Tech Stack Section */}
            <section className="section" style={{
                background: 'linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.03), transparent)',
                padding: '60px 40px',
                position: 'relative',
                overflow: 'visible'
            }}>
                {/* Decorative background blur */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                    zIndex: -1
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>Technologies <span className="gradient-text">I Use</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
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
                                logos={techRow1}
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
                                logos={techRow2}
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
                </motion.div>
            </section>

            {/* Get in Touch CTA - same design as Projects page */}
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
                        Ready to <span className="gradient-text">Get in Touch?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Have a project idea or want to collaborate? I'd love to hear from you. Let's create something amazing together.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <DiscoverButton text="Get in Touch" to="/contact" />
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '32px', textAlign: 'center', borderTop: '1px solid var(--border)', marginTop: '24px' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                    © {new Date().getFullYear()} Nithishwaran A. Built with React & Framer Motion
                </p>
            </footer>
        </div>
    );
};

export default Home;
