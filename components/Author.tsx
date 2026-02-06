"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, GraduationCap, MapPin, Heart } from "lucide-react";

export default function Author() {
    return (
        <section id="about-miss-b" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                            <Image
                                src="/author.png"
                                alt="Fatimah Basir - Miss B"
                                width={600}
                                height={800}
                                className="object-cover w-full h-auto"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg max-w-[200px]">
                                <p className="text-sm font-bold text-[var(--color-primary)] italic">
                                    &ldquo;High tides will come, but if you have the right tools, you can swim through any wave.&rdquo;
                                </p>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 -left-10 w-64 h-64 bg-[var(--color-secondary)]/20 rounded-full blur-3xl"></div>
                        <div className="absolute -z-10 bottom-10 -right-10 w-48 h-48 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-1 w-12 bg-[var(--color-accent)] rounded-full"></div>
                            <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm">The Resilience Narrative</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                            Meet Fatimah Basir: <br />From Brooklyn to the Big Sea.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                I’m an NYC-based educator, school administrator, and home economics instructor at <strong>New York Junior Tennis & Learning</strong>. My journey wasn’t always smooth sailing.
                            </p>
                            <p>
                                Growing up, Friday nights were spent at the <strong>SUNY Downstate pool</strong>. It was there, amidst the splashing and lap lanes, that my parents first called me their &quot;Big Fish&quot;—a nickname that became my armor.
                            </p>
                            <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-[var(--color-primary)]">
                                Overcoming a childhood speech impediment taught me that our voices are powerful, even when they shake. That struggle became the fuel for my passion: empowering youth to find their own strength.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                                <span className="font-medium text-gray-800">Born & Raised in Brooklyn</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <GraduationCap className="w-5 h-5 text-[var(--color-secondary)]" />
                                <span className="font-medium text-gray-800">York College ‘17</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                                <span className="font-medium text-gray-800">SEEK Scholar</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Heart className="w-5 h-5 text-[var(--color-secondary)]" />
                                <span className="font-medium text-gray-800">B.S. Community Health Ed.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
