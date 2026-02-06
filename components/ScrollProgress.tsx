"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--color-secondary)] origin-left z-[100]"
                style={{ scaleX }}
            />
            <motion.div
                className="fixed z-[90] right-4 md:right-8 bottom-24 md:bottom-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-primary)]/80 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-lg text-white text-xs font-bold pointer-events-none"
                style={{
                    y: useSpring(useScroll().scrollYProgress.get() * -20, { stiffness: 100, damping: 30 }),
                    opacity: useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30 })
                }}
            >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-[var(--color-secondary)]/50 wave-animation"></div>
                    <span className="relative z-10 text-[10px] uppercase tracking-tighter text-center leading-tight">Swim<br />Down</span>
                </div>
            </motion.div>
            <style jsx>{`
        .wave-animation {
            animation: wave 4s infinite linear;
            top: 50%;
        }
        @keyframes wave {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(180deg); }
            100% { transform: translateY(0) rotate(360deg); }
        }
      `}</style>
        </>
    );
}
