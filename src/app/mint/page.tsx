'use client';

import { useState } from 'react';

export default function MintPage() {
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);

  const handleMint = async () => {
    setStatus('Minting your hive...');
    setTimeout(() => {
      setStatus('✅ Successfully minted your RealHive NFT!');
    }, 2000);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-12 text-white overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-[length:1200px] opacity-80 z-0"
        style={{ backgroundImage: 'url("/images/mint-page.png")' }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 bg-black bg-opacity-70 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Mint Your Hive</h1>
        <p className="text-gray-300 mb-8">
          Claim a real-world beehive backed NFT. Mint now and join the swarm.
        </p>

        <div className="flex flex-col items-center gap-4">
          <label htmlFor="quantity" className="text-lg font-medium text-gray-200">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={10}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="px-4 py-2 rounded-md text-yellow-400 text-2xl font-bold w-24 text-center border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-black"
          />

          {!walletConnected ? (
            <button
              onClick={() => setWalletConnected(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition shadow-md"
            >
              Connect Wallet
            </button>
          ) : (
            <p className="text-green-400 font-medium">Wallet Connected ✅</p>
          )}

          <button
            onClick={handleMint}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition shadow-md"
          >
            Mint My Hive
          </button>

          <p className="text-yellow-400 font-semibold text-lg">Price: $100 / Hive</p>
          {status && <p className="mt-4 text-yellow-400 font-medium">{status}</p>}
        </div>
      </div>
    </main>
  );
}
