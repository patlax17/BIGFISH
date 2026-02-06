"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, ChevronRight } from "lucide-react";

type BookingModalProps = {
    isOpen: boolean;
    onClose: () => void;
    serviceTitle: string;
};

export default function BookingModal({ isOpen, onClose, serviceTitle }: BookingModalProps) {
    const [step, setStep] = useState(1);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                >
                    <div className="bg-[var(--color-primary)] p-6 text-white flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-bold">Request {serviceTitle}</h3>
                            <p className="text-white/80 text-sm">Step {step} of 2</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-8">
                        {step === 1 ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input type="date" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Alternative Date</label>
                                    <div className="relative">
                                        <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input type="date" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Ideally Time of Day</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all bg-white">
                                            <option>Morning (8AM - 11AM)</option>
                                            <option>Afternoon (12PM - 3PM)</option>
                                            <option>Evening (4PM - 6PM)</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full mt-4 bg-[var(--color-primary)] text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    Next Step <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">School / Org Name</label>
                                    <input type="text" placeholder="e.g. PS 118" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Contact Email</label>
                                    <input type="email" placeholder="you@school.edu" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Notes</label>
                                    <textarea className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" rows={3}></textarea>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => {
                                            alert("Request sent! Miss B will be in touch.");
                                            onClose();
                                        }}
                                        className="flex-[2] bg-[var(--color-accent)] text-white font-bold py-3 rounded-lg hover:bg-[#FF6347] transition-colors"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
