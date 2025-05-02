"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Tag, Users, ExternalLink, ChevronDown, Star, Bell, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "DotNet Adda #1",
    description: "Discussed staying updated with the evolving tech stack",
    date: "May 25, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual",
    type: "Past Event",
    attendees: 48,
    tags: ["Discussion", "Networking"],
    isFeatured: false,
  },
  {
    id: 2,
    title: "ASP.NET Core Workshop",
    description: "Hands-on workshop exploring new features in ASP.NET Core 8",
    date: "June 12, 2024",
    time: "11:00 AM - 1:00 PM",
    location: "Dev Skill Office, Banani",
    type: "Upcoming",
    attendees: 32,
    tags: ["Workshop", "Coding", "ASP.NET Core"],
    isFeatured: true,
    timestamp: new Date('2024-06-12T11:00:00').getTime(),
  },
  {
    id: 3,
    title: "Career Development Session",
    description: "Tips and strategies for advancing your career as a .NET developer",
    date: "July 5, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Virtual",
    type: "Upcoming",
    attendees: 64,
    tags: ["Career", "Mentorship"],
    isFeatured: false,
    timestamp: new Date('2024-07-05T17:00:00').getTime(),
  },
  {
    id: 4,
    title: ".NET Community Meetup",
    description: "Monthly meetup to discuss latest developments in .NET ecosystem",
    date: "July 20, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Microsoft Bangladesh Office",
    type: "Upcoming",
    attendees: 85,
    tags: ["Meetup", ".NET", "Networking"],
    isFeatured: true,
    timestamp: new Date('2024-07-20T15:00:00').getTime(),
  },
];

// Countdown timer component
const CountdownTimer = ({ timestamp }: { timestamp: number }) => {
  const calculateTimeLeft = () => {
    const difference = timestamp - new Date().getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-2 sm:space-x-4 justify-center pt-3">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center font-mono font-bold text-sm sm:text-lg shadow-md">
            {value.toString().padStart(2, "0")}
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase mt-1">
            {interval}
          </span>
        </div>
      ))}
    </div>
  );
};

