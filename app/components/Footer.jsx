import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-black py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-0">
        {/* Portfolio Name */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="px-4 py-2 border-2 border-black font-bold text-lg">
            HY
          </Link>
          <span className="text-lg font-semibold">Hao Yi&apos;s Portfolio</span>
        </div>
        <p className="text-sm text-black mt-2 md:mt-0">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;