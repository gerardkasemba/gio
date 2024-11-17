"use client";

import ChartSelector from "./ChartSelector";
import { RiAlignItemBottomFill, RiFlipHorizontalLine, RiMediumFill } from "react-icons/ri";

const CombinedSummary = ({
  combinedSummary,
  patterns,
  contrasts,
  advice,
  selectedChart,
  setSelectedChart,
  showHelp,
  setShowHelp,
  chartInfo, // Ensure chartInfo is received here
  filteredData,
}) => {
  return (
    <div>
      {/* Combined Summary Header */}
      <h2 className="text-2xl font-bold text-[#226f54] mb-4">Combined Summary</h2>
      <p className="text-gray-700 text-base mb-6">{combinedSummary || "No data available."}</p>

      {/* Chart Selector Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2"><RiAlignItemBottomFill size={40} /></span> Interactive Data Insights
        </h3>
        <ChartSelector
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
          chartInfo={chartInfo}
          showHelp={showHelp}
          setShowHelp={setShowHelp}
          filteredData={filteredData}
          patterns={patterns}
          contrasts={contrasts}
        />
      </div>

      {/* Analysis Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="mr-2"><RiFlipHorizontalLine size={20} /></span> Analysis and Insights
        </h3>
        
        {/* Patterns Observed */}
        <div className="mb-6 p-4 bg-[#f9f9f9] rounded-lg">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Patterns Observed:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {patterns.map((pattern, index) => (
              <li key={index}>{pattern}</li>
            ))}
          </ul>
        </div>
        
        {/* Contrasts Noted */}
        <div className="mb-6 p-4 bg-[#f9f9f9] rounded-lg">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Contrasts Noted:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {contrasts.map((contrast, index) => (
              <li key={index}>{contrast}</li>
            ))}
          </ul>
        </div>
        
        {/* Guidance */}
        <div className="p-4 bg-[#f1f7f5] rounded-lg border border-[#e1eae5]">
          <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
            <span className="mr-2"><RiMediumFill size={20} /></span> Guidance:
          </h4>
          <p className="text-gray-700">{advice}</p>
        </div>
      </div>
    </div>
  );
};

export default CombinedSummary;
