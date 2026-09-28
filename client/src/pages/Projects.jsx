import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import LearnMoreButton from '../components/LearnMoreButton';
import DiscoverButton from '../components/DiscoverButton';
import { ArrowRight, Code2, Smartphone, Zap, Globe, Compass, Sparkles, BookOpen, Building2, ShoppingBag, Activity } from 'lucide-react';
import ChromaGrid from '../components/ChromaGrid';

const Projects = () => {
    const projects = [
        {
            title: "Freshurah",
            subtitle: "Next.js • Tailwind v4 • Framer Motion",
            handle: "Beverage Experience",
            category: "E-commerce Landing",
            description: "A high-end, immersive landing page for a modern beverage shop featuring dynamic theming, fluid animations, and ultra-premium glassmorphism UI.",
            borderColor: "#FF6B6B",
            gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)",
            url: "https://freshurah.nexurah.in/",
            github: "https://github.com/Nithish2005333/Beverages",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1773210977/Screenshot_2026-03-06_102511_sc5ar5.png",
            icon: <Smartphone size={40} />
        },
        {
            title: "Agency Analog",
            subtitle: "Brand Strategy • Creative Design • Web",
            handle: "Creative Agency",
            category: "Agency Website",
            description: "A modern creative agency platform dedicated to human-centric brand design, immersive experiences, and digital strategy.",
            borderColor: "#F43F5E",
            gradient: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
            url: "http://www.agencyanalog.com/",
            image: "/projects/agencyanalog.webp",
            icon: <Sparkles size={40} />
        },
        {
            title: "TripStart",
            subtitle: "Luxury Travel • Curated Journeys • Booking",
            handle: "Travel Platform",
            category: "Travel & Hospitality",
            description: "Curated luxury travel experiences and bespoke international and domestic itineraries with seamless booking.",
            borderColor: "#06B6D4",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
            url: "https://tripstart.in/",
            image: "/projects/tripstart.webp",
            icon: <Compass size={40} />
        },
        {
            title: "Dr. RRB Pain Care",
            subtitle: "Next.js • React • SEO • Healthcare",
            handle: "Healthcare Platform",
            category: "Medical & Health",
            description: "Specialized medical platform for India's first dual-board certified interventional pain specialist, serving 4,000+ patients.",
            borderColor: "#0EA5E9",
            gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
            url: "https://drrrbpaincare.com/",
            image: "/projects/rrb.webp",
            icon: <Activity size={40} />
        },
        {
            title: "CR8IVE",
            subtitle: "Next.js • Digital Agency • Marketing",
            handle: "Digital Agency",
            category: "Agency Website",
            description: "Performance-driven creative agency website with integrated lead funnels, empowering client brands generating 3 Cr+ revenue.",
            borderColor: "#EC4899",
            gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
            url: "https://www.cr8ive.in/",
            image: "/projects/cr8ive.webp",
            icon: <Sparkles size={40} />
        },
        {
            title: "Dr. Kumaravel Properties",
            subtitle: "Next.js • Real Estate • Farmland",
            handle: "Farmland Investment",
            category: "Real Estate",
            description: "Exclusive farmland investment platform for a 100-acre gated eco-community featuring interactive layouts and automated lead funnels.",
            borderColor: "#10B981",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            url: "https://www.drkumaravelproperties.com/",
            image: "/projects/kumaravel.webp",
            icon: <Building2 size={40} />
        },
        {
            title: "Saradhi Pubgrid",
            subtitle: "E-Books • Rights Protection • Publishing",
            handle: "Digital Library",
            category: "E-Book Marketplace",
            description: "A secure digital library and e-book marketplace for readers, publishers, and institutions with browser-based reading.",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
            url: "https://saradhipubgrid.com/",
            image: "/projects/saradhipubgrid.webp",
            icon: <BookOpen size={40} />
        },
        {
            title: "Sumathi Steel",
            subtitle: "Steel & Hardwares • Industrial Supply",
            handle: "Industrial Portal",
            category: "Commercial",
            description: "Comprehensive industrial web portal for steel, structural hardware solutions, and manufacturing supplies.",
            borderColor: "#F59E0B",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
            url: "https://sumathisteel.com/",
            image: "/projects/sumathisteel.webp",
            icon: <Building2 size={40} />
        },
        {
            title: "Zenthora Global",
            subtitle: "Real Estate • Land Development • Estates",
            handle: "Estates & Realty",
            category: "Real Estate",
            description: "Premier real estate and land investment platform featuring transparent property portfolios and future-ready development.",
            borderColor: "#10B981",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            url: "https://www.zenthoraglobal.com/",
            image: "/projects/zenthoraglobal.webp",
            icon: <Globe size={40} />
        },
        {
            title: "Actify Aura",
            subtitle: "Organic Wellness • Ayurvedic • Nutrition",
            handle: "Wellness Hub",
            category: "E-Commerce / Health",
            description: "Curated organic wellness platform offering trusted supplements, Ayurvedic remedies, fitness essentials, and nutrition.",
            borderColor: "#14B8A6",
            gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
            url: "https://actifyaura.com/",
            image: "/projects/actifyaura.webp",
            icon: <ShoppingBag size={40} />
        },
        {
            title: "Petals & Knots",
            subtitle: "Floral Design • Luxury Weddings • Styling",
            handle: "Design Studio",
            category: "Events & Luxury",
            description: "Design-led floral studio specializing in luxury destination weddings, experiential installations, and production.",
            borderColor: "#E11D48",
            gradient: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
            url: "http://petalsandknots.com/",
            image: "/projects/petalsandknots.webp",
            icon: <Sparkles size={40} />
        },
        {
            title: "Max Code Softwares",
            subtitle: "Web Platforms • AI Assistants • Software",
            handle: "Software Studio",
            category: "IT Services",
            description: "Custom digital platforms, scalable web engineering, and AI-powered business assistants engineered for enterprise growth.",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            url: "http://maxcodesoftwares.in/",
            image: "/projects/maxcodesoftwares.webp",
            icon: <Code2 size={40} />
        },
        {
            title: "Nimbus Cloud",
            subtitle: "React • Vercel • Cloud Services",
            handle: "Cloud Platform",
            category: "Web Application",
            description: "A modern cloud platform showcasing seamless deployment and scalable architecture for web applications.",
            borderColor: "#0EA5E9",
            gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
            url: "https://nimbus-cloud-liard.vercel.app/",
            github: "https://github.com/Nithish2005333/NimbusCloud.git",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1771000699/690b4fa1-152f-4fad-8339-9b41b76046f6.png",
            icon: <Globe size={40} />
        },
        {
            title: "Sabarnaa Printers",
            subtitle: "React • Tailwind • Cloudinary",
            handle: "Business Website",
            category: "Commercial",
            description: "High-end business website featuring offset printing and packaging solutions with high-resolution visual storytelling.",
            borderColor: "#F43F5E",
            gradient: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
            url: "https://sabarnaa-printerz.vercel.app/",
            github: "https://github.com/Nithish2005333/sabarnaa-printerz.git",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983590/d824c9cd-1f83-4877-b759-5b6c92bc5f0a.png",
            icon: <Globe size={40} />
        },
        {
            title: "Placement App",
            subtitle: "React • Node.js • MongoDB",
            handle: "Full Stack",
            category: "Full Stack App",
            description: "A dedicated placement portal for students and admins. Maintain verified profiles with downloadable resumes.",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            url: "https://placementapp-0htf.onrender.com/",
            github: "https://github.com/Nithish2005333/PlacementApp",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983002/Screenshot_2026-02-13_165525_ttrhif.png",
            icon: <Code2 size={40} />
        },
        {
            title: "ParkQwik",
            subtitle: "React • Framer Motion • Tailwind",
            handle: "Landing Page",
            category: "UI/UX Showcase",
            description: "A sleek, motion-driven showcase for the ParkQwik mobility platform, emphasizing urban parking solutions.",
            url: "https://parkqwik-preview-nithishwaran.onrender.com/",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983002/Screenshot_2026-02-13_165545_nzbedf.png",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            icon: <Zap size={40} />
        },
        {
            title: "Web Tech Record",
            subtitle: "HTML • CSS • JS • Catalyst",
            handle: "Lab Experiments",
            category: "Academic",
            description: "Digital record index for Web Technologies experiments at Anna University Regional Campus.",
            borderColor: "#10B981",
            gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
            url: "https://ccs375-webtechnologiesrecord-60044154955.development.catalystserverless.in/app/index.html",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983002/Screenshot_2026-02-13_165600_m2y9em.png",
            icon: <Code2 size={40} />
        },
        {
            title: "Car Rental",
            subtitle: "React • SCSS • REST API",
            handle: "Booking Platform",
            category: "Web Application",
            description: "Plan your trip now and save big with our car rental platform. Premium booking experience.",
            borderColor: "#EC4899",
            gradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
            url: "https://car-rental-gules-tau.vercel.app/",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983003/Screenshot_2026-02-13_165628_ottkp8.png",
            icon: <Smartphone size={40} />
        },
        {
            title: "Scientific Calculator",
            subtitle: "HTML • CSS • JS",
            handle: "Web Tool",
            category: "Tool",
            description: "A fully functional scientific calculator with a clean and intuitive user interface.",
            borderColor: "#F59E0B",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
            url: "https://calculator-60044154955.development.catalystserverless.in/app/index.html",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983002/Screenshot_2026-02-13_165643_ed9hbc.png",
            icon: <Code2 size={40} />
        },
        {
            title: "Quiz Game",
            subtitle: "Solidity • Web3.js • React",
            handle: "Blockchain Game",
            category: "Web3 DApp",
            description: "Test your knowledge in a decentralized environment. Integrated with Ethereum smart contracts for immutable scoring.",
            borderColor: "#06B6D4",
            gradient: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
            url: "https://blockchain-based-quizgame-60044154955.development.catalystserverless.in/app/index.html",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983002/Screenshot_2026-02-13_165707_e0tyfd.png",
            icon: <Zap size={40} />
        },
        {
            title: "Podcast Plus",
            subtitle: "Android Studio • Java",
            handle: "Streaming App",
            category: "Mobile",
            description: "A comprehensive Android podcast player featuring real-time streaming, catalog management, and a sleek modern UI.",
            borderColor: "#A855F7",
            gradient: "linear-gradient(135deg, #a855f7 0%, #d8b4fe 100%)",
            url: "https://github.com/Nithish2005333/PodcastPlus-NM2024TMID05887.git",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983386/e9862910-6d98-40a4-810c-4cd905a852d6.png",
            icon: <Smartphone size={40} />
        },
        {
            title: "Student Management",
            subtitle: "Java Swing • MySQL",
            handle: "Admin Tools",
            category: "Desktop",
            description: "Enterprise-grade student record system with advanced database operations, reporting, and secure authentication.",
            borderColor: "#6366F1",
            gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
            url: "https://github.com/Nithish2005333/StudentManagement.git",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770984363/9ec75ce4-b461-4d69-b5e8-20f61ee3ccf9.png",
            icon: <Code2 size={40} />
        },
        {
            title: "Attendance Tracker",
            subtitle: "React • Node • MongoDB",
            handle: "Management System",
            category: "Web App",
            description: "A full-scale professional attendance solution with analytical dashboards and real-time report generation.",
            borderColor: "#14B8A6",
            gradient: "linear-gradient(135deg, #14b8a6 0%, #5eead4 100%)",
            url: "/coming-soon",
            image: "https://res.cloudinary.com/di2c9rec3/image/upload/v1770983502/816ce198-4e37-4403-b665-85d2e9abac22.png",
            icon: <Code2 size={40} />
        }
    ];

    return (
        <div>
            {/* Back Button */}
            <BackButton />
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="hero projects-hero" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '900px', textAlign: 'center', padding: '0 20px' }}
                >
                    <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 7vw, 80px)', marginBottom: '20px' }}>
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
                        A collection of my recent work showcasing modern web development and creative problem-solving
                    </p>
                </motion.div>
            </section>

            {/* ChromaGrid Projects */}
            <section style={{ paddingBottom: '100px' }}>
                <ChromaGrid
                    items={projects}
                    radius={350}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
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
                        Have a Project in <span className="gradient-text">Mind?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <DiscoverButton text="Start a Project" to="/contact" />
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

export default Projects;
