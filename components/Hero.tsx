"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-primary)] pt-20 pb-12">
            {/* Bubbles Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/20 rounded-full blur-sm"
                        style={{
                            width: Math.random() * 50 + 20,
                            height: Math.random() * 50 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left text-white"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
                        Empowering Little Readers to Navigate <span className="text-[var(--color-accent)]">Big Waves.</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-[var(--font-body)] font-medium text-white/90 max-w-2xl mx-auto lg:mx-0">
                        An aquatic adventure by NYC educator Fatimah Basir, designed to building resilience and a &apos;Big Fish&apos; mindset.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.a
                            href="https://amazon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            className="px-8 py-4 bg-[var(--color-accent)] hover:bg-[#FF6347] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            Buy on Amazon <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <a
                            href="#visit"
                            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            Book a School Visit <BookOpen className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content - Book & Bee */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
                    {/* Bee Character */}
                    <motion.div
                        className="absolute z-20 top-0 right-10 md:right-20 w-32 md:w-48 lg:w-56"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src="/bee.png"
                            alt="Bee Character"
                            width={300}
                            height={300}
                            className="object-contain drop-shadow-xl"
                        />
                    </motion.div>

                    {/* Book Cover */}
                    <motion.div
                        className="relative z-10 w-64 md:w-80 lg:w-96"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src="/book-cover.png"
                                alt="I'm A Big Fish Not A Guppy Book Cover"
                                width={600}
                                height={600}
                                className="object-contain rounded-lg shadow-2xl skew-y-1"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Wave Separator Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[var(--color-background)]"></path>
                </svg>
            </div>
        </section>
    );
}
