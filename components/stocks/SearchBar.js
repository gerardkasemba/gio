"use client";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ search, setSearch }) => (
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Search institutions..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#226f54] focus:outline-none"
    />
    <span className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
      <RiSearchLine size={20} />
    </span>
  </div>
);

export default SearchBar;
