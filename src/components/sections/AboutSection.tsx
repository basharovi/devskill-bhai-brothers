"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, Award, CheckCircle, Code, BookOpen, Zap, Database, Server, GitBranch } from "lucide-react";
import { useRef } from "react";

// Timeline items with .NET/C# focus
const timelineItems = [
  {
    title: "Started in 2024",
    description: "Our journey began with a vision to create a supportive community for ASP.NET developers.",
    icon: Calendar,
    iconBg: "bg-[var(--dotnet-purple-light)]",
    iconColor: "text-white",
  },
  {
    title: "First Meetup",
    description: "Our inaugural meetup brought together passionate developers eager to learn and collaborate.",
    icon: Users,
    iconBg: "bg-[var(--csharp-green-light)]",
    iconColor: "text-white",
  },
  {
    title: "Launch of DevCast Podcast",
    description: "Started our tech podcast to share knowledge and insights from experienced professionals.",
    icon: Award,
    iconBg: "bg-[var(--aspnet-blue-light)]",
    iconColor: "text-white",
  },
  {
    title: "Community Expansion",
    description: "Welcomed developers from various backgrounds, creating a diverse and inclusive community.",
    icon: GitBranch,
    iconBg: "bg-[var(--xamarin-blue)]",
    iconColor: "text-white",
  },
  {
    title: "Tech Mentorship Program",
    description: "Launched a structured mentorship program pairing seniors with junior developers.",
    icon: BookOpen,
    iconBg: "bg-[var(--blazor-purple)]",
    iconColor: "text-white",
  },
];

// Community values with .NET stack focus
const communityValues = [
  {
    name: "ASP.NET Core Mastery",
    icon: Server,
    description: "Web development excellence",
  },
  {
    name: "C# Best Practices",
    icon: Code,
    description: "Writing clean, efficient code",
  },
  {
    name: "Database Expertise",
    icon: Database,
    description: "SQL Server & EF Core skills",
  },
  {
    name: "Career Growth",
    icon: Award,
    description: "Professional advancement",
  },
  {
    name: "Open Collaboration",
    icon: GitBranch,
    description: "Working together on solutions",
  },
  {
    name: "Mentorship & Support",
    icon: Users,
    description: "Guiding and lifting each other",
  },
];

// Animated typing component
const AnimatedTitle = ({ text }: { text: string }) => {
  return (
    <div className="inline-block bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono">
      <span className="text-[var(--dotnet-purple)]">namespace</span>{" "}
      <span className="text-[var(--aspnet-blue)]">DevSkill</span>
      <span className="text-gray-500">{" {"}</span>
      <br />
      <span className="pl-4 text-[var(--dotnet-purple)]">public</span>{" "}
      <span className="text-[var(--dotnet-purple)]">static</span>{" "}
      <span className="text-[var(--dotnet-purple)]">class</span>{" "}
      <span className="text-[var(--aspnet-blue)]">Community</span>
      <span className="text-gray-500">{" {"}</span>
      <br />
      <span className="pl-8 text-[var(--dotnet-purple)]">public</span>{" "}
      <span className="text-[var(--dotnet-purple)]">const</span>{" "}
      <span className="text-[var(--dotnet-purple)]">string</span>{" "}
      <span className="text-[var(--csharp-green)]">Name</span>{" "}
      <span className="text-gray-500">=</span>{" "}
      <span className="text-[var(--aspnet-blue)]">"{text}"</span>;
      <br />
      <span className="pl-4 text-gray-500">{"}"}</span>
      <br />
      <span className="text-gray-500">{"}"}</span>
    </div>
  );
};

