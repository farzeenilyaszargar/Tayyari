"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Trophy,
    BookOpenCheck,
    LayoutDashboard,
    Archive,
    Download
} from "lucide-react";

const features = [
    {
        icon: <BarChart3 className="text-blue-500" />,
        title: "AIR Prediction",
        desc: "Advanced AI algorithms to predict your All India Rank based on mock performance."
    },
    {
        icon: <Trophy className="text-yellow-500" />,
        title: "Leaderboards",
        desc: "Compete with peers globally. Earn points and climb the rankings."
    },
    {
        icon: <BookOpenCheck className="text-purple-500" />,
        title: "Daily Practice",
        desc: "Fresh problems every day to keep your conceptual clarity at its peak."
    },
    {
        icon: <LayoutDashboard className="text-emerald-500" />,
        title: "Progress Dashboard",
        desc: "Visualize your journey with test score graphs and earned badges."
    },
    {
        icon: <Archive className="text-orange-500" />,
        title: "PYQ Archive",
        desc: "Comprehensive database of previous year questions with detailed solutions."
    },
    {
        icon: <Download className="text-cyan-500" />,
        title: "Resource Library",
        desc: "Download important JEE reference books and study materials in PDF format."
    }
];

export default function Benifits() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Built for <span className="gradient-text">Top Rankers</span></h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
                        Everything you need to crack India's toughest exam, engineered into one powerful platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-[40px] hover:bg-white/[0.04] transition-all border border-white/5 hover:border-primary/20 group cursor-default"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}