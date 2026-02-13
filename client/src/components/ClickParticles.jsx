import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickParticles = ({
    particleCount = 12,
    colors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b']
}) => {
    const [particles, setParticles] = useState([]);
    let particleId = 0;

    useEffect(() => {
        const handleClick = (e) => {
            const newParticles = [];
            const baseId = particleId++;

            for (let i = 0; i < particleCount; i++) {
                const angle = (Math.PI * 2 * i) / particleCount;
                const velocity = 120 + Math.random() * 60;
                const color = colors[Math.floor(Math.random() * colors.length)];

                newParticles.push({
                    id: `${baseId}-${i}`,
                    x: e.clientX,
                    y: e.clientY,
                    angle,
                    velocity,
                    color,
                    size: 6 + Math.random() * 6
                });
            }

            setParticles(prev => [...prev, ...newParticles]);

            // Remove particles after animation
            setTimeout(() => {
                setParticles(prev => prev.filter(p => !p.id.startsWith(`${baseId}-`)));
            }, 800);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [particleCount, colors]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{
                            x: particle.x,
                            y: particle.y,
                            scale: 1,
                            opacity: 1
                        }}
                        animate={{
                            x: particle.x + Math.cos(particle.angle) * particle.velocity,
                            y: particle.y + Math.sin(particle.angle) * particle.velocity,
                            scale: 0,
                            opacity: 0
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        style={{
                            position: 'absolute',
                            width: particle.size,
                            height: particle.size,
                            borderRadius: '50%',
                            background: particle.color,
                            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                            pointerEvents: 'none'
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ClickParticles;
