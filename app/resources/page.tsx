"use client";

import { Download, FileText, Book, Search, Filter, ExternalLink, Library } from "lucide-react";
import { useState } from "react";

const pyqs = [
    { title: "JEE Advanced 2024 - Paper 1", type: "PDF", size: "2.4 MB", year: 2024 },
    { title: "JEE Main 2024 - Session 2", type: "PDF", size: "1.8 MB", year: 2024 },
    { title: "JEE Advanced 2023 - Paper 2", type: "PDF", size: "3.1 MB", year: 2023 },
];

const books = [
    { title: "Concepts of Physics", author: "H.C. Verma", category: "Physics", cover: "bg-blue-600/20" },
    { title: "Organic Chemistry", author: "Morrison & Boyd", category: "Chemistry", cover: "bg-green-600/20" },
    { title: "Integral Calculus", author: "Amit M. Agarwal", category: "Maths", cover: "bg-purple-600/20" },
];

export default function Resources() {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-12">
            <header className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
                        Digital <span className="gradient-text">Library</span>
                        <Library className="text-primary" size={32} />
                    </h1>
                    <p className="text-muted-foreground mt-2">Access excellence. Download high-quality study materials, hand-picked books, and exhaustive PYQ archives.</p>
                </div>
                <div className="w-full md:w-96 flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-2 hover:border-primary/50 transition-all group">
                    <Search size={18} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search PYQs, books, or topics..."
                        className="bg-transparent border-none outline-none px-3 py-1 w-full text-sm"
                    />
                    <kbd className="hidden sm:inline-block px-1.5 py-0.5 border border-white/20 rounded-md text-[10px] text-muted-foreground">⌘K</kbd>
                </div>
            </header>

            {/* Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* PYQ Archive */}
                <div className="lg:col-span-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <FileText size={20} className="text-secondary" />
                            Previous Year Questions
                        </h2>
                        <button className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline decoration-2 underline-offset-4 cursor-pointer transition-all">
                            Filter by Year
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pyqs.map((pyq, i) => (
                            <div key={i} className="glass p-5 rounded-3xl flex items-center justify-between group hover:bg-white/[0.04] transition-all cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm line-clamp-1">{pyq.title}</h3>
                                        <p className="text-[10px] text-muted-foreground mt-1 font-medium">{pyq.year} • {pyq.size}</p>
                                    </div>
                                </div>
                                <button className="p-2 opacity-0 group-hover:opacity-100 bg-white/5 hover:bg-secondary/10 hover:text-secondary rounded-xl transition-all">
                                    <Download size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recommended Books */}
                <div className="lg:col-span-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Book size={20} className="text-accent" />
                            Legendary Reference Books
                        </h2>
                        <div className="flex gap-2">
                            {["all", "physics", "chemistry", "maths"].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5 transition-all ${activeCategory === cat ? "bg-accent/10 text-accent border-accent/20" : "hover:bg-white/5 text-muted-foreground"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {books.filter(b => activeCategory === "all" || b.category.toLowerCase() === activeCategory).map((book, i) => (
                            <div key={i} className="group relative">
                                <div className={`aspect-[3/4] rounded-[32px] ${book.cover} mb-4 relative overflow-hidden flex items-center justify-center p-8 transition-all group-hover:scale-[1.02] cursor-pointer`}>
                                    <Book size={80} className="text-white/20 group-hover:text-white/40 transition-colors" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <button className="w-full bg-white text-black py-2.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2">
                                            <ExternalLink size={14} /> View Book
                                        </button>
                                    </div>
                                </div>
                                <h3 className="font-bold text-sm">{book.title}</h3>
                                <p className="text-xs text-muted-foreground mt-1 italic">{book.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
