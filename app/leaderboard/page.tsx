"use client";

import { Trophy, TrendingUp, Medal, Search, Crown, ArrowUp, ArrowDown, Minus } from "lucide-react";

const leaders = [
    { rank: 1, name: "Aryan Sharma", points: "24,500", air: "#12", change: "up", avatar: "AS" },
    { rank: 2, name: "Isha Gupta", points: "23,850", air: "#45", change: "neutral", avatar: "IG" },
    { rank: 3, name: "Vikram Reddy", points: "23,100", air: "#89", change: "down", avatar: "VR" },
    { rank: 4, name: "Sneha Kapur", points: "22,400", air: "#124", change: "up", avatar: "SK" },
    { rank: 5, name: "Rahul Verma", points: "21,950", air: "#210", change: "up", avatar: "RV" },
    { rank: 6, name: "Amit Singh", points: "21,200", air: "#305", change: "down", avatar: "AS" },
];

export default function Leaderboard() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-12">
            <header className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-black uppercase tracking-[0.2em]">
                    <Trophy size={14} /> Global Rankings
                </div>
                <h1 className="text-5xl font-black tracking-tighter">Global <span className="gradient-text">Leaderboard</span></h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">Track your standing among top JEE aspirants. Your rank is based on points earned from tests and daily practice.</p>
            </header>

            {/* Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end px-4 py-8">
                {/* 2nd Place */}
                <div className="order-2 md:order-1 flex flex-col items-center space-y-4 group">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-[32px] bg-slate-400/20 flex items-center justify-center text-2xl font-black border-4 border-slate-400 group-hover:scale-110 transition-transform">
                            {leaders[1].avatar}
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-400 text-black px-3 py-1 rounded-lg text-xs font-black">2ND</div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold">{leaders[1].name}</h3>
                        <p className="text-sm font-black text-slate-400">{leaders[1].points} pts</p>
                    </div>
                </div>

                {/* 1st Place */}
                <div className="order-1 md:order-2 flex flex-col items-center space-y-4 group -mt-12">
                    <div className="relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-yellow-500 animate-bounce">
                            <Crown size={40} />
                        </div>
                        <div className="w-32 h-32 rounded-[40px] bg-yellow-500/20 flex items-center justify-center text-4xl font-black border-4 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform">
                            {leaders[0].avatar}
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1.5 rounded-xl text-xs font-black">1ST</div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold">{leaders[0].name}</h3>
                        <p className="text-lg font-black text-yellow-500">{leaders[0].points} pts</p>
                    </div>
                </div>

                {/* 3rd Place */}
                <div className="order-3 flex flex-col items-center space-y-4 group">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-[28px] bg-orange-600/20 flex items-center justify-center text-xl font-black border-4 border-orange-600 group-hover:scale-110 transition-transform">
                            {leaders[2].avatar}
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-600 text-black px-3 py-1 rounded-lg text-xs font-black">3RD</div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold">{leaders[2].name}</h3>
                        <p className="text-sm font-black text-orange-600">{leaders[2].points} pts</p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="glass rounded-[40px] overflow-hidden border border-white/5">
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-4">
                        <button className="text-sm font-bold border-b-2 border-primary px-2 pb-1">Overall</button>
                        <button className="text-sm font-bold text-muted-foreground hover:text-white transition-colors px-2 pb-1">This Week</button>
                        <button className="text-sm font-bold text-muted-foreground hover:text-white transition-colors px-2 pb-1">Friends</button>
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                        <input
                            type="text"
                            placeholder="Search rankings..."
                            className="bg-white/5 border-none rounded-2xl pl-10 pr-4 py-2 w-full text-sm outline-none focus:ring-1 ring-primary/50"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest text-muted-foreground border-b border-white/5">
                                <th className="px-8 py-4">Rank</th>
                                <th className="px-8 py-4">User</th>
                                <th className="px-8 py-4 text-center">Score</th>
                                <th className="px-8 py-4 text-center">Est. AIR</th>
                                <th className="px-8 py-4 text-right">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {leaders.map((user) => (
                                <tr key={user.rank} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-5">
                                        <span className="text-lg font-black italic opacity-20 group-hover:opacity-100 transition-opacity">#{user.rank}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-xs">
                                                {user.avatar}
                                            </div>
                                            <span className="font-bold">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className="font-black text-primary">{user.points}</span>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className="bg-white/5 px-3 py-1 rounded-lg text-xs font-bold">{user.air}</span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end">
                                            {user.change === "up" ? (
                                                <div className="p-1.5 bg-green-500/10 text-green-500 rounded-lg"><ArrowUp size={16} /></div>
                                            ) : user.change === "down" ? (
                                                <div className="p-1.5 bg-red-500/10 text-red-500 rounded-lg"><ArrowDown size={16} /></div>
                                            ) : (
                                                <div className="p-1.5 bg-white/5 text-muted-foreground rounded-lg"><Minus size={16} /></div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 text-center border-t border-white/5">
                    <button className="text-xs font-black uppercase tracking-widest text-primary hover:tracking-[0.2em] transition-all">
                        Show more aspirants
                    </button>
                </div>
            </div>
        </div>
    );
}
