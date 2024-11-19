// components/InvestmentCategories.tsx
"use client"
import React, { useState } from 'react';

const ContentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Stocks');
  const [selectedCommodity, setSelectedCommodity] = useState('Oil');
  const [selectedInstitution, setSelectedInstitution] = useState('BlackRock');

  const tabs = [
    'Stocks',
    'Bonds',
    'Alternative Investments',
    'Commodities',
    'Institutions',
    'Economic Indicators',
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex-1">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#226f54]">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Stay updated with your financial data.</p>
      </header>
      {/* Key Metrics Section */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-bold text-gray-800">Portfolio Value</h2>
          <p className="text-xl font-semibold text-[#226f54] mt-4">$150,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-bold text-gray-800">Market Sentiment</h2>
          <p className="text-xl font-semibold text-blue-600 mt-4">Positive</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-bold text-gray-800">Top Gainer</h2>
          <p className="text-xl font-semibold text-green-600 mt-4">+15% (AAPL)</p>
        </div>
      </section>
      {/* Market Highlights Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Market Highlights</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="text-gray-700 space-y-2">
            <li>📈 S&P 500: +1.2%</li>
            <li>📉 Dow Jones: -0.5%</li>
            <li>📊 Nasdaq: +2.3%</li>
            <li>🛢️ Oil: $90/barrel</li>
          </ul>
        </div>
      </section>
      {/* Stocks Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stocks Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Technology</h3>
            <p className="text-gray-600 mt-2">Strong growth in AI-related stocks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Finance</h3>
            <p className="text-gray-600 mt-2">Steady performance in banking sectors.</p>
          </div>
        </div>
      </section>
      {/* Insights & Recommendations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Insights & Recommendations</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            <strong>Insight:</strong> Diversify your portfolio by adding renewable energy stocks for
            long-term growth.
          </p>
        </div>
      </section>

    </section>
  );
};

export default ContentsSection;


