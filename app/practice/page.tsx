"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Clock, Flame, ChevronRight, PlayCircle } from "lucide-react";

const problems = [
    {
        id: 1,
        subject: "Physics",
        topic: "Rotational Dynamics",
        difficulty: "Hard",
        points: 50,
        status: "completed",
        question: "A solid sphere of mass M and radius R rolls without slipping down an inclined plane of height h...",
    },
    {
        id: 2,
        subject: "Maths",
        topic: "Complex Numbers",
        difficulty: "Medium",
        points: 30,
        status: "in-progress",
        question: "Let z be a complex number such that |z| = 1 and arg(z) = θ. Then the value of...",
    },
    {
        id: 3,
        subject: "Chemistry",
        topic: "Chemical Bonding",
        difficulty: "Easy",
        points: 20,
        status: "pending",
        question: "Which of the following molecules has the highest dipole moment?",
    },
];

export default function Practice() {
    const [activeTab, setActiveTab] = useState("daily");

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">Daily <span className="gradient-text">Practice</span></h1>
                    <p className="text-muted-foreground mt-2">Sharpen your skills with hand-picked problems updated every 24 hours.</p>
                </div>
                <div className="flex bg-white/5 p-1 rounded-2xl">
                    <button
                        onClick={() => setActiveTab("daily")}
                        className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "daily" ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-white/5 text-muted-foreground"}`}
                    >
                        Daily Quest
                    </button>
                    <button
                        onClick={() => setActiveTab("archive")}
                        className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "archive" ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-white/5 text-muted-foreground"}`}
                    >
                        Archive
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Streak & Stats */}
                <div className="space-y-6">
                    <div className="glass p-6 rounded-3xl text-center">
                        <div className="inline-flex p-4 bg-orange-500/10 rounded-full mb-4">
                            <Flame className="text-orange-500 animate-pulse" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold italic">14 Day</h2>
                        <p className="text-sm text-muted-foreground">Current Streak</p>
                        <div className="mt-6 pt-6 border-t border-white/5 flex justify-around">
                            <div>
                                <p className="text-lg font-bold">156</p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Solved</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold">4,200</p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">earned</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-6 rounded-3xl">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Subject Focus</h3>
                        <div className="space-y-4">
                            {[
                                { label: "Physics", val: 80, color: "bg-blue-500" },
                                { label: "Maths", val: 65, color: "bg-purple-500" },
                                { label: "Chemistry", val: 90, color: "bg-green-500" },
                            ].map(s => (
                                <div key={s.label}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>{s.label}</span>
                                        <span>{s.val}%</span>
                                    </div>
                                    <div className="w-full bg-white/5 h-1.5 rounded-full">
                                        <div className={`${s.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${s.val}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Problem Feed */}
                <div className="lg:col-span-3 space-y-6">
                    {problems.map((prob) => (
                        <div key={prob.id} className="glass p-6 rounded-3xl hover:bg-white/[0.04] transition-all group border border-transparent hover:border-white/10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${prob.subject === "Physics" ? "bg-blue-500/10 text-blue-400" :
                                            prob.subject === "Maths" ? "bg-purple-500/10 text-purple-400" :
                                                "bg-green-500/10 text-green-400"
                                        }`}>
                                        {prob.subject}
                                    </span>
                                    <span className="text-xs text-muted-foreground italic">• {prob.topic}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-accent">
                                    <Clock size={14} /> 5-10 mins
                                </div>
                            </div>

                            <h3 className="text-lg font-medium mb-4 line-clamp-2 leading-relaxed">
                                {prob.question}
                            </h3>

                            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        {prob.status === "completed" ? (
                                            <CheckCircle2 size={18} className="text-green-500" />
                                        ) : prob.status === "in-progress" ? (
                                            <PlayCircle size={18} className="text-primary" />
                                        ) : (
                                            <Circle size={18} className="text-muted-foreground" />
                                        )}
                                        <span className="text-xs font-bold capitalize">{prob.status.replace("-", " ")}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap size={16} className="text-yellow-500" />
                                        <span className="text-xs font-bold">+{prob.points} Points</span>
                                    </div>
                                </div>
                                <button className="bg-white/5 hover:bg-primary hover:text-white px-6 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 group-hover:gap-3">
                                    Solve Now <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
