"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Camera, Eye, Filter, Tag, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Online meetup session",
    width: 600,
    height: 400,
    category: "Meetups",
    featured: true,
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Team brainstorming",
    width: 600,
    height: 400,
    category: "Collaboration",
    featured: false,
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Coding workshop",
    width: 600,
    height: 400,
    category: "Workshops",
    featured: true,
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Community gathering",
    width: 600,
    height: 400,
    category: "Events",
    featured: false,
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Hackathon event",
    width: 600,
    height: 400,
    category: "Hackathon",
    featured: true,
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Fun moments",
    width: 600,
    height: 400,
    category: "Fun",
    featured: false,
  },
  {
    src: "/images/gallery/gallery-7.jpg",
    alt: "Technical discussion",
    width: 600,
    height: 400,
    category: "Meetups",
    featured: false,
  },
  {
    src: "/images/gallery/gallery-8.jpg",
    alt: "Code review session",
    width: 600,
    height: 400,
    category: "Workshops",
    featured: false,
  },
];

// 3D floating tags component
const FloatingTags = () => {
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
          animate={{ 
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            rotate: [0, 360],
          }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse",
            duration: 15 + Math.random() * 10,
            ease: "easeInOut"
          }}
        >
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm px-2 py-1 rounded-lg border border-primary-200/50 dark:border-primary-800/50 flex items-center shadow-lg">
            <Tag className="h-3 w-3 mr-1 text-primary-500/70 dark:text-primary-400/70" />
            <span className="text-[10px] text-gray-600/70 dark:text-gray-300/70 font-medium">
              {["C#", ".NET", "ASP.NET", "React", "Community"][i]}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// 3D perspective card component
