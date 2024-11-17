const StockList = ({ filteredData = [] }) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-200"
          >
            {/* Institution Name */}
            <h2 className="text-2xl font-bold text-[#226f54] mb-4">
              {item.institution || "Unknown Institution"}
            </h2>

            {/* Stock Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-500">
                  <span className="font-semibold text-gray-800">Industry:</span>{" "}
                  {item.industry || "N/A"}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-gray-800">Sector:</span>{" "}
                  {item.sector || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-500">
                  <span className="font-semibold text-gray-800">Market Cap:</span>{" "}
                  {item.marketCap || "N/A"}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-gray-800">Performance:</span>{" "}
                  {item.performance || "N/A"}
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <p className="text-gray-700 text-base italic">
                {item.summary || "No summary available."}
              </p>
            </div>

            {/* Insights */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Insights:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {item.insights?.length > 0 ? (
                  item.insights.map((insight, i) => (
                    <li key={i} className="mb-1">
                      {insight}
                    </li>
                  ))
                ) : (
                  <li>No additional insights available.</li>
                )}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center text-lg font-medium">
          No results found. Try adjusting the filters or search criteria.
        </p>
      )}
    </div>
  );
};

export default StockList;
