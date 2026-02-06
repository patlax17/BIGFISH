"use client";

import { Quote } from "lucide-react";

export default function MediaBar() {
    return (
        <section className="bg-gray-50 py-16 border-y border-gray-200">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-sm font-bold mb-10 opacity-60 uppercase tracking-widest">As Featured In</h3>

                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
                    {/* Logo Placeholders - Styled Text */}
                    <span className="text-2xl font-black tracking-tighter text-gray-800">BK Reader</span>
                    <span className="text-xl font-serif font-bold text-gray-800">York College News</span>
                    <span className="text-lg font-bold border-2 border-gray-800 px-3 py-1 text-gray-800">Too Dope Teachers & A Mic</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                        <Quote className="absolute top-6 left-6 w-8 h-8 text-[var(--color-secondary)] opacity-30" />
                        <p className="text-xl font-medium text-gray-700 italic mb-4 relative z-10">
                            &ldquo;Brooklyn Writer Pens Book to Spark Big Dreams.&rdquo;
                        </p>
                        <div className="font-bold text-gray-500 text-sm tracking-wider">— BK READER</div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                        <Quote className="absolute top-6 left-6 w-8 h-8 text-[var(--color-secondary)] opacity-30" />
                        <p className="text-xl font-medium text-gray-700 italic mb-4 relative z-10">
                            &ldquo;An energetic, motivating educator... imaginative, creative, and joyful.&rdquo;
                        </p>
                        <div className="font-bold text-gray-500 text-sm tracking-wider">— TOO DOPE TEACHERS PODCAST</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
