"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 font-medium transition-colors ${
        isActive
          ? "text-primary-600"
          : "text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
      }`}
    >
      {title}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Dev Skill <span className="text-secondary-600">ভাই ব্রাদার্স</span>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <nav className="hidden md:flex space-x-6">
            <NavLink href="/" title="Home" />
            <NavLink href="#about" title="About" />
            <NavLink href="#gallery" title="Gallery" />
            <NavLink href="#events" title="Events" />
            <NavLink href="#contact" title="Contact" />
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#join"
              className="btn-primary text-sm"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="px-5 pt-2 pb-6 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#gallery"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#events"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-6">
                <a
                  href="#join"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join the Community
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 