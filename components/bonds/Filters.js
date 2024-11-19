"use client";

import { useState } from "react";
import { RiFilterLine } from "react-icons/ri";

const BondFilters = ({
  selectedBondType = "All",
  setSelectedBondType = () => {},
  selectedCreditRating = "All",
  setSelectedCreditRating = () => {},
  selectedRegion = "All",
  setSelectedRegion = () => {},
  selectedTimeView = "current",
  setSelectedTimeView = () => {},
  selectedMonthYear = "",
  setSelectedMonthYear = () => {},
  resetFilters = () => {},
  bondTypes = [],
  creditRatings = [],
  regions = [],
  timeViews = [],
  availableMonthYears = [],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="mb-8">
      {/* Filter Icon for Mobile */}
      <div className="block lg:hidden mb-4">
        <button
          onClick={toggleVisibility}
          className="flex items-center px-4 py-2 bg-[#226f54] text-white text-md rounded-lg shadow-md hover:bg-[#1a5b45] focus:outline-none focus:ring focus:ring-green-200"
        >
          <RiFilterLine size={20} className="mr-2" />
          Filters
        </button>
      </div>

      {/* Filters Section */}
      <div
        className={`${
          isVisible || window.innerWidth >= 1024 ? "block" : "hidden"
        } lg:block bg-[#f9f9f9] p-6 mt-4 rounded-lg border border-gray-200`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#226f54]">Bond Filters</h2>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-red-500 text-white text-md rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
          >
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bond Type Filter */}
          <div>
            <label
              htmlFor="bondType"
              className="block text-md font-medium text-gray-700 mb-2"
            >
              Select Bond Type
            </label>
            <select
              id="bondType"
              value={selectedBondType}
              onChange={(e) => setSelectedBondType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54] shadow-md"
            >
              {bondTypes.length > 0 ? (
                bondTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))
              ) : (
                <option value="All">No Bond Types Available</option>
              )}
            </select>
          </div>

          {/* Credit Rating Filter */}
          <div>
            <label
              htmlFor="creditRating"
              className="block text-md font-medium text-gray-700 mb-2"
            >
              Select Credit Rating
            </label>
            <select
              id="creditRating"
              value={selectedCreditRating}
              onChange={(e) => setSelectedCreditRating(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54] shadow-md"
            >
              {creditRatings.length > 0 ? (
                creditRatings.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))
              ) : (
                <option value="All">No Credit Ratings Available</option>
              )}
            </select>
          </div>

          {/* Region Filter */}
          <div>
            <label
              htmlFor="region"
              className="block text-md font-medium text-gray-700 mb-2"
            >
              Select Region
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54] shadow-md"
            >
              {regions.length > 0 ? (
                regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))
              ) : (
                <option value="All">No Regions Available</option>
              )}
            </select>
          </div>

          {/* Time View Filter */}
          <div>
            <label
              htmlFor="timeView"
              className="block text-md font-medium text-gray-700 mb-2"
            >
              View Time
            </label>
            <select
              id="timeView"
              value={selectedTimeView}
              onChange={(e) => setSelectedTimeView(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54] shadow-md"
            >
              {timeViews.length > 0 ? (
                timeViews.map((view) => (
                  <option key={view} value={view}>
                    {view.charAt(0).toUpperCase() + view.slice(1)}
                  </option>
                ))
              ) : (
                <option value="current">No Time Views Available</option>
              )}
            </select>
          </div>

          {/* Month/Year Selector for Past Time View */}
          {selectedTimeView === "past" && (
            <div>
              <label
                htmlFor="monthYear"
                className="block text-md font-medium text-gray-700 mb-2"
              >
                Select Month/Year
              </label>
              <select
                id="monthYear"
                value={selectedMonthYear}
                onChange={(e) => setSelectedMonthYear(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-[#226f54] focus:border-[#226f54] shadow-md"
              >
                <option value="">Select a Date</option>
                {availableMonthYears.length > 0 ? (
                  availableMonthYears.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))
                ) : (
                  <option value="">No Dates Available</option>
                )}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BondFilters;
