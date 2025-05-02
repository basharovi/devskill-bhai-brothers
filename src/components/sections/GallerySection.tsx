"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Camera, Eye } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Online meetup session",
    width: 600,
    height: 400,
    category: "Meetups",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Team brainstorming",
    width: 600,
    height: 400,
    category: "Collaboration",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Coding workshop",
    width: 600,
    height: 400,
    category: "Workshops",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Community gathering",
    width: 600,
    height: 400,
    category: "Events",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Hackathon event",
    width: 600,
    height: 400,
    category: "Hackathon",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Fun moments",
    width: 600,
    height: 400,
    category: "Fun",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(galleryImages.map(img => img.category)));
  
  const filteredImages = activeCategory 
    ? galleryImages.filter(img => img.category === activeCategory) 
    : galleryImages;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-br-full opacity-50 -translate-x-16 -translate-y-16"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-secondary-100 dark:bg-secondary-900 rounded-full opacity-20 translate-x-1/4 translate-y-1/4"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase"
          >
            Explore
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Community Moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Memorable highlights from our community events and gatherings
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => openLightbox(galleryImages.indexOf(image))}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <ImagePlaceholder 
                    text={image.alt} 
                    className="w-full h-56 md:h-72 rounded-lg transform transition-transform duration-500 group-hover:scale-110" 
                    bgColor={
                      image.category === "Meetups" ? "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800" :
                      image.category === "Workshops" ? "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800" :
                      image.category === "Hackathon" ? "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800" :
                      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
                    }
                  />
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-primary-600 dark:text-primary-400 shadow-md">
                  {image.category}
                </div>
                
                {/* View overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                    <Eye className="h-10 w-10 text-white mb-2" />
                    <p className="text-white text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{image.alt}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{image.category}</span>
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 text-primary-500 dark:text-primary-400 mr-1" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Community Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            onClick={() => setActiveCategory(null)}
          >
            View All Photos
          </button>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          <div 
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-colors duration-300"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8 text-white" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl max-h-[80vh] w-full"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <ImagePlaceholder 
                text={galleryImages[selectedImage].alt} 
                className="w-full h-[70vh] rounded-t-xl" 
                bgColor="bg-gradient-to-br from-gray-700 to-gray-800" 
                textColor="text-gray-300 text-xl font-medium"
              />
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-b-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {galleryImages[selectedImage].alt}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Category: {galleryImages[selectedImage].category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Dev Skill ভাই ব্রাদার্স Community
                  </span>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows would go here for a real implementation */}
          </motion.div>
        </div>
      )}
    </section>
  );
} 