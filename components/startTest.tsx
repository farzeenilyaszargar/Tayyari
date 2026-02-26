"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function StartTest() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto glass p-12 rounded-[56px] text-center relative z-10 border-2 border-primary/20"
            >
                <div className="inline-flex p-4 bg-primary/10 rounded-3xl mb-6 text-primary">
                    <BrainCircuit size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to test your knowledge?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of aspirants today. Get instant detailed analysis, conceptual maps, and your predicted rank.
                </p>
                <Link
                    href="/tests"
                    className="bg-white text-black px-10 py-5 rounded-[24px] font-black text-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 w-fit mx-auto"
                >
                    Start Your Free Test Now <ArrowRight size={24} />
                </Link>
            </motion.div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10 rounded-full"></div>
        </section>
    );
}