"use client";

import { Download, FileText, Book, Search, Filter, ExternalLink, Library, Sparkles, Shield, Lock, Gem } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const pyqs = [
    { title: "JEE Advanced 2024 - Paper 1", type: "PDF", size: "2.4 MB", year: 2024, tier: "High Priority" },
    { title: "JEE Main 2024 - Session 2", type: "PDF", size: "1.8 MB", year: 2024, tier: "Must Do" },
    { title: "JEE Advanced 2023 - Paper 2", type: "PDF", size: "3.1 MB", year: 2023, tier: "High Priority" },
];

const books = [
    { title: "Concepts of Physics", author: "H.C. Verma", category: "Physics", cover: "bg-blue-600/20", rarity: "Essential" },
    { title: "Organic Chemistry", author: "Morrison & Boyd", category: "Chemistry", cover: "bg-green-600/20", rarity: "Recommended" },
    { title: "Integral Calculus", author: "Amit M. Agarwal", category: "Maths", cover: "bg-purple-600/20", rarity: "Advanced" },
];

export default function Resources() {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-12">
            <header className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">
                        <Library size={14} className="animate-bounce" /> Resource Library
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter flex items-center gap-3">
                        Study <span className="gradient-text">Materials.</span>
                    </h1>
                    <p className="text-muted-foreground mt-4 text-lg font-medium italic">Access comprehensive study materials, previous year papers, and reference books essential for your JEE preparation.</p>
                </div>
                <div className="w-full md:w-96 flex items-center bg-white/5 border border-white/10 rounded-[32px] px-6 py-4 hover:border-primary/50 transition-all group shadow-2xl">
                    <Search size={20} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search the archive..."
                        className="bg-transparent border-none outline-none px-4 py-1 w-full text-sm font-bold"
                    />
                </div>
            </header>

            {/* Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* PYQ Archive */}
                <div className="lg:col-span-12">
                    <div className="flex justify-between items-center mb-8 px-4">
                        <h2 className="text-2xl font-black flex items-center gap-3 tracking-tighter">
                            <FileText size={24} className="text-secondary" />
                            PREVIOUS YEAR PAPERS (PYQS)
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pyqs.map((pyq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-6 rounded-[32px] flex items-center justify-between group hover:bg-white/[0.05] transition-all cursor-pointer border-2 border-transparent hover:border-secondary/20"
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`p-4 rounded-2xl flex items-center justify-center ${pyq.tier === "High Priority" ? "bg-secondary/20 text-secondary" : "bg-blue-500/20 text-blue-400"
                                        }`}>
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-black text-sm line-clamp-1">{pyq.title}</h3>
                                            <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${pyq.tier === "High Priority" ? "border-secondary/30 text-secondary bg-secondary/5" : "border-blue-500/30 text-blue-400 bg-blue-500/5"
                                                }`}>{pyq.tier}</span>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{pyq.year} • {pyq.size}</p>
                                    </div>
                                </div>
                                <button className="p-3 bg-white/5 hover:bg-secondary hover:text-white rounded-2xl transition-all shadow-xl">
                                    <Download size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Recommended Books */}
                <div className="lg:col-span-12">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 px-4">
                        <h2 className="text-2xl font-black flex items-center gap-3 tracking-tighter">
                            <Book size={24} className="text-accent" />
                            RECOMMENDED BOOKS
                        </h2>
                        <div className="flex gap-3 bg-white/5 p-2 rounded-[24px]">
                            {["all", "physics", "chemistry", "maths"].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-accent text-black shadow-lg shadow-accent/20" : "hover:bg-white/5 text-muted-foreground"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {books.filter(b => activeCategory === "all" || b.category.toLowerCase() === activeCategory).map((book, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group flex flex-col items-center"
                            >
                                <div className={`w-full aspect-[3/4.5] rounded-[48px] ${book.cover} mb-6 relative overflow-hidden flex items-center justify-center p-12 transition-all border-4 border-transparent group-hover:border-accent/30 shadow-2xl`}>
                                    <div className="absolute top-6 left-6 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                                        <span className="text-[8px] font-black uppercase text-accent tracking-[0.2em]">{book.rarity}</span>
                                    </div>
                                    <Book size={100} className="text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                        <button className="w-full bg-accent text-black py-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                            <Download size={14} /> DOWNLOAD BOOK
                                        </button>
                                    </div>
                                </div>
                                <h3 className="font-black text-lg tracking-tight text-center">{book.title}</h3>
                                <p className="text-xs text-muted-foreground mt-1 font-bold italic">{book.author}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
