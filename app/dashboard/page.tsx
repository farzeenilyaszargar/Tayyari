"use client";

import { TrendingUp, Award, Target, BookOpen, ChevronRight, Zap, Trophy, Shield, Rocket, Flame, Sword, Sparkles } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from "recharts";
import { motion } from "framer-motion";

const performanceData = [
    { name: "Day 1", score: 120 },
    { name: "Day 2", score: 150 },
    { name: "Day 3", score: 140 },
    { name: "Day 4", score: 180 },
    { name: "Day 5", score: 195 },
    { name: "Day 6", score: 210 },
    { name: "Day 7", score: 230 },
];

const goals = [
    { id: 1, title: "Morning Mastery", reward: "200 XP", progress: 100, type: "Daily" },
    { id: 2, title: "Marathon Solver", reward: "500 XP", progress: 45, type: "Epic" },
    { id: 3, title: "Concept Cracker", reward: "150 XP", progress: 0, type: "Weekly" },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            {/* Student Profile & XP Section */}
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 glass p-8 rounded-[40px] border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center border-4 border-primary group cursor-pointer hover:scale-110 transition-transform">
                                <span className="text-4xl font-black italic">A</span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-accent text-black font-black px-2 py-0.5 rounded-lg text-xs">LVL 24</div>
                        </div>
                        <div className="flex-grow space-y-4 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                                <h1 className="text-4xl font-black tracking-tighter uppercase">JEE Aspirant</h1>
                                <div className="flex gap-2">
                                    <span className="bg-primary/20 text-primary text-[10px] font-black uppercase px-2 py-1 rounded-md border border-primary/30">Candidate</span>
                                    <span className="bg-yellow-500/20 text-yellow-500 text-[8px] font-black uppercase px-2 py-1 rounded-md border border-yellow-500/30 ring-2 ring-yellow-500/20">Pro Member</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-muted-foreground">
                                    <span>Knowledge Progress</span>
                                    <span className="text-primary tracking-normal">14,250 / 20,000 XP</span>
                                </div>
                                <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-1 border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "72%" }}
                                        className="h-full xp-bar rounded-full relative"
                                    >
                                        <div className="absolute inset-0 shimmer opacity-20" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center p-4 glass rounded-3xl border-orange-500/30 group hover:bg-orange-500/10 transition-all cursor-pointer">
                                <Flame className="text-orange-500 mx-auto mb-1 animate-pulse" size={24} />
                                <p className="text-2xl font-black leading-none">14</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">STREAK</p>
                            </div>
                            <div className="text-center p-4 glass rounded-3xl border-primary/30 group hover:bg-primary/10 transition-all cursor-pointer">
                                <Trophy className="text-primary mx-auto mb-1" size={24} />
                                <p className="text-2xl font-black leading-none">1.2k</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">RANK</p>
                            </div>
                        </div>
                    </div>
                    {/* Background FX */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full animate-pulse" />
                </div>

                <div className="glass p-8 rounded-[40px] flex flex-col justify-center items-center text-center space-y-4 group cursor-pointer hover:border-accent/50 transition-all">
                    <div className="p-4 bg-accent/20 rounded-3xl text-accent group-hover:scale-110 transition-transform">
                        <Shield size={32} />
                    </div>
                    <div>
                        <h3 className="text-lg font-black tracking-tight uppercase">Analysis</h3>
                        <p className="text-xs text-muted-foreground font-medium italic">Available performance report</p>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-widest py-2 px-4 bg-white/5 rounded-xl hover:bg-white/10 w-full transition-all">View Details</button>
                </div>
            </section>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Progress Graph */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass p-8 rounded-[40px]">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-black flex items-center gap-3">
                                <TrendingUp size={24} className="text-primary" />
                                PERFORMANCE ANALYTICS
                            </h2>
                            <div className="flex bg-white/5 p-1 rounded-xl">
                                <button className="px-4 py-1.5 text-[10px] font-black uppercase rounded-lg bg-primary text-white">Daily</button>
                                <button className="px-4 py-1.5 text-[10px] font-black uppercase rounded-lg text-muted-foreground hover:text-white transition-all">Monthly</button>
                            </div>
                        </div>
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={performanceData}>
                                    <defs>
                                        <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                                    <XAxis dataKey="name" stroke="#555" fontSize={10} fontWeight="900" tickLine={false} axisLine={false} />
                                    <YAxis stroke="#555" fontSize={10} fontWeight="900" tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#050505', border: '2px solid #222', borderRadius: '20px' }}
                                        itemStyle={{ color: '#fff', fontWeight: '900' }}
                                    />
                                    <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#scoreGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass p-8 rounded-[40px] group cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-all bg-gradient-to-br from-secondary/5 to-transparent">
                            <h3 className="font-black mb-6 flex items-center gap-3 text-sm tracking-[0.2em] uppercase">
                                <BookOpen size={20} className="text-secondary" />
                                ACTIVE PRACTICE
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-lg font-bold leading-tight line-clamp-1">Full Syllabus Mock Test #12</p>
                                    <p className="text-[10px] font-black text-muted-foreground uppercase mt-1 tracking-widest">Physics • Chemistry • Maths</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span>PROGRESS</span>
                                        <span className="text-secondary">45%</span>
                                    </div>
                                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} className="bg-secondary h-full" />
                                    </div>
                                </div>
                                <button className="w-full py-3 rounded-2xl bg-secondary text-white font-black text-sm flex items-center justify-center gap-2 group-hover:gap-4 transition-all shadow-lg shadow-secondary/20">
                                    CONTINUE TEST <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-[40px] group cursor-pointer border-2 border-transparent hover:border-accent/30 transition-all bg-gradient-to-br from-accent/5 to-transparent">
                            <h3 className="font-black mb-6 flex items-center gap-3 text-sm tracking-[0.2em] uppercase">
                                <Target size={20} className="text-accent" />
                                DAILY GOALS
                            </h3>
                            <div className="space-y-4">
                                {goals.map(q => (
                                    <div key={q.id} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-muted-foreground italic">{q.title}</span>
                                            <span className="text-[10px] font-black text-accent">{q.reward}</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                            <div className={`h-full bg-accent transition-all duration-1000`} style={{ width: `${q.progress}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Activity & Achievements */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-[40px] relative overflow-hidden group border-2 border-accent/20">
                        <div className="relative z-10">
                            <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                                <Target size={24} className="text-accent" />
                                RANK PREJECTION
                            </h2>
                            <div className="bg-white/5 p-6 rounded-3xl text-center backdrop-blur-md">
                                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1 italic">Predicted AIR</p>
                                <div className="text-6xl font-black gradient-text tracking-tighter italic scale-110 group-hover:scale-125 transition-transform duration-500">#1,240</div>
                                <div className="flex items-center justify-center gap-2 mt-4 text-green-500 text-xs font-black">
                                    <div className="p-1 bg-green-500/10 rounded-md"><TrendingUp size={14} /></div>
                                    TOP 1% PERCENTILE
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-accent/10 blur-[60px] rounded-full group-hover:bg-accent/20 transition-all" />
                    </div>

                    <div className="glass p-8 rounded-[40px]">
                        <h2 className="text-xl font-black mb-6 tracking-tight">COMMUNITY FEED</h2>
                        <div className="space-y-6">
                            {[
                                { user: "Rahul S.", action: "reached LEVEL 50", time: "2m ago", icon: "💎" },
                                { user: "Sneha P.", action: "completed ADVANCED PHYSICS", time: "15m ago", icon: "⚡" },
                                { user: "Amit K.", action: "earned 500 XP", time: "1h ago", icon: "🔥" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all cursor-crosshair">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <p className="text-sm">
                                            <span className="font-black text-primary">{item.user}</span>
                                            <span className="text-muted-foreground font-medium italic italic ml-2">{item.action}</span>
                                        </p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 rounded-2xl border-2 border-dashed border-white/5 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:border-primary/50 hover:text-white transition-all">
                            VIEW COMMUNITY HUB
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