const Gallery3DCard = ({ image, onClick }: { image: typeof galleryImages[0], onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const deltaX = (mouseX - centerX) / (rect.width / 2);
    const deltaY = (mouseY - centerY) / (rect.height / 2);
    
    setRotateX(-deltaY * 10);
    setRotateY(deltaX * 10);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="relative perspective-1000 cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div 
        className="relative overflow-hidden rounded-xl shadow-lg"
        style={{ 
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.2s ease-out"
        }}
      >
        <div className="overflow-hidden rounded-t-xl">
          <div className="relative">
            <ImagePlaceholder 
              text={image.alt} 
              className="w-full h-56 md:h-64 transform transition-transform duration-700 group-hover:scale-110" 
              bgColor={
                image.category === "Meetups" ? "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800" :
                image.category === "Workshops" ? "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800" :
                image.category === "Hackathon" ? "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800" :
                "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
              }
            />
            
            {/* Parallax elements */}
            <motion.div 
              className="absolute top-2 left-2 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-lg text-xs font-medium text-primary-600 dark:text-primary-400 shadow-lg backdrop-blur-sm z-10 flex items-center"
              style={{ 
                transform: `translateZ(20px) translateX(${rotateY * -2}px) translateY(${rotateX * -2}px)`,
                transition: "transform 0.2s ease-out"
              }}
            >
              <Tag className="h-3 w-3 mr-1" />
              {image.category}
            </motion.div>
            
            {image.featured && (
              <motion.div 
                className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-medium shadow-lg backdrop-blur-sm"
                style={{ 
                  transform: `translateZ(20px) translateX(${rotateY * 2}px) translateY(${rotateX * -2}px)`,
                  transition: "transform 0.2s ease-out"
                }}
              >
                Featured
              </motion.div>
            )}
            
            {/* View overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div 
                className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center"
                style={{ 
                  transform: `translateZ(30px) translateY(${4 + rotateX * 1}px)`,
                  transition: "transform 0.2s ease-out"
                }}
              >
                <Eye className="h-10 w-10 text-white mb-2" />
                <p className="text-white text-base font-medium">View Image</p>
              </motion.div>
            </div>
          </div>
          
          {/* Caption with 3D effect */}
          <motion.div 
            className="p-4 bg-white dark:bg-gray-800 rounded-b-xl"
            style={{ 
              transform: `translateZ(10px)`,
              transition: "transform 0.2s ease-out"
            }}
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{image.alt}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">{image.category}</span>
              <div className="flex items-center">
                <Camera className="h-4 w-4 text-primary-500 dark:text-primary-400 mr-1" />
                <span className="text-xs text-gray-500 dark:text-gray-400">Community</span>
              </div>
            </div>
            
            {/* Subtle call to action arrow */}
            <motion.div
              className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ 
                transform: `translateZ(15px) translateX(${rotateY * 1}px) translateY(${rotateX * 1}px)`,
                transition: "transform 0.2s ease-out"
              }}
            >
              <ArrowUpRight className="h-3 w-3 text-primary-600 dark:text-primary-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [isLayoutMasonry, setIsLayoutMasonry] = useState(true);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const categories = Array.from(new Set(galleryImages.map(img => img.category)));
  
  // Filter images based on active category and featured flag
  const filteredImages = galleryImages
    .filter(img => activeCategory ? img.category === activeCategory : true)
    .filter(img => showFeaturedOnly ? img.featured : true);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };
  
  const navigateLightbox = (direction: "next" | "prev") => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.indexOf(filteredImages[selectedImage]);
    let nextIndex;
    
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      nextIndex = currentIndex - 1 < 0 ? galleryImages.length - 1 : currentIndex - 1;
    }
    
    const nextImageIndex = filteredImages.findIndex(img => 
      galleryImages.indexOf(img) === nextIndex
    );
    
    if (nextImageIndex !== -1) {
      setSelectedImage(nextImageIndex);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" className="text-primary-500/10">
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 M 10 0 L 10 40" strokeWidth="0.5" stroke="currentColor" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </motion.div>
      
      <div className="absolute left-0 top-0 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-br-full opacity-50 -translate-x-16 -translate-y-16"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-secondary-100 dark:bg-secondary-900 rounded-full opacity-20 translate-x-1/4 translate-y-1/4"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <FloatingTags />
      </div>
      
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

        {/* Enhanced filter controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === null
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Additional controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  className={`flex items-center px-3 py-1.5 rounded text-xs font-medium transition-colors duration-200 ${
                    showFeaturedOnly ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <Filter className="h-3 w-3 mr-1" />
                  Featured
                </button>
                <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                <button
                  onClick={() => setIsLayoutMasonry(true)}
                  className={`flex items-center px-3 py-1.5 rounded text-xs font-medium transition-colors duration-200 ${
                    isLayoutMasonry ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Masonry
                </button>
                <button
                  onClick={() => setIsLayoutMasonry(false)}
                  className={`flex items-center px-3 py-1.5 rounded text-xs font-medium transition-colors duration-200 ${
                    !isLayoutMasonry ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Grid
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic layout - Masonry or Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${isLayoutMasonry}-${activeCategory}-${showFeaturedOnly}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={isLayoutMasonry 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 auto-rows-max"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            }
          >
            {filteredImages.map((image, idx) => (
              <motion.div
                key={`${idx}-${image.category}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={isLayoutMasonry && idx % 3 === 1 ? "mt-16" : ""}
              >
                <Gallery3DCard 
                  image={image} 
                  onClick={() => openLightbox(filteredImages.indexOf(image))} 
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredImages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-gray-500 dark:text-gray-400">No images found matching your criteria.</p>
            <button
              onClick={() => {setActiveCategory(null); setShowFeaturedOnly(false);}}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
        
        {filteredImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              onClick={() => {setActiveCategory(null); setShowFeaturedOnly(false);}}
            >
              View All Photos
            </button>
          </motion.div>
        )}
      </div>

      {/* Enhanced lightbox modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div 
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-8 w-8 text-white" />
            </motion.div>
            
            {/* Navigation buttons */}
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </motion.button>
            
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="relative">
                  <ImagePlaceholder 
                    text={filteredImages[selectedImage].alt} 
                    className="w-full h-[70vh] rounded-t-xl" 
                    bgColor="bg-gradient-to-br from-gray-700 to-gray-800" 
                    textColor="text-gray-300 text-xl font-medium"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-white shadow-lg flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {filteredImages[selectedImage].category}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-b-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {filteredImages[selectedImage].alt}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Category: {filteredImages[selectedImage].category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Dev Skill ভাই ব্রাদার্স Community
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Image counter */}
              <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 