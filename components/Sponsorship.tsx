"use client";

import { motion, useInView } from "framer-motion";
import { Check, Heart, Trophy, BookOpen } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const tiers = [
    {
        name: "Community Sponsor",
        price: "$1,000",
        impact: "30 books donated to a classroom.",
        features: ["Logo on student thank-you flyers", "Social media shoutout", "Tax dedication letter"],
        color: "bg-white border-blue-100",
        icon: Heart
    },
    {
        name: "Bronze Sponsor",
        price: "$5,000",
        impact: "100 books donated.",
        features: ["Website logo placement", "Social media spotlight", "Signed copy of the book"],
        color: "bg-orange-50 border-orange-200",
        icon: BookOpen
    },
    {
        name: "Silver Sponsor",
        price: "$10,000",
        impact: "250 books + 5 school visits.",
        features: ["5 Sponsored Author Visits", "Press release mention", "Logo on event banners"],
        highlight: true,
        color: "bg-[var(--color-primary)] text-white",
        icon: Trophy
    },
];

const Counter = ({ from, to, label }: { from: number; to: number; label: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            const controls = { value: from };
            const duration = 2000; // 2 seconds
            const start = performance.now();

            const animate = (time: number) => {
                const elapsed = time - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quart
                const ease = 1 - Math.pow(1 - progress, 4);

                setCount(Math.floor(from + (to - from) * ease));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [inView, from, to]);

    return (
        <div ref={ref} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="text-4xl lg:text-5xl font-bold mb-2 font-mono">
                {count.toLocaleString()}+
            </div>
            <div className="text-sm uppercase tracking-wider opacity-80 font-bold">{label}</div>
        </div>
    );
};

export default function Sponsorship() {
    return (
        <section id="sponsorship" className="py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block backdrop-blur-md">CSR Portal</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Join the Movement: <br />Fueling Literacy in NYC.
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Partner with us to provide high-quality literature and social-emotional learning tools to underserved communities.
                    </p>
                </div>

                {/* Impact Counter */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 text-white">
                    <Counter from={0} to={1000} label="Classrooms Served" />
                    <Counter from={0} to={25000} label="Students Inspired" />
                    <Counter from={0} to={115000} label="Books Distributed" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl p-8 relative ${tier.highlight
                                    ? "bg-white text-gray-900 shadow-2xl scale-105 z-10"
                                    : "bg-white/90 backdrop-blur text-gray-800 shadow-lg"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-0 w-full bg-[var(--color-accent)] text-white text-center text-xs font-bold py-1 rounded-t-2xl uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                {tier.name}
                            </h3>
                            <div className="text-3xl font-bold mb-4 text-[var(--color-primary)]">{tier.price}</div>
                            <p className="mb-6 text-sm font-medium text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <strong>Impact:</strong> {tier.impact}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-xl font-bold transition-all ${tier.highlight
                                        ? "bg-[var(--color-primary)] text-white hover:bg-blue-800 shadow-lg hover:shadow-xl"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}>
                                Become a Partner
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
