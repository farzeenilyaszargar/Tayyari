"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Trophy, ShieldCheck } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <header className="h-20 glass sticky top-0 z-50 flex items-center px-8 justify-between border-b border-white/5">
            <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/40">
                    <ShieldCheck className="text-primary" size={24} />
                </div>
                <p className="font-black text-2xl gradient-text tracking-tighter italic">TAYYARI</p>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
                <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    Dashboard
                </Link>
                <Link href="/tests" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    Tests
                </Link>
                <Link href="/practice" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    Practice
                </Link>
                <Link href="/leaderboard" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    Leaderboard
                </Link>
                <Link href="/resources" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    Resources
                </Link>
            </nav>

            <div className="flex items-center gap-6">
                {/* Global Stats */}
                <div className="hidden sm:flex items-center gap-6 glass px-5 py-2 rounded-2xl border-white/10">
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-yellow-500" />
                        <span className="text-[10px] font-black italic">14,250 XP</span>
                    </div>
                    <div className="w-[1px] h-4 bg-white/10" />
                    <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-primary" />
                        <span className="text-[10px] font-black italic">LVL 24</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-black/10 dark:hover:border-white/10">
                        {theme === "dark" ? (
                            <Image src="/moon.png" alt="Toggle Theme" width={20} height={20} className="opacity-50 hover:opacity-100 transition-opacity" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun opacity-50 hover:opacity-100 transition-opacity"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                        )}
                    </button>
                    <button className="bg-foreground text-background dark:bg-white dark:text-black px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Aspirant Profile
                    </button>
                </div>
            </div>
        </header>
    );
}