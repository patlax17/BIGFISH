"use client";

import { motion } from "framer-motion";
import { Anchor, Heart, Shield, Star } from "lucide-react";

const pillars = [
    {
        title: "Bravery",
        desc: "Navigating treacherous waters with confidence and courage.",
        icon: Anchor,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Self-Belief",
        desc: "Understanding that size doesn't define your courage or worth.",
        icon: Star,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Kindness",
        desc: "Lifting others up to find their strength and building community.",
        icon: Heart,
        color: "bg-red-100 text-red-600",
    },
];

const testimonials = [
    "My daughter loves Bee!",
    "Finally a book that teaches resilience.",
    "Miss B is a national treasure.",
    "A must-have for every classroom.",
    "Beautiful illustrations and message.",
    "Empowering for young girls.",
    "The best gift for my niece.",
];

export default function Philosophy() {
    return (
        <section className="py-20 bg-[var(--color-background)] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wider mb-4 border border-blue-100">
                        OUR MISSION
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
                        The &quot;Big Fish&quot; Philosophy
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        More than just a story—it&apos;s a toolkit for growing hearts and minds.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[var(--color-secondary)] flex flex-col items-center text-center"
                        >
                            <div className={`w-16 h-16 rounded-full ${pillar.color} flex items-center justify-center mb-6`}>
                                <pillar.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">{pillar.title}</h3>
                            <p className="text-gray-600">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof */}
                <div className="mt-12 border-t pt-12 border-gray-200">
                    <div className="flex flex-col items-center mb-8">
                        <div className="flex gap-1 text-yellow-400 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill="currentColor" stroke="none" />
                            ))}
                        </div>
                        <p className="font-bold text-gray-700">Loved by Parents & Educators</p>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>

                        <motion.div
                            className="flex whitespace-nowrap gap-8"
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            {[...testimonials, ...testimonials, ...testimonials].map((text, i) => (
                                <div key={i} className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-gray-600 font-medium">
                                    &quot;{text}&quot;
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
