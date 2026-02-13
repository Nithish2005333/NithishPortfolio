import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import SmoothCursor from './components/SmoothCursor';
import ClickParticles from './components/ClickParticles';
import TargetCursor from './components/TargetCursor';
import FloatingLines from './components/FloatingLines';
import { useState, useEffect } from 'react';

function App() {
    const [isTargetActive, setIsTargetActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            document.body.style.setProperty('--pointer-x', `${e.clientX}px`);
            document.body.style.setProperty('--pointer-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <Router>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2, opacity: 0.4 }}>
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={5}
                    lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>
            <SmoothCursor hidden={isTargetActive} />
            <ClickParticles particleCount={20} />
            <TargetCursor
                targetSelector="a, button, .btn-primary, .btn-secondary, .cursor-target, .pc-card-shell"
                spinDuration={2}
                hideDefaultCursor={false}
                hoverDuration={0.2}
                parallaxOn={true}
                onHoverChange={setIsTargetActive}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
