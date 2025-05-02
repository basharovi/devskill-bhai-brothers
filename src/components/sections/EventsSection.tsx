"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Tag, Users, ExternalLink } from "lucide-react";
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
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-gray-50 dark:bg-gray-800 relative">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-primary-50 dark:bg-primary-900/20 rounded-bl-full opacity-70"></div>
      <div className="absolute left-0 bottom-0 w-24 h-24 bg-secondary-50 dark:bg-secondary-900/20 rounded-tr-3xl opacity-70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                {/* Colored header based on event type */}
                <div 
                  className={`h-2 w-full ${
                    event.type === "Upcoming" 
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
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {event.title}
                  </h3>
                  
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
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {event.type === "Upcoming" ? (
                    <div className="mt-auto">
                      <Link
                        href="#"
                        className="flex items-center justify-center w-full px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors group-hover:shadow-md"
                      >
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
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
          ))}
        </div>
        
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
      </div>
    </section>
  );
} 