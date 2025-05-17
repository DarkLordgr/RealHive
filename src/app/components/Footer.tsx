'use client';

import { FaXTwitter, FaDiscord } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a15] text-white py-6 border-t border-yellow-500 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} RealHive. All rights reserved.</p>

        <div className="flex gap-6 text-2xl">
          <Link href="https://twitter.com/YOUR_HANDLE" target="_blank" className="hover:text-yellow-400 transition">
            <FaXTwitter />
          </Link>
          <Link href="https://discord.gg/YOUR_INVITE" target="_blank" className="hover:text-yellow-400 transition">
            <FaDiscord />
          </Link>
          <Link href="/support" className="hover:text-yellow-400 transition text-base">
            🛠 Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
