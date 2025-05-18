'use client';

import {
  ConnectWallet,
  useAddress,
  useContract,
  Web3Button,
} from '@thirdweb-dev/react';
import { useState } from 'react';

const contractAddress = '0xCf5B80e09bc362A917686759AD48d8Bf0A61bD8D';

export default function MintPage() {
  const [quantity, setQuantity] = useState(1);
  const { contract } = useContract(contractAddress, 'nft-drop');
  const address = useAddress();

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
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="px-4 py-2 rounded-md text-yellow-400 text-2xl font-bold w-24 text-center border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-black"
          />

          <ConnectWallet theme="dark" btnTitle="Connect Wallet" />

          {address && (
            <Web3Button
              contractAddress={contractAddress}
              action={(contract) => contract.erc721.claim(quantity)}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition shadow-md"
            >
              Mint My Hive
            </Web3Button>
          )}

          <p className="text-yellow-400 font-semibold text-lg">Price: $100 / Hive</p>
        </div>
      </div>
    </main>
  );
}
