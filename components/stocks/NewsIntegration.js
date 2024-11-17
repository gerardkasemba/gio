"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layouts/main-layout";

const mockNewsData = {
  general: [
    {
      title: "Global Stocks Rally Amid Fed Optimism",
      description: "Stock markets surged as the Federal Reserve hinted at slower rate hikes.",
      date: "2024-11-15",
    },
    {
      title: "AI Revolution Fuels Tech Sector Growth",
      description: "Major gains observed in technology stocks as AI adoption accelerates.",
      date: "2024-11-14",
    },
  ],
  institutionSpecific: {
    BlackRock: [
      {
        title: "BlackRock Backs Renewable Energy Investments",
        description: "BlackRock continues to prioritize green energy in its stock picks.",
        date: "2024-11-15",
      },
      {
        title: "BlackRock CEO on Future of Sustainable Investing",
        description: "Insights from BlackRock's leadership on climate-focused portfolios.",
        date: "2024-11-14",
      },
    ],
    "J.P. Morgan": [
      {
        title: "J.P. Morgan Highlights Emerging Market Potential",
        description: "Emerging markets are seeing strong inflows, says J.P. Morgan.",
        date: "2024-11-15",
      },
    ],
  },
};

const NewsIntegration = ({ selectedInstitution }) => {
  const [newsType, setNewsType] = useState("general"); // Toggle between general and institution-specific
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    if (newsType === "general") {
      setNewsData(mockNewsData.general);
    } else if (selectedInstitution && mockNewsData.institutionSpecific[selectedInstitution]) {
      setNewsData(mockNewsData.institutionSpecific[selectedInstitution]);
    } else {
      setNewsData([]);
    }
  }, [newsType, selectedInstitution]);

  return (
    <div className="bg-white mt-4 rounded-lg transition-shadow duration-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Latest News</h2>

      {/* News Toggle */}
      <div className="mb-6 text-sm flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <button
          onClick={() => setNewsType("general")}
          className={`px-6 py-2 rounded-lg ${
            newsType === "general" ? "bg-[#226f54] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          General News
        </button>
        <button
          onClick={() => setNewsType("institution")}
          className={`px-6 py-2 rounded-lg ${
            newsType === "institution" ? "bg-[#226f54] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Institution-Specific News
        </button>
      </div>

      {/* News Feed */}
      {newsData.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <p className="text-sm text-gray-500">Published: {news.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No news available for this selection.</p>
      )}
    </div>
  );
};

export default NewsIntegration;
