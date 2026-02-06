"use client";

import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#004e80] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Newsletter Section */}
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <div className="bg-[var(--color-secondary)]/10 backdrop-blur-md rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Join the School of Big Fish</h3>
                        <p className="text-white/80">Sign up for our newsletter to receive free SEL activity sheets, resilience tips, and event updates.</p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <form className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-grow">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                                />
                            </div>
                            <button className="px-6 py-3 bg-[var(--color-accent)] hover:bg-[#FF6347] rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                                Sign Up <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10 opacity-80">
                <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold mb-1">Big Fish - Fatimah Basir</h4>
                    <p className="text-white/60 text-xs">© {new Date().getFullYear()} Fatimah Basir. All rights reserved.</p>
                </div>

                <div className="flex gap-8 text-sm font-bold">
                    <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">TikTok</a>
                    <a href="#contact" className="hover:text-[var(--color-secondary)] transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
