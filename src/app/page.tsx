'use client';

import { useEffect } from 'react';
import Faq from './components/Faq';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const sectionId = url.searchParams.get('scrollTo');
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // short delay to ensure DOM is ready
      }
    }
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#0e0f1a] to-[#1b1f35] text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-20 max-w-7xl mx-auto text-center md:text-left">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500 opacity-30 blur-[160px] rounded-full pointer-events-none" />
        <div className="flex-1">
          <h2 className="text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_8px_rgba(255,193,7,0.6)] mb-6 leading-tight">
            Own the Hive. <br /> Taste the Honey.
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            RealHive turns NFTs into real-world beehives. Buy a hive, track it online, and receive fresh honey or crypto profits from the harvest.
          </p>
          <a
            href="#waitlist"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold transition shadow-md hover:shadow-yellow-500/50"
          >
            Join the Waitlist
          </a>
        </div>
        <div className="flex-1">
                      <Image
              src="/images/hivevilla1.png"
              alt="Hive"
              width={350}
              height={150}
              className="rounded-xl shadow-lg"
            />
        </div>
      </section>

      {/* How It Works */}
                  <section id="how" className="relative py-24 px-6 overflow-hidden">
              <div className="w-full max-w-6xl px-4 mx-auto">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500 opacity-30 blur-[160px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_6px_rgba(255,193,7,0.4)]">
                    How It Works
                  </h3>
                  <p className="text-gray-300 mb-12">
                    Buy your own real world beehive with digital proof (NFT) and enjoy sweet rewards either in honey or payments.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
                  {/* ... Your steps here ... */}
                </div>
              </div>
            </section>

      {/* Rewards */}
      <section id="rewards" className="py-20 px-6 bg-transparent">
        <div className="w-full max-w-6xl px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_6px_rgba(255,193,7,0.4)]">
            Rewards for NFT Holders
          </h3>
          <p className="text-gray-300 mb-12">Holding a RealHive NFT doesn’t just support bees—it brings sweet returns.
            Either in Honey or crypto, you’ll get your share of the harvest.
          </p>
          {/* ... Your rewards cards here ... */}
        </div>
      </div>
      </section>

      {/* Hivevilla image */}
      <section className="py-1 px-1 flex justify-center items-center bg-transparent">
                  <Image
            src="/images/hivevilla2.png"
            alt="Hive"
            width={300}
            height={100}
            className="rounded-xl shadow-lg"
            />
      </section>

      {/* FAQ */}
      <section id="faq">
        <Faq />
      </section>

      {/* Waitlist + Footer */}
      <section id="waitlist" className="py-20 px-6 bg-transparent">
        <div className="w-full max-w-6xl px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_6px_rgba(255,193,7,0.4)]">Get on the Waitlist</h3>
          <p className="text-gray-300 mb-8">
            Be the first to know when minting goes live. Early bees get the best rewards 🍯
          </p>
          <form action="https://example.com/submit" method="POST" className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full sm:w-auto px-4 py-3 rounded-lg border border-yellow-400/20 bg-[#0e0f1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-yellow-500/50"
            >
              Join Waitlist
            </button>
          </form>
        </div>
        </div>
      </section>
    </main>
  );
}
