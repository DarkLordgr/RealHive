'use client'

import { useState } from 'react'

const faqData = {
  General: [
    {
      question: 'What is RealHive?',
      answer: 'RealHive turns NFTs into ownership of real-world beehives that generate honey and yield-sharing rewards.'
    },
    {
      question: 'Where is the honey produced?',
      answer: 'All honey is produced from licensed, real hives we operate and track. You can choose to receive physical drops or profits.'
    }
  ],
  Tokenomics: [
    {
      question: 'How many NFTs will be available?',
      answer: '10,000 uniquely tracked hive NFTs at launch.'
    },
    {
      question: 'What will the initial price of an NFT will be?',
      answer: '$1000 per NFT which represents 1 Bee hive.'
    }
  ],
  Ecosystem: [
    {
      question: 'Will there be more NFT collections?',
      answer: 'Yes, seasonal hive batches and partner-hosted honey drops are planned.'
    },
    {
  question: 'How can I track my hive?',
  answer: 'Each hive is assigned a unique ID and tracking dashboard you can access after minting.'
    } 
  ]
}

export default function Faq() {
  const categories = Object.keys(faqData)
  const [activeTab, setActiveTab] = useState(categories[0])
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // ✅ Define faqs OUTSIDE of return
  const faqs = faqData[activeTab as keyof typeof faqData] || [];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16" id="faq">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">FAQ</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveTab(cat); setOpenIndex(null); }}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all border
              ${activeTab === cat
                ? 'bg-white text-black'
                : 'text-white border-white hover:bg-white/10'}`}
            role="tab"
            aria-selected={activeTab === cat}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition">
            <button
              className="w-full text-left text-lg font-semibold text-yellow-400 hover:text-yellow-300 transition-colors flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <span className="text-yellow-400 text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p
                id={`faq-answer-${index}`}
                className="mt-2 text-white/80 text-base leading-relaxed"
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

