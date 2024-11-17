"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this instead of `useRouter` for simplicity
import {
  RiMenuLine,
  RiCloseLine,
  RiFolder3Line,
} from "react-icons/ri";
import {
  AiOutlineHome,
  AiOutlineStock,
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineFundView,
  AiOutlineProject,
} from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import Footer from "./main-footer";
import Header from "./main-nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const isActiveLink = (path: string) =>
    pathname === path ? "text-white bg-[#226f54] m-2 rounded" : "hover:text-gray-300";

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Container */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-[#007F5F] text-white w-64 transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:relative z-20 h-full md:h-auto md:flex-shrink-0`}
        >
          <div className="py-6 space-y-4 h-full overflow-y-auto">
            <nav className="space-y-2">
              <Link
                href="/"
                className={`flex items-center px-6 py-3 ${isActiveLink("/")}`}
              >
                <AiOutlineHome className="mr-3" size={20} />
                <span>Dashboard Overview</span>
              </Link>
              <Link
                href="/economic-indicators"
                className={`flex items-center px-6 py-3 ${isActiveLink(
                  "/economic-indicators"
                )}`}
              >
                <AiOutlineFundView className="mr-3" size={20} />
                <span>Economic Indicators</span>
              </Link>
              <Link
                href="/global-market"
                className={`flex items-center px-6 py-3 ${isActiveLink(
                  "/global-market"
                )}`}
              >
                <FiTrendingUp className="mr-3" size={20} />
                <span>Global Market Overview</span>
              </Link>
              <Link
                href="/stocks"
                className={`flex items-center px-6 py-3 ${isActiveLink("/stocks")}`}
              >
                <AiOutlineStock className="mr-3" size={20} />
                <span>Stocks</span>
              </Link>
              <Link
                href="/bonds"
                className={`flex items-center px-6 py-3 ${isActiveLink("/bonds")}`}
              >
                <RiFolder3Line className="mr-3" size={20} />
                <span>Bonds</span>
              </Link>
              <Link
                href="/commodities"
                className={`flex items-center px-6 py-3 ${isActiveLink(
                  "/commodities"
                )}`}
              >
                <AiOutlineProject className="mr-3" size={20} />
                <span>Altnernatives</span>
              </Link>
              <Link
                href="/commodities"
                className={`flex items-center px-6 py-3 ${isActiveLink(
                  "/commodities"
                )}`}
              >
                <AiOutlineProject className="mr-3" size={20} />
                <span>Commodities</span>
              </Link>
              <Link
                href="/alerts"
                className={`flex items-center px-6 py-3 ${isActiveLink("/alerts")}`}
              >
                <AiOutlineBell className="mr-3" size={20} />
                <span>My Alerts</span>
              </Link>
              <Link
                href="/settings"
                className={`flex items-center px-6 py-3 ${isActiveLink(
                  "/settings"
                )}`}
              >
                <AiOutlineSetting className="mr-3" size={20} />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Overlay for Sidebar on Mobile */}
        {isSidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 mx-6 my-6 relative">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
