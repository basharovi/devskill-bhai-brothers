"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Award, CheckCircle } from "lucide-react";
import Image from "next/image";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const timelineItems = [
  {
    title: "Started in 2024",
    description: "Our journey began with a vision to create a supportive community for ASP.NET developers.",
    icon: Calendar,
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "First Meetup",
    description: "Our inaugural meetup brought together passionate developers eager to learn and collaborate.",
    icon: Users,
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Launch of DevCast Podcast",
    description: "Started our tech podcast to share knowledge and insights from experienced professionals.",
    icon: Award,
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

const communityValues = [
  "Knowledge Sharing",
  "Continuous Learning",
  "Mentorship & Support",
  "Career Growth",
  "Open Collaboration",
  "Respectful Environment",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-100 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase"
          >
            Discover
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Who We Are
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              A community of passionate ASP.NET developers committed to learning, 
              sharing, and growing together through collaboration and brotherhood.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 lg:row-start-1"
          >
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <ImagePlaceholder 
                  text="Our Community" 
                  className="h-80 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" 
                  bgColor="bg-white dark:bg-gray-700"
                  textColor="text-gray-500 dark:text-gray-300 text-xl font-medium"
                />
                
                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 shadow-md">
                  ASP.NET Alumni
                </div>
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold text-secondary-600 dark:text-secondary-400 shadow-md">
                  Dev Skill ভাই ব্রাদার্স
                </div>
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
                <span className="font-semibold text-primary-600 dark:text-primary-400">Dev Skill ভাই ব্রাদার্স</span> is a network of ASP.NET alumni who believe in continuous learning, collaboration, and career upliftment.
              </p>
              <p>
                From solving real-world problems to mentoring juniors, we're committed to helping each other grow. Our community values knowledge sharing, professional growth, and building meaningful connections.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {communityValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{value}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Our Journey</h3>
              
              <div className="space-y-8">
                {timelineItems.map((item, itemIdx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 * itemIdx }}
                    key={itemIdx}
                    className="flex items-start"
                  >
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center mr-4 shadow-md`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-100 dark:bg-primary-900 rounded-tl-3xl opacity-50"></div>
    </section>
  );
} 