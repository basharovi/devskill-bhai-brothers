"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Online meetup session",
    width: 600,
    height: 400,
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Team brainstorming",
    width: 600,
    height: 400,
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Coding workshop",
    width: 600,
    height: 400,
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Community gathering",
    width: 600,
    height: 400,
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Hackathon event",
    width: 600,
    height: 400,
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Fun moments",
    width: 600,
    height: 400,
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Community Moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Memorable highlights from our community events and gatherings
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <ImagePlaceholder 
                  text={image.alt} 
                  className="w-full h-48 rounded-lg transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white p-2 hover:bg-gray-800 rounded-full z-50"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl max-h-[80vh] w-full"
          >
            <ImagePlaceholder 
              text={galleryImages[selectedImage].alt} 
              className="w-full h-80 rounded-lg"
              bgColor="bg-gray-700" 
              textColor="text-gray-300 text-xl"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].alt}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
} 