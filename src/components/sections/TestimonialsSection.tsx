"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Code, Database, Server } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rafid Ahmed",
    role: "Senior .NET Developer",
    company: "Technoware IT",
    image: "/images/testimonials/testimonial-1.jpg",
    quote: "Joining Dev Skill ভাই ব্রাদার্স was one of the best decisions I made for my career. The community's focus on ASP.NET Core has tremendously improved my skills.",
    rating: 5,
    techStack: ["ASP.NET Core", "C#", "Entity Framework"],
    gradient: "from-[var(--dotnet-purple)] to-[var(--dotnet-purple-light)]",
  },
  {
    id: 2,
    name: "Tasneem Khan",
    role: "Full Stack Developer",
    company: "Bangladeshi Innovations",
    image: "/images/testimonials/testimonial-2.jpg",
    quote: "The mentorship I received from senior .NET developers in this community helped me transition from a junior to a mid-level role in just 8 months.",
    rating: 5,
    techStack: ["Blazor", "SQL Server", "JavaScript"],
    gradient: "from-[var(--csharp-green)] to-[var(--csharp-green-light)]",
  },
  {
    id: 3,
    name: "Imran Hossain",
    role: "Solution Architect",
    company: "Dhaka Solutions Lab",
    image: "/images/testimonials/testimonial-3.jpg",
    quote: "The code reviews and architecture discussions we have in this community have significantly improved how I approach enterprise .NET applications.",
    rating: 5,
    techStack: [".NET MAUI", "Azure", "Microservices"],
    gradient: "from-[var(--aspnet-blue)] to-[var(--aspnet-blue-light)]",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Backend Developer",
    company: "TechSolve BD",
    image: "/images/testimonials/testimonial-4.jpg",
    quote: "As a self-taught developer, the resources and support from Dev Skill ভাই ব্রাদার্স were instrumental in landing my first .NET position.",
    rating: 5,
    techStack: ["C#", "Web API", "MongoDB"],
    gradient: "from-[var(--xamarin-blue)] to-[var(--blazor-purple)]",
  },
];

// Tech badge component
const TechBadge = ({ tech }: { tech: string }) => (
  <div className="inline-flex items-center px-2 py-1 rounded-full bg-white/10 text-white text-xs font-medium mr-2 mb-2">
    {tech === "ASP.NET Core" ? (
      <Server className="h-3 w-3 mr-1" />
    ) : tech === "C#" || tech === "Blazor" || tech.includes("MAUI") ? (
      <Code className="h-3 w-3 mr-1" />
    ) : tech.includes("SQL") || tech.includes("Mongo") ? (
      <Database className="h-3 w-3 mr-1" />
    ) : (
      <Code className="h-3 w-3 mr-1" />
    )}
    {tech}
  </div>
);

// Star rating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

// Code-inspired quote container
const CodeQuoteContainer = ({ testimonial, active }: { testimonial: typeof testimonials[0], active: boolean }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-500 ${
      active ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
  >
    <div className={`h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${testimonial.gradient}`}>
      <div className="relative h-full p-6 sm:p-8 flex flex-col">
        {/* Code-like header */}
        <div className="flex items-center mb-3">
          <div className="flex space-x-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-3 bg-white/20 px-2 py-0.5 rounded text-[10px] font-mono text-white/80">
            testimonial.cs
          </div>
        </div>
        
        {/* Large quote icon */}
        <div className="absolute top-4 right-4 opacity-20">
          <Quote className="h-16 w-16 text-white" />
        </div>
        
        {/* Content */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="font-mono text-xs text-white/60 mb-1">// What our members say</div>
            <p className="text-lg md:text-xl font-medium text-white mb-6 relative z-10">
              "{testimonial.quote}"
            </p>
          </div>
          
          <div>
            {/* Tech stack */}
            <div className="font-mono text-xs text-white/60 mb-1">// Tech stack</div>
            <div className="flex flex-wrap mb-4 max-w-full">
              {testimonial.techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
            
            {/* User info */}
            <div className="flex items-center mt-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                {testimonial.image ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="ml-4">
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-white/70 text-sm">
                  {testimonial.role} @ {testimonial.company}
                </p>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      {/* Dotnet pattern background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <svg className="w-full h-full text-[var(--dotnet-purple)]">
          <pattern
            id="grid-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 30H60M30 0V60" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="30" cy="30" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </motion.div>
      
      {/* Accent blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--dotnet-purple)] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--csharp-green)] rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider text-[var(--dotnet-purple)] uppercase"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            What Our Members Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Hear from our community members about their experience and growth within Dev Skill ভাই ব্রাদার্স.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] sm:h-[350px]">
            {testimonials.map((testimonial, index) => (
              <CodeQuoteContainer
                key={testimonial.id}
                testimonial={testimonial}
                active={activeIndex === index}
              />
            ))}
            
            {/* Navigation buttons */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                      activeIndex === index
                        ? "bg-[var(--dotnet-purple)]"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 