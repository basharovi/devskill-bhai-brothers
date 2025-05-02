import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">Dev Skill <span className="text-primary-500">ভাই ব্রাদার্স</span></h2>
            <p className="text-gray-400 leading-relaxed">
              A vibrant .NET developer community built on brotherhood and shared growth.
              Join us in our journey of continuous learning and career advancement.
            </p>
            <div className="pt-2 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://learn.microsoft.com/en-us/aspnet/core/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  ASP.NET Documentation
                </a>
              </li>
              <li>
                <a href="https://dotnet.microsoft.com/en-us/apps/aspnet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  ASP.NET Website
                </a>
              </li>
              <li>
                <a href="https://dot.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  .NET Platform
                </a>
              </li>
              <li>
                <a href="https://github.com/dotnet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  .NET on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Dev Skill ভাই ব্রাদার্স. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 