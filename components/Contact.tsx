"use client";

import { useState } from "react";
import { ChevronRight, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleRoleSelect = (selectedRole: string) => {
        setRole(selectedRole);
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-lg">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h3>
                        <p className="text-gray-600 mb-8">
                            Thank you for reaching out. Miss B acts fast—expect to hear back within 48 hours for all {role} inquiries.
                        </p>
                        <button
                            onClick={() => { setSubmitted(false); setStep(1); }}
                            className="text-[var(--color-primary)] font-bold hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Let&apos;s Connect</h2>
                    <p className="text-xl text-gray-600">Start the conversation by telling us a bit about yourself.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    {/* Left Side - Visual/Info */}
                    <div className="bg-[var(--color-primary)] p-10 md:w-1/3 flex flex-col justify-between text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                            <p className="opacity-80 mb-8 text-sm leading-relaxed">
                                Whether you want to bring Big Fish to your school or partner on a larger mission, we&apos;re ready to listen.
                            </p>
                            <div className="space-y-4 text-sm font-medium opacity-90">
                                <p>Brooklyn, New York</p>
                                <p>info@bigfishbook.com</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute top-10 -left-10 w-40 h-40 bg-[var(--color-accent)]/20 rounded-full blur-2xl"></div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="p-10 md:w-2/3 bg-gray-50">
                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h4 className="text-xl font-bold text-gray-800 mb-6">I am a...</h4>
                                    <div className="grid gap-4">
                                        {["Parent / Guardian", "Educator / Administrator", "Potential Sponsor / Partner"].map((r) => (
                                            <button
                                                key={r}
                                                onClick={() => handleRoleSelect(r)}
                                                className="flex items-center justify-between p-4 bg-white border-2 border-transparent hover:border-[var(--color-primary)] hover:bg-blue-50 rounded-xl transition-all shadow-sm group text-left"
                                            >
                                                <span className="font-bold text-gray-700 group-hover:text-[var(--color-primary)]">{r}</span>
                                                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-primary)]" />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <button onClick={() => setStep(1)} className="text-sm font-bold text-gray-400 mb-6 hover:text-gray-600 transition-colors">
                                        &larr; Back to roles
                                    </button>
                                    <h4 className="text-xl font-bold text-gray-800 mb-6">Details for {role}</h4>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <input required type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" />
                                            <input required type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" />
                                        </div>
                                        <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" />
                                        <textarea required placeholder="How can we help you?" rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"></textarea>

                                        <button type="submit" className="w-full py-4 bg-[var(--color-accent)] text-white font-bold rounded-xl hover:bg-[#FF6347] transition-all flex items-center justify-center gap-2 shadow-lg">
                                            Send Message <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
