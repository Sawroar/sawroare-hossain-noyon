'use client'
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'More', href: '#more' },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2">
      <div className="w-full">
        <div className="flex items-center justify-center relative">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white absolute left-6 z-10"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-bold">SHN</span>
            </div>
          </motion.a>

          {/* Desktop Navigation - Centered with Pill Background */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="flex items-center gap-1 px-2 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 ">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`px-3 py-1 rounded-full text-sm font-sm transition-all duration-300 ${activeLink === Link.href
                      ? 'bg-white/10 text-white backdrop-blur-sm rounded-full text-sm font-sm hover:bg-white/15 transition-all duration-300 border border-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`} 
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-sm text-white hover:bg-white/15 transition-all duration-300 border border-white/20"
              >
                   Book a Call
              </a>
            </div>
          </motion.div>

          {/* Grid Menu Icon */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all absolute right-6"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <rect x="2" y="2" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="12" y="2" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="2" y="12" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="12" y="12" width="6" height="6" rx="1" fill="currentColor" />
            </svg>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 absolute right-6"
          >
            <Menu className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-4 p-4 bg-dark-card/95 backdrop-blur-lg rounded-2xl border border-dark-border"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
                             className={`mt-2 px-4 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all`}>
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}




 

