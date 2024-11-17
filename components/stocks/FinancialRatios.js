"use client";

const FinancialRatios = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Financial Ratios and Metrics
      </h2>
      <div className=" flex flex-col gap-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
          <h4 className="text-md font-semibold text-gray-700">P/E Ratio</h4>
          <p className="text-md font-bold text-[#226f54]">25.4</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
          <h4 className="text-md font-semibold text-gray-700">EPS</h4>
          <p className="text-md font-bold text-[#226f54]">$3.21</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
          <h4 className="text-md font-semibold text-gray-700">Dividend Yield</h4>
          <p className="text-md font-bold text-[#226f54]">1.8%</p>
        </div>
        {/* Add More Ratios */}
      </div>
    </div>
  );
};

export default FinancialRatios;
