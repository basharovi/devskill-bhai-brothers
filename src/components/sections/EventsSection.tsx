"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
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
  },
  {
    id: 2,
    title: "ASP.NET Core Workshop",
    description: "Hands-on workshop exploring new features in ASP.NET Core 8",
    date: "June 12, 2024",
    time: "11:00 AM - 1:00 PM",
    location: "Dev Skill Office, Banani",
    type: "Upcoming",
  },
  {
    id: 3,
    title: "Career Development Session",
    description: "Tips and strategies for advancing your career as a .NET developer",
    date: "July 5, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Virtual",
    type: "Upcoming",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            What&apos;s Happening?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
              <div className="h-full bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
                      event.type === "Upcoming" 
                        ? "text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300" 
                        : "text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    {event.description}
                  </p>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{event.location}</span>
                    </div>
                  </div>
                  
                  {event.type === "Upcoming" && (
                    <div className="mt-6">
                      <Link
                        href="#"
                        className="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                      >
                        Register now
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 