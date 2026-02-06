"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className={`font-bold text-2xl transition-colors cursor-pointer ${scrolled ? "text-[var(--color-primary)]" : "text-white drop-shadow-md"}`}>
                        Big Fish
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {["The Book", "About Miss B", "Educators", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                                className={`text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4 transition-colors ${scrolled ? "text-gray-700 hover:text-[var(--color-primary)]" : "text-white hover:text-white/80 drop-shadow-sm"}`}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="https://amazon.com"
                            className={`px-6 py-2 rounded-full font-bold transition-all ${scrolled
                                ? "bg-[var(--color-accent)] text-white hover:bg-[#FF6347]"
                                : "bg-white text-[var(--color-primary)] hover:bg-gray-100"
                                }`}
                        >
                            Buy Now
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
                        <Menu className={`w-8 h-8 ${scrolled ? "text-gray-800" : "text-white"}`} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-white h-screen w-screen flex flex-col items-center justify-center gap-8"
                    >
                        <button className="absolute top-6 right-6 text-gray-800" onClick={() => setIsOpen(false)}>
                            <X className="w-8 h-8" />
                        </button>
                        {["The Book", "About Miss B", "Educators", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-gray-800 hover:text-[var(--color-primary)]"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
