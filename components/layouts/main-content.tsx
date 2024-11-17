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
    <section className="flex-1 bg-white p-6 rounded-lg shadow-md">
      
    </section>
  );
};

export default ContentsSection;


