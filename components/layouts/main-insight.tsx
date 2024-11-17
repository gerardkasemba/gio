"use client"
import React, { useState } from 'react';
import { RiFileTextLine, RiBookmarkLine, RiLineChartLine, RiLeafLine, RiBuildingLine } from 'react-icons/ri';


const RightSidebar: React.FC = () => {

  return (
    <>
            <aside className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md lg:right-0 lg:top-16 lg:h-screen lg:overflow-y-auto">
      
      {/* Top Reports Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 mb-4">
          <RiFileTextLine className="text-blue-500" size={24} />
          <span>Top Reports</span>
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer space-x-2">
            <RiLineChartLine size={20} />
            <span>Global Market Update - Q3 2024</span>
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer space-x-2">
            <RiFileTextLine size={20} />
            <span>Economic Outlook by J.P. Morgan</span>
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer space-x-2">
            <RiFileTextLine size={20} />
            <span>Tech Sector Analysis</span>
          </li>
        </ul>
      </div>

      {/* Saved Topics Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 mb-4">
          <RiBookmarkLine className="text-green-500" size={24} />
          <span>Saved Topics</span>
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer space-x-2">
            <RiBuildingLine size={20} />
            <span>Emerging Markets</span>
          </li>
          <li className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer space-x-2">
            <RiLeafLine size={20} />
            <span>Green Investments</span>
          </li>
          <li className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer space-x-2">
            <RiBuildingLine size={20} />
            <span>Real Estate Trends</span>
          </li>
        </ul>
      </div>
    </aside>
    </>
  );
};

export default RightSidebar;
