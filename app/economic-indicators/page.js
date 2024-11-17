"use client";
import RightSidebar from "@/components/layouts/main-insight";
import Layout from "@/components/layouts/main-layout";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Mock Data
const mockData = {
  GDP: {
    regions: ["Global", "North America", "Europe"],
    industries: ["Technology", "Healthcare", "Finance"],
    sectors: ["Public", "Private"],
    past: {
      "2023-01": "3.0%",
      "2023-02": "3.1%",
    },
    current: "3.2%",
    future: {
      "2024-01": "3.3%",
      "2024-02": "3.5%",
    },
    description: {
      past: {
        "2023-01": "GDP was steady at 3.0% in January 2023.",
        "2023-02": "GDP increased to 3.1% in February 2023.",
      },
      current: "The GDP grew by 3.2% in the last quarter, showing steady economic recovery.",
      future: {
        "2024-01": "Projections suggest GDP may reach 3.3% by January 2024.",
        "2024-02": "Projections suggest GDP may increase to 3.5% by February 2024.",
      },
    },
  },
  Inflation: {
    regions: ["Global", "North America", "Europe", "Asia"],
    industries: ["Technology", "Healthcare", "Finance"],
    sectors: ["Public", "Private"],
    past: {
      "2023-01": "4.5%",
      "2023-02": "4.3%",
    },
    current: "4.1%",
    future: {
      "2024-01": "4.0%",
      "2024-02": "3.8%",
    },
    description: {
      past: {
        "2023-01": "Inflation stood at 4.5% in January 2023.",
        "2023-02": "Inflation cooled slightly to 4.3% in February 2023.",
      },
      current: "Inflation cooled to 4.1% this month, primarily due to lower energy prices.",
      future: {
        "2024-01": "Projections suggest inflation may drop to 4.0% by January 2024.",
        "2024-02": "Projections suggest inflation may drop further to 3.8% by February 2024.",
      },
    },
  },
  InterestRates: {
    regions: ["Global", "North America", "Europe", "Asia"],
    industries: ["Technology", "Healthcare", "Finance"],
    sectors: ["Public", "Private"],
    past: {
      "2023-01": "5.25%",
      "2023-02": "5.3%",
    },
    current: "5.5%",
    future: {
      "2024-01": "5.6%",
      "2024-02": "5.7%",
    },
    description: {
      past: {
        "2023-01": "Interest rates were at 5.25% in January 2023.",
        "2023-02": "Interest rates increased slightly to 5.3% in February 2023.",
      },
      current: "Interest rates are currently 5.5%, signaling monetary tightening.",
      future: {
        "2024-01": "Projections suggest rates may rise to 5.6% by January 2024.",
        "2024-02": "Projections suggest rates may rise further to 5.7% by February 2024.",
      },
    },
  },
  Unemployment: {
    regions: ["Global", "North America", "Europe", "Asia"],
    industries: ["Technology", "Healthcare", "Finance"],
    sectors: ["Public", "Private"],
    past: {
      "2023-01": "3.9%",
      "2023-02": "3.8%",
    },
    current: "3.7%",
    future: {
      "2024-01": "3.6%",
      "2024-02": "3.5%",
    },
    description: {
      past: {
        "2023-01": "Unemployment was at 3.9% in January 2023.",
        "2023-02": "Unemployment decreased slightly to 3.8% in February 2023.",
      },
      current: "Unemployment decreased to 3.7%, reflecting strong job growth across sectors.",
      future: {
        "2024-01": "Projections suggest unemployment may drop to 3.6% by January 2024.",
        "2024-02": "Projections suggest unemployment may drop further to 3.5% by February 2024.",
      },
    },
  },
};

