"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 opacity-30 bg-repeat">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dot-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-6xl">
              <span className="block">Together We Code,</span>
              <span className="block text-primary-600">Together We Grow</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-2xl"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A vibrant .NET developer community built on brotherhood and shared growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="#join"
              className="btn-primary"
            >
              Join the Community
            </Link>
            <Link
              href="#events"
              className="btn-secondary"
            >
              Upcoming Events
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto rounded-xl shadow-xl overflow-hidden max-w-4xl">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <ImagePlaceholder text="Community Image Placeholder" className="w-full h-64 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-50 dark:text-gray-800">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
} 