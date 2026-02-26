"use client";

import { TrendingUp, Award, Target, BookOpen, ChevronRight, Zap } from "lucide-react";
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

const data = [
    { name: "Day 1", score: 120 },
    { name: "Day 2", score: 150 },
    { name: "Day 3", score: 140 },
    { name: "Day 4", score: 180 },
    { name: "Day 5", score: 195 },
    { name: "Day 6", score: 210 },
    { name: "Day 7", score: 230 },
];

const badges = [
    { name: "Early Bird", icon: "🌅", color: "bg-blue-500/20 text-blue-400" },
    { name: "Math Pro", icon: "🧮", color: "bg-purple-500/20 text-purple-400" },
    { name: "Consistent", icon: "🔥", color: "bg-orange-500/20 text-orange-400" },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            {/* Welcome Section */}
            <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">Welcome back, <span className="gradient-text">Aspirant</span>!</h1>
                    <p className="text-muted-foreground mt-2">You're in the top 5% of learners this week. Keep it up!</p>
                </div>
                <div className="flex gap-4">
                    <div className="glass p-4 rounded-2xl flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-xl">
                            <Zap className="text-primary" size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Points</p>
                            <p className="text-xl font-bold">12,450</p>
                        </div>
                    </div>
                    <div className="glass p-4 rounded-2xl flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-xl">
                            <Target className="text-secondary" size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">AIR Prediction</p>
                            <p className="text-xl font-bold">#1,240</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Progress Graph */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass p-6 rounded-3xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <TrendingUp size={20} className="text-primary" />
                                Performance Trend
                            </h2>
                            <select className="bg-white/5 border-none rounded-lg text-sm px-2 py-1 outline-none">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                            </select>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                                    <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-3xl group cursor-pointer hover:border-primary/50 transition-all">
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <BookOpen size={18} className="text-secondary" />
                                Active Test
                            </h3>
                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground font-medium">Full Syllabus Mock Test #12</p>
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-secondary h-full w-[45%]" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">45% Completed</span>
                                    <button className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Continue <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-3xl group cursor-pointer hover:border-accent/50 transition-all">
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <Zap size={18} className="text-accent" />
                                Daily Practice
                            </h3>
                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground font-medium">Today's Goal: 15/20 Problems</p>
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-accent h-full w-[75%]" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">75% Completed</span>
                                    <button className="text-xs font-bold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Complete Now <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Badges & Leaderboard */}
                <div className="space-y-8">
                    <div className="glass p-6 rounded-3xl">
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Award size={20} className="text-yellow-500" />
                            Recent Badges
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {badges.map((badge) => (
                                <div key={badge.name} className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 ${badge.color}`}>
                                    <span>{badge.icon}</span>
                                    {badge.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-6 rounded-3xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Leaderboard</h2>
                            <button className="text-xs text-primary font-bold">View All</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Rahul S.", points: "15,200", rank: 1, trend: "up" },
                                { name: "Sneha P.", points: "14,850", rank: 2, trend: "down" },
                                { name: "Amit K.", points: "14,100", rank: 3, trend: "neutral" },
                            ].map((user) => (
                                <div key={user.name} className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${user.rank === 1 ? "bg-yellow-500/20 text-yellow-500" :
                                                user.rank === 2 ? "bg-slate-400/20 text-slate-400" :
                                                    "bg-orange-600/20 text-orange-600"
                                            }`}>
                                            {user.rank}
                                        </span>
                                        <span className="text-sm font-medium">{user.name}</span>
                                    </div>
                                    <span className="text-sm font-bold">{user.points}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
