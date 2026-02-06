"use client";

import { motion } from "framer-motion";
import { Users, Video, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

const services = [
    {
        title: "Virtual Story Time",
        price: "$150",
        features: ["20-minute reading", "10-minute Q&A", "Via Zoom/Google Classroom"],
        target: "Ideal for PreK-3",
        icon: Video,
        tier: "Card 1",
        color: "bg-blue-50 border-blue-200"
    },
    {
        title: "In-Person School Visit",
        price: "$225+",
        features: ["40-minute interactive reading", "Q&A Session", "Art Activity or Movement"],
        target: "Schools & Libraries",
        icon: MapPin,
        tier: "Card 2",
        color: "bg-teal-50 border-teal-200"
    },
    {
        title: "Ocean Navigator Residency",
        price: "$1,300+",
        features: ["Full-day schedule", "Assemblies & Workshops", "Teacher PD: 'Joyful Pedagogy'"],
        target: "Whole School Impact",
        icon: Users,
        tier: "Card 3",
        color: "bg-indigo-50 border-indigo-200"
    }
];

export default function EducatorHub() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleBooking = (title: string) => {
        setSelectedService(title);
        setModalOpen(true);
    };

    return (
        <section id="educators" className="py-24 bg-[var(--color-background)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
                        Bring the &quot;Big Fish&quot; Mindset to Your Classroom.
                    </h2>
                    <p className="text-xl text-gray-600">
                        Interactive experiences designed to build resilience and joy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-8 rounded-2xl border-2 ${service.color} hover:shadow-xl transition-all relative overflow-hidden flex flex-col`}
                        >
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                                <service.icon className="w-7 h-7 text-gray-700" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">{service.price}</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
                                {service.target}
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleBooking(service.title)}
                                className="w-full py-3 bg-white border border-gray-200 rounded-lg font-bold text-gray-700 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all flex items-center justify-center gap-2 group"
                            >
                                <Calendar className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                Request Date
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <BookingModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                serviceTitle={selectedService}
            />
        </section>
    );
}
