'use client';

import Image from 'next/image';

export default function SupportPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Bee Technician Image (large + aligned) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            src="/images/repair-bee.png"
            alt="Repair Bee"
            width={450}
            height={450}
            className="rounded drop-shadow-lg object-contain"
          />
        </div>

        {/* Right: Support Form */}
        <div className="flex-1 w-full max-w-lg bg-black/50 p-8 rounded-xl border border-yellow-500 shadow-lg">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">Need Help?</h1>
          <form
            action="https://formspree.io/f/mpwdkgyv"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-[#0e0f1a] text-white border border-yellow-400 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-[#0e0f1a] text-white border border-yellow-400 placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              rows={5}
              required
              className="p-3 rounded bg-[#0e0f1a] text-white border border-yellow-400 placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
