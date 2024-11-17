"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layouts/main-layout";

const mockBondData = [
  {
    institution: "BlackRock",
    summary: "Steady returns on long-term government bonds amidst inflationary concerns.",
    industry: "Finance",
    sector: "Public",
    bondType: "Government",
  },
  {
    institution: "J.P. Morgan",
    summary: "Corporate bonds offer high yields but with elevated risk in emerging markets.",
    industry: "Corporate Finance",
    sector: "Private",
    bondType: "Corporate",
  },
  {
    institution: "Goldman Sachs",
    summary: "Diversify into inflation-linked bonds for stable returns and risk mitigation.",
    industry: "Investment Banking",
    sector: "Public",
    bondType: "Inflation-Linked",
  },
  {
    institution: "Morgan Stanley",
    summary: "Focus on municipal bonds as a tax-efficient investment option.",
    industry: "Public Finance",
    sector: "Public",
    bondType: "Municipal",
  },
  {
    institution: "Fidelity",
    summary: "High-yield corporate bonds offer attractive returns for risk-tolerant investors.",
    industry: "Corporate Finance",
    sector: "Public",
    bondType: "High-Yield",
  },
  {
    institution: "Vanguard",
    summary: "Short-term treasury bonds are a safe haven during market volatility.",
    industry: "Finance",
    sector: "Private",
    bondType: "Treasury",
  },
];

const BondsPage = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(mockBondData);
  const [combineSummaries, setCombineSummaries] = useState(false);

  // Filters
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedBondType, setSelectedBondType] = useState("All");

  const industries = ["All", "Finance", "Corporate Finance", "Investment Banking", "Public Finance"];
  const sectors = ["All", "Public", "Private"];
  const bondTypes = ["All", "Government", "Corporate", "Inflation-Linked", "Municipal", "Treasury", "High-Yield"];

  // Filter logic
  useEffect(() => {
    const filtered = mockBondData.filter((item) => {
      return (
        (selectedIndustry === "All" || item.industry === selectedIndustry) &&
        (selectedSector === "All" || item.sector === selectedSector) &&
        (selectedBondType === "All" || item.bondType === selectedBondType) &&
        item.institution.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [search, selectedIndustry, selectedSector, selectedBondType]);

  const combinedSummary = filteredData.map((item) => item.summary).join(" ");

  const analyzeCombinedSummary = (summary) => {
    if (!summary) return { patterns: [], contrasts: [], advice: "" };

    const patterns = [];
    const contrasts = [];

    // Patterns Observed
    if (summary.includes("government bonds")) {
      patterns.push("Government bonds are seen as stable investments during inflationary periods.");
    }
    if (summary.includes("corporate bonds")) {
      patterns.push("Corporate bonds offer high yields but carry elevated risk.");
    }
    if (summary.includes("municipal bonds")) {
      patterns.push("Municipal bonds are recommended for tax-efficient investment options.");
    }
    if (summary.includes("short-term treasury")) {
      patterns.push("Short-term treasury bonds are highlighted as safe haven investments.");
    }

    // Contrasts Observed
    if (summary.includes("high yields")) {
      contrasts.push(
        "Institutions like Fidelity and J.P. Morgan focus on high-yield corporate bonds, while others prioritize safer government and treasury bonds."
      );
    }
    if (summary.includes("tax-efficient")) {
      contrasts.push("Morgan Stanley emphasizes tax-efficient municipal bonds, unlike others.");
    }

    // Guidance
    const advice = `
      Based on the analysis:
      - Consider government bonds for stability during inflationary periods.
      - Corporate bonds can be attractive for higher returns but carry risks.
      - Municipal bonds are ideal for tax-efficient investing.
      - Treasury bonds provide a safe option during volatile markets.`;

    return { patterns, contrasts, advice };
  };

  const { patterns, contrasts, advice } = analyzeCombinedSummary(combinedSummary);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#226f54] mb-8">Bonds Overview</h1>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search institutions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#226f54] focus:outline-none"
            />
          </div>

          {/* Filters */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Industry Filter */}
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Industry
                </label>
                <select
                  id="industry"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54]"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sector Filter */}
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Sector
                </label>
                <select
                  id="sector"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54]"
                >
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bond Type Filter */}
              <div>
                <label htmlFor="bondType" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Bond Type
                </label>
                <select
                  id="bondType"
                  value={selectedBondType}
                  onChange={(e) => setSelectedBondType(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54]"
                >
                  {bondTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Combine Option */}
          <div className="mb-6 flex items-center space-x-4">
            <label htmlFor="combine" className="text-gray-700 font-medium">
              Combine Summaries:
            </label>
            <input
              type="checkbox"
              id="combine"
              checked={combineSummaries}
              onChange={(e) => setCombineSummaries(e.target.checked)}
              className="w-5 h-5 text-[#226f54] border-gray-300 rounded focus:ring-[#226f54]"
            />
          </div>

          {/* Display Data */}
          {combineSummaries ? (
            <div className="bg-gradient-to-r from-green-50 via-white to-blue-50 p-8 rounded-xl  transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-[#226f54] mb-6 flex items-center space-x-2">
                    <span>📊</span>
                    <span>Combined Summary</span>
                </h2>
                <p className="text-gray-700 text-base mb-8">
                    {combinedSummary || "No data available. Please adjust your filters."}
                </p>

                {/* Analysis Section */}
                <div>
                    <h3 className="text-xl font-semibold text-[#1f2937] mb-6 flex items-center space-x-2">
                    <span>🔍</span>
                    <span>Analysis and Insights</span>
                    </h3>

                    {patterns.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-lg font-medium text-[#4b5563] mb-3 flex items-center space-x-2">
                        <span>📈</span>
                        <span>Patterns Observed</span>
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {patterns.map((pattern, index) => (
                            <li key={index} className="text-sm flex items-start space-x-2">
                            <span>✅</span>
                            <span>{pattern}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}

                    {contrasts.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-lg font-medium text-[#4b5563] mb-3 flex items-center space-x-2">
                        <span>⚖️</span>
                        <span>Contrasts Noted</span>
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {contrasts.map((contrast, index) => (
                            <li key={index} className="text-sm flex items-start space-x-2">
                            <span>❗</span>
                            <span>{contrast}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}

                    <div>
                    <h4 className="text-lg font-medium text-[#4b5563] mb-3 flex items-center space-x-2">
                        <span>📘</span>
                        <span>Guidance</span>
                    </h4>
                    <p className="text-gray-700 text-sm">
                        {advice || "No specific guidance available for the selected criteria."}
                    </p>
                    </div>
                </div>
            </div>

          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {item.institution}
                  </h2>
                  <p className="text-gray-600">{item.summary}</p>
                  <p className="mt-4 text-gray-500">
                    <strong>Industry:</strong> {item.industry}
                  </p>
                  <p className="text-gray-500">
                    <strong>Sector:</strong> {item.sector}
                  </p>
                  <p className="text-gray-500">
                    <strong>Bond Type:</strong> {item.bondType}
                  </p>
                </div>
              ))}
              {filteredData.length === 0 && (
                <p className="text-gray-500 col-span-full text-center">
                  No results found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BondsPage;
