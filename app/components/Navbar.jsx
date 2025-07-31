"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "/#about" },
  { title: "Projects", path: "/#projects" },
  { title: "Travel", path: "/travel" },
  { title: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 bg-blue-50 border-b border-gray-800 transition-all duration-300 h-24"}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-5 h-full max-w-6xl">
        <Link href="/">
          <motion.div
            className="flex items-center space-x-2 text-lg font-bold cursor-pointer px-4 py-2 border-2 border-gray-800 text-gray-800"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="transition-all text-gray-700">
              HY
            </span>
          </motion.div>
        </Link>
        <div className="mobile-menu block md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="text-gray-800 text-2xl">
            {navbarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="menu hidden md:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="text-gray-800 hover:text-blue-500">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <div className="md:hidden flex flex-col items-center justify-center bg-blue-100 py-4 transition-all duration-300">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-gray-800 text-lg py-2 hover:text-blue-500"
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;