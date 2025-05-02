"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Github, Linkedin, Twitter, Facebook, Mail, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-6 relative overflow-hidden">
      {/* .NET code pattern in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="text-[var(--dotnet-purple)]">
          <pattern id="footer-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M0 15H30M15 0V30" strokeWidth="0.5" stroke="currentColor" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
        
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[var(--csharp-green)] opacity-10 blur-3xl"></div>
        <div className="absolute top-10 -left-10 w-40 h-40 rounded-full bg-[var(--aspnet-blue)] opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-gradient-to-r from-[var(--dotnet-purple)] to-[var(--csharp-green)] w-6 h-6 mr-2 rounded flex items-center justify-center">
                  <Code className="h-3 w-3 text-white" />
                </span>
                Dev Skill ভাই ব্রাদার্স
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                A vibrant .NET developer community built on brotherhood and shared growth.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--dotnet-purple)] transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--dotnet-purple)] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--dotnet-purple)] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--dotnet-purple)] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm group flex items-center">
                  .NET Framework
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm group flex items-center">
                  C# Documentation
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://dotnet.microsoft.com/apps/aspnet" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm group flex items-center">
                  ASP.NET
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/dotnet/core" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm group flex items-center">
                  GitHub Repository
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm group flex items-center">
                  VS Code
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@devskill-brothers.com" className="text-gray-600 dark:text-gray-400 hover:text-[var(--dotnet-purple)] dark:hover:text-[var(--dotnet-purple-light)] transition-colors text-sm flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@devskill-brothers.com
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                Dhaka, Bangladesh
              </li>
            </ul>
            
            <div className="mt-6">
              <Link 
                href="#join"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[var(--dotnet-purple)] hover:bg-[var(--dotnet-purple-light)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Dev Skill ভাই ব্রাদার্স. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 text-xs text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="h-3 w-3 mx-1 text-red-500" />
              <span>by Dev Skill ভাই ব্রাদার্স</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 