'use client';
import { motion } from "framer-motion";
const badges = [
    '../assets/badges/Clutch-Rating.webp',
    '../assets/badges/Los-Angeles-Business-Journal-1.webp',
    '../assets/badges/MostLovedWP-Certified.webp',
    '../assets/badges/MostLovedWP-top100.webp',
    '../assets/badges/Top-Clutch-Software-Developers-Mexico-2025.webp',
    '../assets/badges/Top-Clutch-Web-Developers-Latin-America-2025.webp',
];
export default function TrustedBadges(){
    return (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="relative dark:bg-gray-900 dark:py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center headingtext mb-8 headingtext">1% Better Everyday. That’s Our Mantra.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">When you chase perfection, great things happen along the way.</p>
            <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 grid-cols-2">
                {badges.map((image,i)=>(
                    <div key={i} className="aspect-video flex flex-col mb-6 justify-center items-center">
                        <img src={image} width={200} height={300} className="w-1/2" alt="badgeText"/>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}