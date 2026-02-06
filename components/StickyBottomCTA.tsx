"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StickyBottomCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
            <motion.a
                href="#"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center justify-center gap-2 w-full bg-[var(--color-accent)] text-white py-3 rounded-xl font-bold text-lg shadow-lg"
            >
                Buy Book Now <ArrowRight className="w-5 h-5" />
            </motion.a>
        </div>
    );
}
