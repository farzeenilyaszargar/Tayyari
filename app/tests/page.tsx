"use client";

import { ClipboardList, Trophy, Timer, ArrowRight, Sparkles, Filter, Activity, Rocket, Sword, ShieldCheck, Zap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const availableTests = [
    {
        id: "live-mock-1",
        title: "All India Super Mock #04",
        status: "LIVE NOW",
        duration: "180 mins",
        questions: 75,
        xp: "2,500",
        tier: "ADVANCED",
        participants: "12.5k+",
        type: "Full Syllabus",
    },
    {
        id: "physics-raid-1",
        title: "Mechanics Phase 1: Kinematics",
        status: "READY",
        duration: "60 mins",
        questions: 25,
        xp: "800",
        tier: "INTERMEDIATE",
        participants: "4.2k+",
        type: "Sectional",
    },
    {
        id: "maths-raid-1",
        title: "Algebraic Storm",
        status: "STARTS IN 2H",
        duration: "90 mins",
        questions: 30,
        xp: "1,200",
        tier: "TOPIC-WISE",
        participants: "1.8k+",
        type: "Practice",
    },
];

export default function Tests() {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-12">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-12">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-primary/20">
                        <BookOpen size={12} className="animate-pulse" />
                        ASSESSMENT CENTER
                    </div>
                    <h1 className="text-7xl font-black tracking-tighter leading-none mb-6 italic">
                        Select Your <span className="gradient-text italic">Test.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-medium italic">High-precision simulations to evaluate your speed, accuracy, and predicted All India Rank.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none glass px-8 py-4 rounded-3xl text-sm font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10">
                        <Filter size={18} /> FILTER TESTS
                    </button>
                    <button className="flex-1 md:flex-none bg-primary text-white px-8 py-4 rounded-3xl text-sm font-black shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all">
                        CREATE CUSTOM TEST
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Academic Standing Card */}
                <div className="lg:col-span-4">
                    <div className="sticky top-24 space-y-6">
                        <div className="glass p-10 rounded-[48px] relative overflow-hidden h-fit border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-transparent shadow-2xl">
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="bg-primary/20 p-5 rounded-3xl mb-8 ring-4 ring-primary/10">
                                    <Activity className="text-primary" size={40} />
                                </div>
                                <h2 className="text-2xl font-black tracking-tight mb-2 uppercase italic">Academic Standing</h2>
                                <p className="text-sm text-muted-foreground font-medium mb-10 italic">Predicted Rank (AIR)</p>

                                <div className="relative mb-12">
                                    <div className="text-7xl font-black gradient-text tracking-tighter italic scale-125">#1,240</div>
                                    <div className="absolute -right-8 -top-4 glass px-3 py-1 rounded-lg text-[10px] font-black text-green-500 border-green-500/30">+12% CLIMB</div>
                                </div>

                                <div className="w-full space-y-6">
                                    {[
                                        { label: "Accuracy", val: 82, color: "bg-blue-500" },
                                        { label: "Speed", val: 95, color: "bg-green-500" },
                                        { label: "Consistency", val: 64, color: "bg-red-500" },
                                    ].map(s => (
                                        <div key={s.label} className="space-y-2">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                                <span>{s.label}</span>
                                                <span>{s.val}%</span>
                                            </div>
                                            <div className="flex-grow bg-white/5 h-2 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} animate={{ width: `${s.val}%` }} className={`${s.color} h-full rounded-full`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
                            <div className="absolute left-10 top-10 w-24 h-24 bg-secondary/10 blur-[60px] rounded-full" />
                        </div>

                        <div className="glass p-8 rounded-[40px] border-2 border-white/5 bg-white/[0.02]">
                            <h3 className="font-black text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Achievements</h3>
                            <div className="flex flex-wrap gap-3">
                                {["🔥 14d", "📐 expert", "⚡ fast", "🛡️ consistent"].map(t => (
                                    <span key={t} className="px-4 py-2 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Test Feed */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="flex justify-between items-center px-4">
                        <h2 className="text-2xl font-black flex items-center gap-4 italic tracking-tight">
                            <ClipboardList size={28} className="text-muted-foreground" />
                            AVAILABLE TEST SERIES
                        </h2>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Global Test Live</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {availableTests.map((test, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass group p-8 rounded-[40px] hover:bg-white/[0.05] transition-all border-2 border-transparent hover:border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-8 w-full md:w-auto relative z-10">
                                    <div className="hidden md:flex flex-col items-center justify-center bg-white/5 w-20 h-20 rounded-[32px] shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                                        <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-1 italic">XP</span>
                                        <span className="text-2xl font-black leading-none text-primary">{test.xp}</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="font-black text-2xl tracking-tighter">{test.title}</h3>
                                            <span className={`text-[8px] font-black uppercase px-3 py-1 rounded-[10px] border ${test.status.includes("LIVE") ? "bg-red-500/20 text-red-500 border-red-500/30" : "bg-primary/20 text-primary border-primary/30"
                                                }`}>
                                                {test.status}
                                            </span>
                                            <span className="bg-white/5 text-muted-foreground text-[8px] font-black uppercase px-3 py-1 rounded-[10px] border border-white/10">
                                                {test.tier}
                                            </span>
                                        </div>
                                        <div className="flex gap-6 text-[10px] text-muted-foreground font-black uppercase tracking-widest italic">
                                            <span className="flex items-center gap-2"><Timer size={14} className="text-primary" /> {test.duration}</span>
                                            <span className="flex items-center gap-2"><ClipboardList size={14} className="text-primary" /> {test.questions} Problems</span>
                                            <span className="flex items-center gap-2 text-green-500"><Activity size={14} /> {test.participants} Aspirants</span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href={`/tests/${test.id}`}
                                    className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-[24px] font-black text-sm transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-xl relative z-10 group-hover:bg-primary group-hover:text-white"
                                >
                                    START NOW <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-full bg-primary/5 -skew-x-12 translate-x-16 group-hover:bg-primary/10 transition-all" />
                            </motion.div>
                        ))}
                    </div>

                    <button className="w-full py-6 rounded-[32px] border-4 border-dashed border-white/5 hover:border-primary/50 text-xs font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-all flex items-center justify-center gap-4 bg-white/[0.01]">
                        Load More Tests
                    </button>
                </div>
            </div>
        </div>
    );
}
