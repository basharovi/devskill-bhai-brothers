"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import { Code, Users, Lightbulb, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-24">
      {/* Abstract code pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-repeat">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-24 md:pb-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-6xl">
                <span className="block">Together We Code,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Together We Grow</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 mx-auto lg:mx-0 max-w-2xl"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A vibrant .NET developer community built on brotherhood and shared growth.
                Join hands with fellow developers who are passionate about learning and growing together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-4"
            >
              <Link
                href="#join"
                className="btn-primary flex items-center group w-full sm:w-auto justify-center"
              >
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#events"
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                Upcoming Events
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 lg:mt-16 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-3">
                  <Code className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Skill Development</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Networking</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mb-3">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Knowledge Sharing</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 lg:mt-0 lg:col-span-6"
          >
            <div className="relative rounded-xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-2 rounded-xl">
                <div className="rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                  <ImagePlaceholder 
                    text="Community Collaboration" 
                    className="w-full h-72 sm:h-96 rounded-lg" 
                    bgColor="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800"
                    textColor="text-gray-600 dark:text-gray-300 text-lg font-medium"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center transform translate-y-1/2 translate-x-1/2 shadow-lg">
                  <span className="text-white text-xl font-bold">.NET</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-100 dark:text-gray-800 w-full h-auto">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
} 