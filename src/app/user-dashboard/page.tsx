'use client';

import { useState } from 'react';

export default function UserDashboard() {
  const [countdown] = useState('6m 0d 0h');

    

  return (
    
      <main className="min-h-screen bg-gradient-to-br from-[#0e0f1a] to-[#1b1f35] text-white px-6 py-16 flex flex-col items-center relative">
                  
            
                                          
                  {/* TOP-RIGHT USER PROFILE */}
                  <div className="absolute top-6 right-6 bg-[#141622] border border-yellow-500/20 rounded-lg p-4 text-white shadow-md w-[220px] z-50">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">👤 User Profile</h3>
                    <p><strong>Wallet:</strong> <span className="text-yellow-300">0xAbC123...789DeF</span></p>
                    <p className="mt-2"><strong>Lifetime Rewards:</strong> <span className="text-green-400">$134.75</span></p>
                    <p className="mt-2 text-gray-400 text-xs">Last synced: May 16, 2025</p>
                  </div>

                  {/* CENTERED TITLE */}
                  <h1 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">📊 Hive Dashboard</h1>




      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl text-center">
        {/* Total Minted */}
        <div className="bg-[#141622] p-6 rounded-xl shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">Total Hives Minted</h2>
          <p className="text-3xl font-extrabold">7,430</p>
        </div>

        {/* Your Hives */}
        <div className="bg-[#141622] p-6 rounded-xl shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">Your Hives</h2>
          <p className="text-3xl font-extrabold">3</p>
        </div>

        {/* Next Drop */}
        <div className="bg-[#141622] p-6 rounded-xl shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">Next Honey Drop</h2>
          <p className="text-3xl font-extrabold">{countdown}</p>
        </div>

        {/* Claimable Rewards */}
        <div className="bg-[#141622] p-6 rounded-xl shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">Claimable Rewards</h2>
          <p className="text-3xl font-extrabold text-green-400">$32.45</p>
        </div>
      </div>

{/* Claim Section */}
<section className="mt-20 w-full max-w-3xl bg-[#141622] border border-yellow-400/20 rounded-xl p-6 shadow text-center">
  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Claim Your Reward</h2>

  <p className="text-gray-300 mb-6">
    Choose how you’d like to receive rewards from your hive production.
  </p>

  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition">
      💸 Claim Crypto
    </button>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition">
      🍯 Get Honey Delivery
    </button>
  </div>

  <button className="mt-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-8 rounded-full transition">
    Confirm Claim
  </button>

  {/* Claim history */}
  <div className="mt-8 text-left">
    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Claim History</h3>
    <ul className="text-sm text-white/80 space-y-1">
      <li>✅ April 1, 2025 – Claimed $28.42 in USDC</li>
      <li>✅ Jan 14, 2025 – Honey shipped to Athens, Greece</li>
    </ul>
  </div>
</section>





      {/* NFT List Section */}
<section className="mt-16 w-full max-w-6xl px-2">
  <h2 className="text-2xl font-bold text-yellow-400 mb-6">Your Hives</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[1, 2, 3].map((nftId) => (
      <div key={nftId} className="bg-[#141622] border border-yellow-400/20 rounded-xl p-4 shadow hover:shadow-yellow-400/20 transition">
                <img
          src={`/images/nft${nftId}.png`}
          alt={`Hive NFT #${nftId}`}
          className="rounded mb-4 w-full"
        />

        <h3 className="text-yellow-300 font-bold mb-2">Hive NFT #{3280 + nftId}</h3>
        <p className="text-white/80 text-sm">Status: <span className="text-green-400">Active</span></p>
        <p className="text-white/80 text-sm">Honey Produced: <span className="text-yellow-400">4.{nftId}kg</span></p>
      </div>
    ))}
  </div>

  
</section>

    </main>
  );
}
