"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Award } from "lucide-react";
import Image from "next/image";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const timelineItems = [
  {
    title: "Started in 2024",
    description: "Our journey began with a vision to create a supportive community for ASP.NET developers.",
    icon: Calendar,
  },
  {
    title: "First Meetup",
    description: "Our inaugural meetup brought together passionate developers eager to learn and collaborate.",
    icon: Users,
  },
  {
    title: "Launch of DevCast Podcast",
    description: "Started our tech podcast to share knowledge and insights from experienced professionals.",
    icon: Award,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Who We Are
          </motion.h2>
        </div>

        <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 lg:row-start-1"
          >
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImagePlaceholder text="Team Meeting Placeholder" className="h-64 rounded-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0 lg:col-span-7"
          >
            <div className="prose prose-lg dark:prose-invert mx-auto lg:max-w-none">
              <p>
                <span className="font-semibold text-primary-600">Dev Skill ভাই ব্রাদার্স</span> is a network of ASP.NET alumni who believe in continuous learning, collaboration, and career upliftment.
              </p>
              <p>
                From solving real-world problems to mentoring juniors, we're committed to helping each other grow. Our community values knowledge sharing, professional growth, and building meaningful connections.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Journey</h3>
              <div className="flow-root">
                <ul className="-mb-8">
                  {timelineItems.map((item, itemIdx) => (
                    <motion.li 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 * itemIdx }}
                      key={itemIdx}
                    >
                      <div className="relative pb-8">
                        {itemIdx !== timelineItems.length - 1 ? (
                          <span
                            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1.5">
                              <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center">
                                <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-1.5">
                            <div>
                              <div className="text-lg font-medium text-gray-900 dark:text-white">
                                {item.title}
                              </div>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 