// 3D event card component
const Event3DCard = ({ event }: { event: typeof events[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 20;
    const rotateX = (centerY - y) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const resetCardTransform = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const tagColorMap: Record<string, string> = {
    "Workshop": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    "Coding": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    "ASP.NET Core": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    "Discussion": "bg-gray-100 text-gray-800 dark:bg-gray-900/40 dark:text-gray-300",
    "Networking": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    "Career": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
    "Mentorship": "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
    "Meetup": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
    ".NET": "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetCardTransform();
      }}
      onMouseMove={handleMouseMove}
      className={`h-full transition-all duration-300 rounded-xl ${
        isHovered ? "shadow-xl" : "shadow-md"
      }`}
      whileHover={{ scale: 1.02 }}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.2s ease-out" }}
    >
      <div className="h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 border border-gray-100 dark:border-gray-800">
        {/* Colored header based on event type and feature status */}
        <div 
          className={`h-2 w-full ${
            event.isFeatured
              ? "bg-gradient-to-r from-amber-400 to-orange-600"
              : event.type === "Upcoming" 
                ? "bg-gradient-to-r from-green-400 to-green-600" 
                : "bg-gradient-to-r from-blue-400 to-blue-600"
          }`}
        ></div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
              event.type === "Upcoming" 
                ? "text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300" 
                : "text-blue-800 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300"
            }`}>
              {event.type}
            </span>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-400 mr-1" aria-hidden="true" />
              <span className="text-xs text-gray-500 dark:text-gray-400">{event.attendees} attendees</span>
            </div>
          </div>
          
          <div className="relative" style={{ transform: "translateZ(30px)" }}>
            {event.isFeatured && (
              <div className="absolute -right-2 -top-2 rotate-12 bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-1 text-[10px] text-white font-bold rounded shadow-md">
                Featured
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {event.title}
            </h3>
          </div>
          
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400 mb-6">
            {event.description}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{event.location}</span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag, tagIdx) => (
              <span 
                key={tagIdx} 
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColorMap[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"}`}
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
          
          {/* Countdown for upcoming events */}
          {event.type === "Upcoming" && event.timestamp && (
            <div className="mb-6">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Event starts in:</p>
              <CountdownTimer timestamp={event.timestamp} />
            </div>
          )}
          
          {event.type === "Upcoming" ? (
            <div className="mt-auto flex flex-col sm:flex-row gap-2">
              <Link
                href="#"
                className="flex-1 flex items-center justify-center w-full px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors group-hover:shadow-md"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button
                className="flex items-center justify-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title="Add to calendar"
              >
                <CalendarIcon className="h-5 w-5 text-primary-500 dark:text-primary-400" />
              </button>
              
              <button
                className="flex items-center justify-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title="Get notified"
              >
                <Bell className="h-5 w-5 text-primary-500 dark:text-primary-400" />
              </button>
            </div>
          ) : (
            <div className="mt-auto">
              <Link
                href="#"
                className="flex items-center justify-center w-full px-4 py-2 text-primary-600 bg-primary-50 hover:bg-primary-100 dark:bg-gray-800 dark:text-primary-400 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                View Summary
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Tabs for filtering events
const EventTabs = ({ activeTab, setActiveTab }: { 
  activeTab: string, 
  setActiveTab: (tab: string) => void 
}) => {
  return (
    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md max-w-md mx-auto mb-10">
      <button
        onClick={() => setActiveTab("all")}
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
          activeTab === "all" 
            ? "bg-primary-600 text-white" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        All Events
      </button>
      <button
        onClick={() => setActiveTab("upcoming")}
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
          activeTab === "upcoming" 
            ? "bg-primary-600 text-white" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        Upcoming
      </button>
      <button
        onClick={() => setActiveTab("past")}
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
          activeTab === "past" 
            ? "bg-primary-600 text-white" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        Past Events
      </button>
    </div>
  );
};

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Filter events based on active tab and featured status
  const filteredEvents = events
    .filter(event => {
      if (activeTab === "all") return true;
      if (activeTab === "upcoming") return event.type === "Upcoming";
      if (activeTab === "past") return event.type === "Past Event";
      return true;
    })
    .filter(event => showFeaturedOnly ? event.isFeatured : true);

  return (
    <section id="events" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" className="text-primary-500">
            <pattern id="events-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 M 10 0 L 10 40" strokeWidth="0.5" stroke="currentColor" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#events-grid-pattern)" />
          </svg>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-primary-50 dark:bg-primary-900/20 rounded-bl-full opacity-70"></div>
      <div className="absolute left-0 bottom-0 w-24 h-24 bg-secondary-50 dark:bg-secondary-900/20 rounded-tr-3xl opacity-70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase"
          >
            Join Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            What&apos;s Happening?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Join us for our exciting community events and learning sessions
          </motion.p>
        </div>

        {/* Event tabs & filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <EventTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className={`flex items-center text-sm py-1 px-3 rounded-full transition-colors ${
                showFeaturedOnly 
                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" 
                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              <Star className={`h-4 w-4 mr-1 ${showFeaturedOnly ? "text-amber-500" : "text-gray-400"}`} />
              Featured Events
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${showFeaturedOnly}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Event3DCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredEvents.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-gray-500 dark:text-gray-400">No events found matching your criteria.</p>
            <button
              onClick={() => {setActiveTab("all"); setShowFeaturedOnly(false);}}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <Calendar className="mr-2 h-5 w-5" />
            View All Events
          </Link>
        </motion.div>
        
        {/* Email notification form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-center mb-5">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-full">
                <Bell className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              Get notified about upcoming events and workshops. Never miss an opportunity to learn and connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 rounded-lg border-gray-300 dark:border-gray-700 focus:ring-primary-500 focus:border-primary-500"
              />
              <button 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-5 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 