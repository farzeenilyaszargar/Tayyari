"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary">
                        <Sparkles size={14} className="animate-spin-slow" />
                        AI-Enhanced Learning
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                        Crack <span className="gradient-text italic">JEE</span> <br />
                        <span className="text-foreground">With Precision.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                        The ultimate destination for JEE aspirants. Get instant AIR predictions, daily practice problems, and elite study materials.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href="/dashboard" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2 group">
                            Get Started Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="glass text-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:bg-foreground/10 transition-colors">
                            View Syllabus
                        </button>
                    </div>

                    <div className="flex items-center gap-8 pt-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black">50k+</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Students</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black">1.2M+</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Problems Solved</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="glass p-8 rounded-[48px] border-2 border-white/10 bg-gradient-to-br from-white/5 to-transparent relative z-20 overflow-hidden">
                        <div className="flex flex-col items-center gap-6 py-8">
                            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-2">
                                <Zap size={40} className="text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-center">Fast-Track Your <br />Rank Today</h2>
                            <button className="w-full bg-foreground text-background py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                                <Image src="/google.png" alt="Google" width={24} height={24} className="dark:invert-0 invert" />
                                Continue with Google
                            </button>
                            <p className="text-xs text-muted-foreground text-center">
                                Join our community of 50,000+ toppers <br />No credit card required.
                            </p>
                        </div>

                        {/* Floating elements inside card */}
                        <div className="absolute top-8 right-8 p-3 bg-secondary/20 rounded-xl blur-sm"></div>
                        <div className="absolute bottom-8 left-8 p-4 bg-primary/20 rounded-full blur-md"></div>
                    </div>

                    {/* Decorative Rings */}
                    <div className="absolute inset-0 border-[40px] border-primary/5 rounded-full scale-125 -z-10 animate-spin-slow"></div>

                    {/* Floating Live Players Bubble */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-8 top-1/2 glass px-4 py-2 rounded-2xl flex items-center gap-2 border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">12,402 Students Online</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}