'use client';

import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig, http } from 'wagmi';
import { base, arbitrum } from 'wagmi/chains';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ThirdwebProvider } from '@thirdweb-dev/react'; // ✅ import Thirdweb
import { Base } from '@thirdweb-dev/chains'; // ✅ import chain for Thirdweb

// ✅ Wagmi + RainbowKit config
const config = getDefaultConfig({
  appName: 'RealHive',
  projectId: 'realhive-dev', // Replace in production
  chains: [arbitrum, base],
  transports: {
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThirdwebProvider activeChain={Base}> {/* ✅ Thirdweb wraps everything */}
          <WagmiConfig config={config}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>
                <Navbar />
                {children}
                <Footer />
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiConfig>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
