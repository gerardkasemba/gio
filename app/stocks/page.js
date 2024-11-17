"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layouts/main-layout";
import SearchBar from "@/components/stocks/SearchBar";
import Filters from "@/components/stocks/Filters";
import CombinedSummary from "@/components/stocks/CombinedSummary";
import FinancialRatios from "@/components/stocks/FinancialRatios";
import NewsIntegration from "@/components/stocks/NewsIntegration";
import StockList from "@/components/stocks/StockList";
import ChartSelector from "@/components/stocks/ChartSelector";
import { mockStockData } from "@/components/stocks/mockStockData";
import PortfolioSuggestions from "@/components/stocks/PortfolioSuggestions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register the required components
ChartJS.register(
  CategoryScale, // Needed for category axes
  LinearScale,   // Needed for linear scales
  PointElement,  // Needed for scatter plots and line points
  LineElement,   // Needed for line charts
  BarElement,    // Needed for bar charts
  ArcElement,    // Needed for pie and doughnut charts
  Title,         // Title plugin
  Tooltip,       // Tooltip plugin
  Legend         // Legend plugin
);

const StocksPage = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [combineSummaries, setCombineSummaries] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedMarketCap, setSelectedMarketCap] = useState("All");
  const [selectedChart, setSelectedChart] = useState("patterns"); // Initialize selectedChart
  const [showHelp, setShowHelp] = useState(null); // Initialize showHelp
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedTimeView, setSelectedTimeView] = useState("present");
  const [newsCategory, setNewsCategory] = useState("General");

  const regions = ["All", "Global", "North America", "Europe", "Asia"];
  const industries = ["All", "Technology", "Finance", "Healthcare", "Energy", "Real Estate"];
  const sectors = ["All", "Public", "Private"];
  const marketCaps = ["All", "Large Cap", "Mid Cap", "Small Cap"];
  const timeViews = ["past", "present", "future"];

  const chartInfo = {
    patterns: "This chart highlights recurring themes and trends observed in the data.",
    performance: "This chart shows stock performance projections based on institutional analysis.",
    marketCap: "This chart provides a breakdown of the market capitalization of stocks.",
    contrasts: "This chart highlights differences and contrasting views across institutions.",
  };

  const combinedSummary = filteredData.map((item) => item.summary).join(" ");
  const analyzeCombinedSummary = (summary) => {
    if (!summary) return { patterns: [], contrasts: [], advice: "" };

    const patterns = [];
    const contrasts = [];
    let advice = "";

    if (summary.includes("growth")) {
      patterns.push("Growth is a common theme across industries.");
    }
    if (summary.includes("technology") || summary.includes("AI")) {
      patterns.push("Technology and AI are frequently highlighted.");
    }
    if (summary.includes("renewable energy")) {
      patterns.push("Renewable energy is seen as a promising sector.");
    }
    if (summary.includes("caution")) {
      contrasts.push("Goldman Sachs advises caution, contrasting with others' optimism.");
    }
    if (summary.includes("emerging markets")) {
      contrasts.push("J.P. Morgan emphasizes emerging markets, contrasting with developed economies.");

      advice = `Focus on technology and renewable energy for growth opportunities.
                Diversify into blue-chip stocks for stability. Monitor high-risk sectors carefully.`;
    }

    return { patterns, contrasts, advice };
  };

  const { patterns, contrasts, advice } = analyzeCombinedSummary(combinedSummary);

  useEffect(() => {
    const filtered = mockStockData.flatMap((institution) =>
      institution.industries
        .filter((industry) => {
          return (
            (selectedIndustry === "All" || industry.name === selectedIndustry) &&
            (selectedSector === "All" || industry.sector === selectedSector) &&
            (selectedMarketCap === "All" || industry.marketCap === selectedMarketCap) &&
            (selectedRegion === "All" || industry.region === selectedRegion) &&
            institution.institution.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((industry) => {
          let timeViewData;
          switch (selectedTimeView) {
            case "past":
              timeViewData = industry.pastData || {};
              break;
            case "future":
              timeViewData = industry.futureProjections || {};
              break;
            case "current":
            default:
              timeViewData = industry.presentData || {};
              break;
          }
  
          return {
            ...industry,
            ...timeViewData, // Include the time-specific data in the filtered results
            institution: institution.institution,
          };
        })
    );
    setFilteredData(filtered);
  }, [search, selectedIndustry, selectedSector, selectedMarketCap, selectedRegion, selectedTimeView]);
  
  
  

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-[#226f54] mb-8">Stocks Overview</h1>
          <SearchBar search={search} setSearch={setSearch} />
          <Filters
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
            selectedMarketCap={selectedMarketCap}
            setSelectedMarketCap={setSelectedMarketCap}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedTimeView={selectedTimeView}
            setSelectedTimeView={setSelectedTimeView}
            industries={industries}
            sectors={sectors}
            marketCaps={marketCaps}
            regions={regions}
            timeViews={timeViews}
          />

          <div className="mb-6 flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <label
              htmlFor="combineSummaries"
              className="text-lg font-medium text-gray-800 flex items-center space-x-2 cursor-pointer"
            >
              <span>Summarize Everything</span>
              <span className="text-sm text-gray-500">(Combine all insights into a single summary)</span>
            </label>
            <input
              type="checkbox"
              id="combineSummaries"
              checked={combineSummaries}
              onChange={(e) => setCombineSummaries(e.target.checked)}
              className="w-6 h-6 text-[#226f54] border-gray-300 rounded-lg focus:ring-[#226f54] cursor-pointer"
            />
          </div>

          
          {combineSummaries ? (
            <>
              <CombinedSummary
                combinedSummary={combinedSummary}
                patterns={patterns}
                contrasts={contrasts}
                advice={advice}
                selectedChart={selectedChart}
                setSelectedChart={setSelectedChart}
                showHelp={showHelp}
                setShowHelp={setShowHelp}
                chartInfo={chartInfo} // Pass the chartInfo object
                filteredData={filteredData}
              />
            </>
          ) : (
            <StockList filteredData={filteredData} />
          )}
        </section>
        <aside className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <FinancialRatios />
          <NewsIntegration 
            selectedIndustry={selectedIndustry}
            selectedSector={selectedSector}
          />
          <PortfolioSuggestions
            selectedIndustry={selectedIndustry}
            selectedSector={selectedSector}
          />
        </aside>
      </div>
    </Layout>
  );
};

export default StocksPage;
