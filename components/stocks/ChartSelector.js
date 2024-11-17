"use client";

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
import { Line, Bar, Pie } from "react-chartjs-2";
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
const ChartSelector = ({
  selectedChart,
  setSelectedChart,
  chartInfo,
  showHelp,
  setShowHelp,
  filteredData,
  patterns,
  contrasts,
}) => {
  const renderHelpText = (key) =>
    showHelp === key && (
      <p className="text-gray-600 bg-gray-100 p-3 rounded-md mb-4">{chartInfo[key]}</p>
    );

  const renderChartHeader = (title, key) => (
    <div className="flex items-center justify-between">
      <h4 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
        <span className="mr-2">ℹ️</span> {title}
      </h4>
      <button
        onClick={() => setShowHelp(showHelp === key ? null : key)}
        className="ml-2 text-gray-500 hover:text-gray-800"
      >
        ℹ️
      </button>
    </div>
  );

  return (
    <div>
      {/* Chart Selector Buttons */}
      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSelectedChart("patterns")}
          className={`px-4 py-2 rounded-lg ${
            selectedChart === "patterns" ? "bg-[#226f54] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Patterns Observed
        </button>
        <button
          onClick={() => setSelectedChart("performance")}
          className={`px-4 py-2 rounded-lg ${
            selectedChart === "performance" ? "bg-[#226f54] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Stock Performance
        </button>
        <button
          onClick={() => setSelectedChart("marketCap")}
          className={`px-4 py-2 rounded-lg ${
            selectedChart === "marketCap" ? "bg-[#226f54] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Market Cap Breakdown
        </button>
        <button
          onClick={() => setSelectedChart("contrasts")}
          className={`px-4 py-2 rounded-lg ${
            selectedChart === "contrasts" ? "bg-[#226f54] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Contrasts Noted
        </button>
      </div>

      {/* Render Selected Chart */}
      {selectedChart === "patterns" && patterns.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
          {renderChartHeader("Patterns Observed", "patterns")}
          {renderHelpText("patterns")}
          <Bar
            data={{
              labels: patterns.map((_, index) => `Pattern ${index + 1}`),
              datasets: [
                {
                  label: "Pattern Frequency",
                  data: patterns.map(() => Math.random() * 10),
                  backgroundColor: "#226f54",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, title: { display: true, text: "Frequency" } },
                x: { title: { display: true, text: "Patterns" } },
              },
            }}
          />
        </div>
      )}

      {selectedChart === "performance" && filteredData.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
          {renderChartHeader("Stock Performance", "performance")}
          {renderHelpText("performance")}
          <Line
            data={{
              labels: filteredData.map((item) => item.institution),
              datasets: [
                {
                  label: "Performance (%)",
                  data: filteredData.map((item) => parseFloat(item.performance || 0)),
                  backgroundColor: "rgba(34, 111, 84, 0.2)",
                  borderColor: "#226f54",
                  borderWidth: 2,
                  pointBackgroundColor: "#226f54",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, title: { display: true, text: "Performance (%)" } },
                x: { title: { display: true, text: "Institution" } },
              },
            }}
          />
        </div>
      )}

      {selectedChart === "marketCap" && filteredData.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
          {renderChartHeader("Market Cap Breakdown", "marketCap")}
          {renderHelpText("marketCap")}
          <Pie
            data={{
              labels: ["Large Cap", "Mid Cap", "Small Cap"],
              datasets: [
                {
                  data: [
                    filteredData.filter((item) => item.marketCap === "Large Cap").length,
                    filteredData.filter((item) => item.marketCap === "Mid Cap").length,
                    filteredData.filter((item) => item.marketCap === "Small Cap").length,
                  ],
                  backgroundColor: ["#226f54", "#58a575", "#a3d5c3"],
                  hoverBackgroundColor: ["#1b5d44", "#4d8e64", "#91c8b1"],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: true, position: "top" } },
            }}
          />
        </div>
      )}

      {selectedChart === "contrasts" && contrasts.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
          {renderChartHeader("Contrasts Noted", "contrasts")}
          {renderHelpText("contrasts")}
          <Bar
            data={{
              labels: contrasts.map((_, index) => `Contrast ${index + 1}`),
              datasets: [
                {
                  label: "Contrast Impact",
                  data: contrasts.map(() => Math.random() * 5),
                  backgroundColor: "#a3d5c3",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, title: { display: true, text: "Impact Level" } },
                x: { title: { display: true, text: "Contrasts" } },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ChartSelector;
