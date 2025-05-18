'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/?scrollTo=${id}`);
    }
  };

  // Optional: Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-[#0a0a15] border-b-4 border-yellow-500 px-6 py-4 text-white z-50 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="text-yellow-400 text-xl font-bold flex items-center gap-2">
          🐝 RealHive
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-evenly flex-1 text-sm font-semibold ml-12 gap-6">
          <Link href="/mint" className="hover:text-yellow-400 transition">Mint</Link>
          <Link href="/user-dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
          <a onClick={() => scrollToSection('how')} className="hover:text-yellow-400 cursor-pointer">How It Works</a>
          <a onClick={() => scrollToSection('rewards')} className="hover:text-yellow-400 cursor-pointer">Rewards</a>
          <a onClick={() => scrollToSection('faq')} className="hover:text-yellow-400 cursor-pointer">FAQ</a>
          <Link href="/roadmap" className="hover:text-yellow-400 transition">Roadmap</Link>
        </div>

        {/* Wallet Connect */}
        <div className="ml-4 hidden md:block">
          <ConnectButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-400 focus:outline-none text-2xl ml-auto"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 font-semibold text-sm bg-[#0a0a15] border-t border-yellow-500 py-4 px-2 rounded shadow">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Home</Link>
          <Link href="/mint" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Mint</Link>
          <Link href="/user-dashboard" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Dashboard</Link>
          <button onClick={() => scrollToSection('how')} className="text-left hover:text-yellow-400">How It Works</button>
          <button onClick={() => scrollToSection('rewards')} className="text-left hover:text-yellow-400">Rewards</button>
          <button onClick={() => scrollToSection('faq')} className="text-left hover:text-yellow-400">FAQ</button>
          <Link href="/roadmap" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Roadmap</Link>
          <div className="pt-2">
            <ConnectButton />
          </div>
        </div>
      )}
    </nav>
  );
}
