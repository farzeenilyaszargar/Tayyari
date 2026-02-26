"use client";

import { useState, useEffect } from "react";
import {
    Timer,
    ChevronLeft,
    ChevronRight,
    Flag,
    Settings,
    Maximize2,
    HelpCircle,
    Zap,
    Sword,
    ShieldAlert,
    Save,
    Rocket,
    CheckCircle2,
    BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
    {
        id: 1,
        subject: "Physics",
        topic: "Modern Physics",
        text: "The work function of a substance is 4.0 eV. The longest wavelength of light that can cause photoelectron emission from this substance is approximately:",
        options: ["310 nm", "400 nm", "500 nm", "250 nm"],
        difficulty: "Medium",
        points: 100,
    },
    {
        id: 2,
        subject: "Chemistry",
        topic: "Organic",
        text: "Which of the following compounds will not undergo Friedel-Crafts reaction?",
        options: ["Benzene", "Nitrobenzene", "Toluene", "Anisole"],
        difficulty: "Hard",
        points: 250,
    },
    {
        id: 3,
        subject: "Maths",
        topic: "Calculus",
        text: "The area bounded by the curve y = |x-1| and y = 3-|x| is:",
        options: ["2", "3", "4", "6"],
        difficulty: "Advanced",
        points: 500,
    },
];

export default function TestInterface({ params }: { params: { id: string } }) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10800); // 3 hours
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [flagged, setFlagged] = useState<number[]>([]);
    const [subject, setSubject] = useState("Physics");

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const currentQuestion = questions[currentIdx];

    return (
        <div className="fixed inset-0 bg-[#050505] text-white flex flex-col z-[100]">
            {/* Top Header */}
            <header className="h-16 border-b border-white/10 flex items-center justify-between px-8 bg-black/40 backdrop-blur-xl">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <BookOpen className="text-primary animate-pulse" size={20} />
                        <span className="font-black tracking-tighter text-xl uppercase italic">JEE Assessment #104</span>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10" />
                    <nav className="flex gap-4">
                        {["Physics", "Chemistry", "Maths"].map((s) => (
                            <button
                                key={s}
                                onClick={() => setSubject(s)}
                                className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${subject === s ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "text-muted-foreground hover:text-white"}`}
                            >
                                {s}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 glass px-6 py-2 rounded-2xl border-primary/20">
                        <Timer className={`${timeLeft < 600 ? "text-red-500 animate-bounce" : "text-primary"}`} size={20} />
                        <span className={`font-mono text-xl font-bold ${timeLeft < 600 ? "text-red-500" : ""}`}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors"><Settings size={20} /></button>
                    <button className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2 rounded-xl text-xs font-black transition-all border border-red-500/20">
                        EXIT ASSESSMENT
                    </button>
                </div>
            </header>

            {/* Main Test Area */}
            <div className="flex-grow flex overflow-hidden">
                {/* Left Side: Question */}
                <div className="flex-grow flex flex-col p-12 overflow-y-auto">
                    <div className="max-w-4xl mx-auto w-full space-y-12">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${currentQuestion.difficulty === "Advanced" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                                        currentQuestion.difficulty === "Hard" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" :
                                            "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                    }`}>
                                    {currentQuestion.difficulty} Level
                                </span>
                                <span className="text-xs font-bold text-muted-foreground underline decoration-primary underline-offset-4 decoration-2 italic">
                                    Topic: {currentQuestion.topic}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-yellow-500 font-black">
                                <Zap size={18} />
                                +{currentQuestion.points} XP
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold leading-tight">
                                <span className="text-primary italic mr-4">Q{currentQuestion.id}.</span>
                                {currentQuestion.text}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentQuestion.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setAnswers({ ...answers, [currentQuestion.id]: idx })}
                                        className={`group relative p-6 rounded-3xl text-left border-2 transition-all flex items-center gap-4 ${answers[currentQuestion.id] === idx
                                                ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                                                : "bg-white/5 border-white/5 hover:border-white/20"
                                            }`}
                                    >
                                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-colors ${answers[currentQuestion.id] === idx ? "bg-primary text-white" : "bg-white/10 text-muted-foreground group-hover:bg-white/20"
                                            }`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="text-lg font-medium">{opt}</span>
                                        {answers[currentQuestion.id] === idx && (
                                            <div className="absolute top-4 right-4"><Zap size={16} className="text-primary animate-pulse" /></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="mt-auto pt-12 flex justify-between items-center max-w-4xl mx-auto w-full px-4">
                        <button
                            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
                            disabled={currentIdx === 0}
                            className="px-8 py-3 rounded-2xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed font-bold flex items-center gap-2 transition-all"
                        >
                            <ChevronLeft size={20} /> Previous Question
                        </button>
                        <div className="flex gap-4">
                            <button
                                onClick={() => {
                                    if (flagged.includes(currentQuestion.id)) {
                                        setFlagged(flagged.filter(id => id !== currentQuestion.id));
                                    } else {
                                        setFlagged([...flagged, currentQuestion.id]);
                                    }
                                }}
                                className={`p-4 rounded-2xl border transition-all ${flagged.includes(currentQuestion.id)
                                        ? "bg-orange-500/20 border-orange-500 text-orange-500"
                                        : "bg-white/5 border-white/10 text-muted-foreground hover:text-white"
                                    }`}
                            >
                                <Flag size={20} />
                            </button>
                            <button className="px-8 py-3 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2 uppercase tracking-tighter">
                                Show Solution
                            </button>
                        </div>
                        <button
                            onClick={() => setCurrentIdx(Math.min(questions.length - 1, currentIdx + 1))}
                            className="px-8 py-3 rounded-2xl bg-primary text-white font-black flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/25"
                        >
                            {currentIdx === questions.length - 1 ? "SUBMIT ASSESSMENT" : "Next Question"} <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Navigation Palette */}
                <aside className="w-80 border-l border-white/10 bg-black/20 p-6 flex flex-col">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-4 italic">Navigation Palette</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {Array.from({ length: 30 }).map((_, i) => (
                                    <button
                                        key={i}
                                        className={`h-12 rounded-xl text-xs font-black transition-all border-2 ${i < questions.length ? (
                                                answers[questions[i]?.id] !== undefined ? "bg-primary border-primary text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]" :
                                                    flagged.includes(questions[i]?.id) ? "bg-orange-500 border-orange-500 text-white" :
                                                        "bg-white/5 border-white/10 text-muted-foreground hover:border-white/30"
                                            ) : "bg-white/2 border-white/2 cursor-not-allowed opacity-20"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-5 rounded-3xl border-primary/20 space-y-4">
                            <h4 className="flex items-center gap-2 text-sm font-bold italic">
                                <CheckCircle2 size={16} className="text-primary" />
                                Performance Tracking
                            </h4>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">
                                    <span>Questions Attempted</span>
                                    <span>{Object.keys(answers).length}/30</span>
                                </div>
                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(Object.keys(answers).length / 30) * 100}%` }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground italic">Legend</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="w-4 h-4 rounded bg-primary" />
                                    <span className="text-muted-foreground italic">Answered</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="w-4 h-4 rounded bg-orange-500" />
                                    <span className="text-muted-foreground italic">Marked for Review</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="w-4 h-4 rounded border border-white/20" />
                                    <span className="text-muted-foreground italic">Not Visited</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <button className="w-full py-4 rounded-2xl bg-white text-black font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                            <Save size={18} /> SAVE PROGRESS
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