// Code-styled tab component
const CodeTab = ({ active, children }: { active: boolean; children: React.ReactNode }) => {
  return (
    <div className={`
      px-4 py-2 rounded-t-lg font-mono text-sm flex items-center
      ${active 
        ? "bg-white dark:bg-gray-800 border-t-2 border-x border-[var(--dotnet-purple)]" 
        : "bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"}
    `}>
      {active && <span className="w-2 h-2 bg-[var(--dotnet-purple)] rounded-full mr-2"></span>}
      {children}
    </div>
  );
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      {/* .NET-inspired background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" className="text-[var(--dotnet-purple)]">
            <pattern id="about-grid" patternUnits="userSpaceOnUse" width="50" height="50">
              <path d="M0 5L50 5M5 0L5 50" strokeWidth="0.5" stroke="currentColor" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
      </motion.div>
      
      {/* Accent color blobs */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--dotnet-purple)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-[var(--csharp-green)] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider text-[var(--dotnet-purple)] uppercase"
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
          
          {/* Code-styled community name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center my-8"
          >
            <AnimatedTitle text="Dev Skill ভাই ব্রাদার্স" />
          </motion.div>
          
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
              {/* Code editor style container */}
              <div className="relative shadow-xl overflow-hidden rounded-lg">
                {/* Editor tabs */}
                <div className="flex items-center bg-gray-200 dark:bg-gray-900 px-2 pt-2">
                  <CodeTab active={true}>Community.cs</CodeTab>
                  <CodeTab active={false}>Events.cs</CodeTab>
                  <CodeTab active={false}>Members.cs</CodeTab>
                </div>
                
                {/* Editor content */}
                <div className="bg-white dark:bg-gray-800 p-6 font-mono text-sm shadow-inner border-x border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex">
                      <span className="text-gray-400 w-7">1</span>
                      <span className="text-[var(--dotnet-purple)]">using</span>
                      <span className="text-gray-700 dark:text-gray-300"> System;</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">2</span>
                      <span className="text-[var(--dotnet-purple)]">using</span>
                      <span className="text-gray-700 dark:text-gray-300"> System.Collections.Generic;</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">3</span>
                      <span className="text-[var(--dotnet-purple)]">namespace</span>
                      <span className="text-gray-700 dark:text-gray-300"> DevSkill</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">4</span>
                      <span className="text-gray-700 dark:text-gray-300">{"{"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">5</span>
                      <span className="pl-4 text-[var(--dotnet-purple)]">public class</span>
                      <span className="text-[var(--csharp-green)]"> Community</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">6</span>
                      <span className="pl-4 text-gray-700 dark:text-gray-300">{"{"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">7</span>
                      <span className="pl-8 text-[var(--dotnet-purple)]">public string</span>
                      <span className="text-gray-700 dark:text-gray-300"> Name {"{"} get; set; {"}"} =</span>
                      <span className="text-[var(--aspnet-blue)]"> "Dev Skill ভাই ব্রাদার্স"</span><span className="text-gray-700 dark:text-gray-300">;</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">8</span>
                      <span className="pl-8 text-[var(--dotnet-purple)]">public List{"<Developer>"}</span>
                      <span className="text-gray-700 dark:text-gray-300"> Members {"{"} get; {"}"} = </span>
                      <span className="text-[var(--dotnet-purple)]">new</span><span className="text-gray-700 dark:text-gray-300">();</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">9</span>
                      <span className="pl-8 text-[var(--dotnet-purple)]">public DateTime</span>
                      <span className="text-gray-700 dark:text-gray-300"> Founded {"{"} get; {"}"} = </span>
                      <span className="text-[var(--dotnet-purple)]">new</span>
                      <span className="text-gray-700 dark:text-gray-300">(2024, 1, 1);</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">10</span>
                      <span className="pl-8 text-gray-400">// Our core values</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">11</span>
                      <span className="pl-8 text-[var(--dotnet-purple)]">public string[]</span>
                      <span className="text-gray-700 dark:text-gray-300"> Values {"{"} get; {"}"} = </span>
                      <span className="text-[var(--dotnet-purple)]">new</span>
                      <span className="text-gray-700 dark:text-gray-300">[]</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">12</span>
                      <span className="pl-8 text-gray-700 dark:text-gray-300">{"{"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">13</span>
                      <span className="pl-12 text-[var(--aspnet-blue)]">"Knowledge Sharing"</span><span className="text-gray-700 dark:text-gray-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">14</span>
                      <span className="pl-12 text-[var(--aspnet-blue)]">"Continuous Learning"</span><span className="text-gray-700 dark:text-gray-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">15</span>
                      <span className="pl-12 text-[var(--aspnet-blue)]">"Professional Growth"</span><span className="text-gray-700 dark:text-gray-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">16</span>
                      <span className="pl-12 text-[var(--aspnet-blue)]">"Brotherhood"</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">17</span>
                      <span className="pl-8 text-gray-700 dark:text-gray-300">{"}"};</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">18</span>
                      <span className="pl-4 text-gray-700 dark:text-gray-300">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-7">19</span>
                      <span className="text-gray-700 dark:text-gray-300">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Blinking cursor animation */}
              <div className="absolute bottom-9 left-[198px] h-4 w-1 bg-gray-700 dark:bg-gray-300 animate-type-blink"></div>
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
                <span className="font-semibold text-[var(--dotnet-purple)]">Dev Skill ভাই ব্রাদার্স</span> is a network of ASP.NET alumni who believe in continuous learning, collaboration, and career upliftment.
              </p>
              <p>
                From solving real-world problems to mentoring juniors, we're committed to helping each other grow. Our community values knowledge sharing, professional growth, and building meaningful connections.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {communityValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-[var(--dotnet-purple-light)] flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{value.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8">Our Journey</h3>
              
              {/* Timeline with .NET colors */}
              <div className="relative pl-8 space-y-10 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--dotnet-purple)] before:to-[var(--csharp-green)]">
                {timelineItems.map((item, itemIdx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.15 * itemIdx }}
                    key={itemIdx}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className={`absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full ${item.iconBg} ${item.iconColor} shadow-md z-10`}
                      whileHover={{ scale: 1.2 }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ 
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                        }
                      }}
                    >
                      <item.icon className="h-4 w-4" />
                    </motion.div>
                    
                    {/* Content card */}
                    <div 
                      className="ml-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[var(--dotnet-purple)]"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
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
      
      {/* Code-inspired decorative corner elements */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[var(--dotnet-purple)] opacity-10 flex items-center justify-center rounded-tl-3xl overflow-hidden">
        <Code className="w-12 h-12 text-[var(--dotnet-purple)]" />
      </div>
      
      <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--csharp-green)] opacity-10 flex items-center justify-center rounded-br-3xl overflow-hidden">
        <Server className="w-12 h-12 text-[var(--csharp-green)]" />
      </div>
    </section>
  );
}