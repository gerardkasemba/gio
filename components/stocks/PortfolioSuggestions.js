import React, { useState, useEffect } from "react";

const PortfolioSuggestions = ({ selectedIndustry, selectedSector }) => {
  // Dummy portfolio suggestions based on industry and sector
  const portfolioData = [
    {
      industry: "Technology",
      sector: "Public",
      risk: "High",
      allocation: [
        { asset: "AI Stocks", percentage: "30%" },
        { asset: "Cloud Computing", percentage: "25%" },
        { asset: "Green Tech", percentage: "20%" },
        { asset: "Tech Bonds", percentage: "15%" },
        { asset: "Cash", percentage: "10%" },
      ],
    },
    {
      industry: "Healthcare",
      sector: "Public",
      risk: "Medium",
      allocation: [
        { asset: "Pharma Stocks", percentage: "40%" },
        { asset: "Medical Devices", percentage: "20%" },
        { asset: "Healthcare ETFs", percentage: "30%" },
        { asset: "Cash", percentage: "10%" },
      ],
    },
    {
      industry: "Finance",
      sector: "Private",
      risk: "Low",
      allocation: [
        { asset: "Banking Bonds", percentage: "50%" },
        { asset: "Insurance Funds", percentage: "30%" },
        { asset: "Cash", percentage: "20%" },
      ],
    },
    {
      industry: "Energy",
      sector: "Public",
      risk: "High",
      allocation: [
        { asset: "Renewable Energy Stocks", percentage: "40%" },
        { asset: "Traditional Energy ETFs", percentage: "30%" },
        { asset: "Carbon Credits", percentage: "20%" },
        { asset: "Cash", percentage: "10%" },
      ],
    },
  ];

  const [suggestedPortfolio, setSuggestedPortfolio] = useState(null);

  useEffect(() => {
    const match = portfolioData.find(
      (item) =>
        item.industry === selectedIndustry && item.sector === selectedSector
    );
    setSuggestedPortfolio(match || null);
  }, [selectedIndustry, selectedSector]);

  return (
    <div className="bg-white mt-4 p-6 rounded-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Portfolio Suggestions
      </h2>
      {suggestedPortfolio ? (
        <>
          <p className="mb-4 text-gray-600">
            <strong>Risk Level:</strong>{" "}
            <span
              className={`font-bold ${
                suggestedPortfolio.risk === "High"
                  ? "text-red-600"
                  : suggestedPortfolio.risk === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {suggestedPortfolio.risk}
            </span>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {suggestedPortfolio.allocation.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.asset}</span>
                <span className="font-semibold">{item.percentage}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-500">
          No portfolio suggestions available for the selected industry and
          sector.
        </p>
      )}
    </div>
  );
};

export default PortfolioSuggestions;
