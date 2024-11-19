// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import { RiMenuLine, RiCloseLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

interface HeaderProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-md w-full px-6 py-4 flex items-center justify-between">
      {/* Logo and Sidebar Toggle */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="text-gray-700 md:hidden"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
        <Link href="/" className="text-2xl font-bold text-[#007F5F]">
          MarketLens
        </Link>
      </div>

      {/* Search and Profile Section */}
      <div className="flex items-center space-x-4">
        {/* Search Input (hidden on small screens) */}
        <div className="hidden sm:flex items-center border rounded-lg px-3 py-2 bg-gray-100">
          <RiSearchLine className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 focus:outline-none text-sm"
          />
        </div>
        
        {/* Profile Link */}
        <Link href="/profile" className="flex items-center text-gray-600 hover:text-gray-900">
          <RiUserLine size={24} className="hidden sm:inline" />
          {/* <span className="ml-2 hidden sm:inline">Profile</span> */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
