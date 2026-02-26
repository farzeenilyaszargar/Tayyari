"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <p className="font-black text-3xl gradient-text tracking-tighter">tayyari</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Empowering JEE aspirants with AI-driven testing and personalized learning ecosystems.
                    </p>
                    <div className="flex gap-4">
                        <Github size={20} className="text-muted-foreground hover:text-white cursor-pointer transition-colors" />
                        <Twitter size={20} className="text-muted-foreground hover:text-white cursor-pointer transition-colors" />
                        <Linkedin size={20} className="text-muted-foreground hover:text-white cursor-pointer transition-colors" />
                        <Instagram size={20} className="text-muted-foreground hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-6">Platform</h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                        <li><Link href="/tests" className="hover:text-primary transition-colors">Test Arena</Link></li>
                        <li><Link href="/practice" className="hover:text-primary transition-colors">Daily Practice</Link></li>
                        <li><Link href="/leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-6">Resources</h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/resources" className="hover:text-primary transition-colors">PYQ Archive</Link></li>
                        <li><Link href="/resources" className="hover:text-primary transition-colors">Reference Books</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Study Planner</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-6">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">Join our newsletter for the latest JEE news and strategies.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm flex-grow outline-none focus:ring-1 ring-primary"
                        />
                        <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-white/90 transition-all">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                <p>© 2026 Tayyari AI Labs. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Service</Link>
                    <Link href="#" className="hover:text-white">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}