const EconomicIndicators = () => {
  const [view, setView] = useState("current");
  const [comparisonView, setComparisonView] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Global");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'chart'

  const regions = ["Global", "North America", "Europe", "Asia"];
  const industries = ["All", "Technology", "Healthcare", "Finance"];
  const sectors = ["All", "Public", "Private"];

  const availableDates =
    view === "past"
      ? Object.keys(mockData.GDP.past)
      : view === "future"
      ? Object.keys(mockData.GDP.future)
      : [];

  const filterDataBySelection = (indicator) => {
    // Apply region, industry, and sector filters
    if (
      (selectedRegion !== "Global" && !indicator.regions.includes(selectedRegion)) ||
      (selectedIndustry !== "All" && !indicator.industries.includes(selectedIndustry)) ||
      (selectedSector !== "All" && !indicator.sectors.includes(selectedSector))
    ) {
      return false;
    }
    return true;
  };

  const getPercentageStyle = (value) => {
    const number = parseFloat(value);
    if (number > 4.0) return "text-green-600";
    if (number > 3.0) return "text-blue-600";
    return "text-red-600";
  };

  const getDisplayValue = (data, type, date) => {
    if (type === "past") return data.past?.[date] || "No data";
    if (type === "future") return data.future?.[date] || "No projection";
    return data.current || "No data available";
  };

  const getDisplayDescription = (data, type, date) => {
    if (type === "past") return data.description?.past?.[date] || "No description available.";
    if (type === "future") return data.description?.future?.[date] || "No projection available.";
    return data.description?.current || "No description available.";
  };

  const getChartData = (indicatorData) => {
    const labels = [
      ...Object.keys(indicatorData.past || {}),
      "Current",
      ...Object.keys(indicatorData.future || {}),
    ];
    const dataValues = [
      ...Object.values(indicatorData.past || {}).map((val) => parseFloat(val)),
      parseFloat(indicatorData.current),
      ...Object.values(indicatorData.future || {}).map((val) => parseFloat(val)),
    ];

    return {
      labels,
      datasets: [
        {
          label: "Value",
          data: dataValues,
          backgroundColor: dataValues.map((val) =>
            val > 4.0 ? "#22c55e" : val > 3.0 ? "#3b82f6" : "#ef4444"
          ),
        },
      ],
    };
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="flex-1">
          <div>
            <h1 className="text-3xl font-bold text-[#226f54] mb-6">Economic Indicators</h1>

            {/* Filters Section */}
            <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-[#24282d]">Filters</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Region Filter */}
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Region
                  </label>
                  <select
                    id="region"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54]"
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>

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
              </div>
            </div>


            {/* View Mode Selector */}
            <div className="mb-6 flex items-center gap-4">
              <button
                onClick={() => setViewMode("list")}
                className={`px-6 py-2 rounded-lg shadow-md font-semibold ${
                  viewMode === "list"
                    ? "bg-[#226f54] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode("chart")}
                className={`px-6 py-2 rounded-lg shadow-md font-semibold ${
                  viewMode === "chart"
                    ? "bg-[#226f54] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Chart View
              </button>
            </div>

            {/* View Selector */}
            <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Select View</h2>
              <div className="flex gap-4">
                {["past", "current", "future"].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setView(v);
                      setSelectedDate(""); // Clear date when view changes
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold shadow-md ${
                      view === v
                        ? "bg-[#226f54] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    View {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Selector */}
            <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
              <label htmlFor="comparison" className="block text-sm font-medium text-gray-800 mb-2">
                Compare With:
              </label>
              <select
                id="comparison"
                value={comparisonView || ""}
                onChange={(e) => setComparisonView(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54]"
              >
                <option value="">None</option>
                {["past", "current", "future"]
                  .filter((v) => v !== view)
                  .map((v) => (
                    <option key={v} value={v}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </option>
                  ))}
              </select>
            </div>


            {/* Date Selector for Past and Future */}
            {(view === "past" || view === "future") && (
              <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Select {view.charAt(0).toUpperCase() + view.slice(1)} Date
                </h2>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Choose a Date:
                  </label>
                  <select
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full max-w-sm px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54]"
                  >
                    <option value="">Select a Date</option>
                    {availableDates.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}


            {/* Indicators Display */}
            {viewMode === "list" ? (
              <div className="w-full max-w-5xl flex flex-col gap-6">
                {Object.entries(mockData).map(([indicator, data]) => {
                  if (!filterDataBySelection(data)) return null;

                  const primaryValue = getDisplayValue(data, view, selectedDate);
                  const primaryDescription = getDisplayDescription(data, view, selectedDate);

                  const comparisonValue =
                    comparisonView && comparisonView !== view
                      ? getDisplayValue(data, comparisonView, selectedDate)
                      : null;

                  const comparisonDescription =
                    comparisonView && comparisonView !== view
                      ? getDisplayDescription(data, comparisonView, selectedDate)
                      : null;

                  return (
                    <div
                      key={indicator}
                      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200"
                    >
                      <h2 className="text-xl font-semibold text-gray-800">{indicator}</h2>
                      <p className={`text-4xl font-bold mt-2 ${getPercentageStyle(primaryValue)}`}>
                        {primaryValue}
                      </p>
                      <p className="mt-4 text-gray-600">{primaryDescription}</p>

                      {comparisonView && comparisonValue && (
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                          <h3 className="text-lg font-medium text-gray-700">
                            Compared to {comparisonView.charAt(0).toUpperCase() +
                              comparisonView.slice(1)}
                            :
                          </h3>
                          <p className={`text-2xl font-semibold ${getPercentageStyle(comparisonValue)}`}>
                            {comparisonValue}
                          </p>
                          <p className="text-gray-600">{comparisonDescription}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-full max-w-5xl flex flex-col gap-6">
                {Object.entries(mockData).map(([indicator, data]) => {
                  if (!filterDataBySelection(data)) return null;

                  const chartData = getChartData(data);

                  return (
                    <div
                      key={indicator}
                      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200"
                    >
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">{indicator}</h2>
                      <Bar data={chartData} options={{ responsive: true }} />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Future Data Disclaimer */}
            {view === "future" && (
              <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Disclaimer:</strong> Future data are projections based on current trends
                  and economic models. The market can fluctuate, and these projections are subject
                  to change.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* <RightSidebar /> */}
      </div>
    </Layout>
  );
};

export default EconomicIndicators;
