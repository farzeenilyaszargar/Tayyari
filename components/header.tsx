import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="h-16 glass sticky top-0 z-50 flex items-center px-8 justify-between">
            <Link href="/" className="flex items-center gap-2">
                <p className="font-extrabold text-2xl gradient-text tracking-tighter">tayyari</p>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
                <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
                <Link href="/tests" className="text-sm font-medium hover:text-primary transition-colors">Tests</Link>
                <Link href="/practice" className="text-sm font-medium hover:text-primary transition-colors">Practice</Link>
                <Link href="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">Leaderboard</Link>
                <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                    <Image src="/moon.png" alt="Toggle Theme" width={20} height={20} />
                </button>
                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
                    Login
                </button>
            </div>
        </header>
    );
}