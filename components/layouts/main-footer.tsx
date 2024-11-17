// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left Section: Logo and Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-500 ">Global Investment Outlook</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        {/* Middle Section: Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/about" className="hover:text-gray-700 ">About Us</Link>
          <Link href="/contact" className="hover:text-gray-700 ">Contact</Link>
          <Link href="/privacy" className="hover:text-gray-700 ">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-700 ">Terms of Service</Link>
        </div>
        
        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-700 ">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-700 ">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-700 ">
            <FaLinkedinIn size={20} />
          </Link>
          <Link href="https://instagram.com" className="text-gray-400 hover:text-gray-700 ">
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
