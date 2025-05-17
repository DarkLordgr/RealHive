'use client';

import Image from 'next/image';
const backgroundUrl = '/images/hive-village.png'; // ✅ Reference from public/


export default function RoadmapPage() {
  return (
    <main
  className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-start px-4 py-20"
  style={{ backgroundImage: `url(${backgroundUrl})` }}
>

      {/* Heading Section */}
      <div className="relative z-10 text-center mb-12 px-4">
        <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          RealHive Roadmap
        </h1>
            <p className="text-black font-bold text-center mb-8">
            Follow our journey from hive to harvest. We’re building the future of real-world NFT utility.
            </p>


      </div>

      {/* Roadmap Phases */}
      <div className="flex flex-col items-center gap-6 max-w-xl w-full z-10">
        {/* Phase 1 */}
        <div className="bg-black/60 rounded-md border border-yellow-500 px-6 py-4 shadow-md w-full">
          <h2 className="text-yellow-300 font-bold text-lg mb-2">
            💬 Phase 1: Fundraising & Community
          </h2>
          <p>
            Kickstart awareness, bootstrap with NFT fundraising, and grow an early swarm of supporters.
          </p>
        </div>

        {/* Phase 2 */}
        <div className="bg-black/60 rounded-md border border-yellow-500 px-6 py-4 shadow-md w-full">
          <h2 className="text-yellow-300 font-bold text-lg mb-2">
            🚀 Phase 2: Launch
          </h2>
          <p>
            Launch the platform, mint the first beehive NFTs, and onboard early community members.
          </p>
        </div>

        {/* Phase 3 */}
        <div className="bg-black/60 rounded-md border border-yellow-500 px-6 py-4 shadow-md w-full">
          <h2 className="text-yellow-300 font-bold text-lg mb-2">
            🏗️ Phase 3: Facility Build-Out
          </h2>
          <p>
            Set up the beehive farm, purchase key equipment, and establish transportation for real-world logistics.
          </p>
        </div>

        {/* Phase 4 */}
        <div className="bg-black/60 rounded-md border border-yellow-500 px-6 py-4 shadow-md w-full">
          <h2 className="text-yellow-300 font-bold text-lg mb-2">
            🌸 Phase 4: Expansion
          </h2>
          <p>
            Grow the beehive network, expand honey reward options, and integrate community ownership tools.
          </p>
        </div>
      </div>
    </main>
  );
}
