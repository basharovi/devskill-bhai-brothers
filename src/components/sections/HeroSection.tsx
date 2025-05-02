"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import { Code, Users, Lightbulb, ArrowRight, Sparkles, Terminal, BookOpen, Server } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Typing effect component with .NET/C# theme
const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  useEffect(() => {
    if (isFirstLoad) {
      // Don't start typing immediately
      const timeout = setTimeout(() => {
        setIsFirstLoad(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
    
    let timeout: NodeJS.Timeout;
    
    if (phase === "typing") {
      if (charIndex < texts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + texts[currentIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 100);
      } else {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setPhase("deleting");
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, 50);
      } else {
        setPhase("typing");
        setCurrentIndex(prev => (prev + 1) % texts.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, phase, texts, isPaused, isFirstLoad]);
  
  return (
    <div className="inline-flex items-center font-mono">
      <span className="code-keyword mr-2">var</span>
      <span className="code-property">community</span>
      <span className="text-gray-500"> = </span>
      <span className="code-string">"{currentText}"</span>
      <span className="inline-block w-0.5 h-6 bg-[var(--csharp-green)] ml-0.5 -mb-0.5 animate-type-blink"></span>
    </div>
  );
};

// Animated code snippet component
const CodeSnippet = () => {
  return (
    <div className="code-block relative overflow-hidden h-64 w-full max-w-lg mx-auto font-mono text-sm md:text-base">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-10"></div>
      <div className="animate-code-flow" style={{ height: "200%" }}>
        <div className="code-line"><span className="code-comment">// Dev Skill ভাই ব্রাদার্স Community</span></div>
        <div className="code-line"><span className="code-keyword">using</span> System;</div>
        <div className="code-line"><span className="code-keyword">using</span> System.Collections.Generic;</div>
        <div className="code-line"><span className="code-keyword">using</span> DevSkill.Community;</div>
        <div className="code-line"></div>
        <div className="code-line"><span className="code-keyword">namespace</span> DevSkillBrothers</div>
        <div className="code-line">{"{"}</div>
        <div className="code-line pl-4"><span className="code-keyword">public class</span> <span className="code-method">Community</span></div>
        <div className="code-line pl-4">{"{"}</div>
        <div className="code-line pl-8"><span className="code-keyword">public</span> List&lt;Developer&gt; <span className="code-property">Members</span> {"{"} <span className="code-keyword">get</span>; <span className="code-keyword">set</span>; {"}"}</div>
        <div className="code-line pl-8"><span className="code-keyword">public</span> List&lt;Event&gt; <span className="code-property">UpcomingEvents</span> {"{"} <span className="code-keyword">get</span>; <span className="code-keyword">set</span>; {"}"}</div>
        <div className="code-line pl-8"></div>
        <div className="code-line pl-8"><span className="code-keyword">public</span> <span className="code-method">Community</span>()</div>
        <div className="code-line pl-8">{"{"}</div>
        <div className="code-line pl-12"><span className="code-property">Members</span> = <span className="code-keyword">new</span>();</div>
        <div className="code-line pl-12"><span className="code-property">UpcomingEvents</span> = <span className="code-keyword">new</span>();</div>
        <div className="code-line pl-8">{"}"}</div>
        <div className="code-line pl-8"></div>
        <div className="code-line pl-8"><span className="code-keyword">public void</span> <span className="code-method">AddMember</span>(Developer developer)</div>
        <div className="code-line pl-8">{"{"}</div>
        <div className="code-line pl-12"><span className="code-property">Members</span>.Add(developer);</div>
        <div className="code-line pl-12">Console.WriteLine(<span className="code-string">"Welcome to Dev Skill ভাই ব্রাদার্স!"</span>);</div>
        <div className="code-line pl-8">{"}"}</div>
        <div className="code-line pl-8"></div>
        <div className="code-line pl-8"><span className="code-keyword">public void</span> <span className="code-method">OrganizeEvent</span>(string title, DateTime date)</div>
        <div className="code-line pl-8">{"{"}</div>
        <div className="code-line pl-12"><span className="code-keyword">var</span> newEvent = <span className="code-keyword">new</span> Event</div>
        <div className="code-line pl-12">{"{"}</div>
        <div className="code-line pl-16">Title = title,</div>
        <div className="code-line pl-16">Date = date,</div>
        <div className="code-line pl-16">Organizer = <span className="code-string">"Dev Skill ভাই ব্রাদার্স"</span></div>
        <div className="code-line pl-12">{"}"};</div>
        <div className="code-line pl-12"><span className="code-property">UpcomingEvents</span>.Add(newEvent);</div>
        <div className="code-line pl-12">NotifyMembers(newEvent);</div>
        <div className="code-line pl-8">{"}"}</div>
        <div className="code-line pl-8"></div>
        <div className="code-line pl-8"><span className="code-keyword">private void</span> <span className="code-method">NotifyMembers</span>(Event event)</div>
        <div className="code-line pl-8">{"{"}</div>
        <div className="code-line pl-12"><span className="code-keyword">foreach</span> (<span className="code-keyword">var</span> member <span className="code-keyword">in</span> <span className="code-property">Members</span>)</div>
        <div className="code-line pl-12">{"{"}</div>
        <div className="code-line pl-16">member.Notify(event);</div>
        <div className="code-line pl-12">{"}"}</div>
        <div className="code-line pl-8">{"}"}</div>
        <div className="code-line pl-4">{"}"}</div>
        <div className="code-line">{"}"}</div>
      </div>
    </div>
  );
};

// .NET framework feature card
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: { 
  icon: any;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 ${color}`}>
      <div className="flex flex-col items-center text-center">
        <div className={`mb-3 ${color === 'border-[var(--dotnet-purple)]' ? 'text-[var(--dotnet-purple)]' : 
          color === 'border-[var(--csharp-green)]' ? 'text-[var(--csharp-green)]' : 
          color === 'border-[var(--aspnet-blue)]' ? 'text-[var(--aspnet-blue)]' : ''}`}>
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  return (
    <div ref={containerRef} className="relative overflow-hidden bg-white dark:bg-gray-900 pt-24 min-h-screen flex items-center">
      {/* .NET pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="text-[var(--dotnet-purple)]">
            <pattern id="dotnet-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20H40M20 0V40" strokeWidth="0.5" stroke="currentColor" fill="none" />
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotnet-pattern)" />
          </svg>
        </div>
      </div>

      {/* .NET-colored accent elements */}
      <div className="absolute top-20 -left-10 w-40 h-40 rounded-full bg-[var(--dotnet-purple)] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-40 -right-10 w-80 h-80 rounded-full bg-[var(--csharp-green)] opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl rounded-full bg-[var(--aspnet-blue)] opacity-5 blur-3xl"></div>

      <motion.div 
        style={{ opacity, y: translateY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Dev Skill</span>
                <span className="block bg-dotnet-gradient-text">ভাই ব্রাদার্স</span>
              </h1>
              <div className="mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 inline-block">
                <TypingEffect texts={["Grow Together", "Learn Together", "Code Together", "Build Together"]} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 mx-auto lg:mx-0 max-w-2xl"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A vibrant .NET developer community built on brotherhood and shared growth.
                Join hands with fellow developers who are passionate about learning and growing together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-4"
            >
              <Link
                href="#join"
                className="btn-dotnet flex items-center group w-full sm:w-auto justify-center"
              >
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#events"
                className="btn-csharp w-full sm:w-auto justify-center"
              >
                Upcoming Events
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg animate-pulse-slow">
                  <Code className="h-6 w-6 text-[var(--csharp-green)]" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Skills</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg animate-pulse-slow" style={{ animationDelay: '1s' }}>
                  <Users className="h-6 w-6 text-[var(--dotnet-purple)]" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Network</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg animate-pulse-slow" style={{ animationDelay: '2s' }}>
                  <Lightbulb className="h-6 w-6 text-[var(--aspnet-blue)]" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Knowledge</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 lg:mt-0 lg:col-span-6"
          >
            <div className="relative mx-auto max-w-lg">
              <CodeSnippet />
              
              <div className="absolute -bottom-4 -right-4 bg-[var(--dotnet-purple)] p-3 rounded-lg shadow-lg z-20">
                <Terminal className="h-6 w-6 text-white animate-pulse-slow" />
              </div>
            </div>
            
            {/* .NET framework features */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <FeatureCard 
                icon={Terminal} 
                title=".NET" 
                description="Cross-platform development" 
                color="border-[var(--dotnet-purple)]"
              />
              <FeatureCard 
                icon={Code} 
                title="C#" 
                description="Elegant & type-safe" 
                color="border-[var(--csharp-green)]"
              />
              <FeatureCard 
                icon={Server} 
                title="ASP.NET" 
                description="High-performance web apps" 
                color="border-[var(--aspnet-blue)]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Wave separator with .NET colors */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-dotnet-gradient opacity-30"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-100 dark:text-gray-800 w-full h-auto relative z-10">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
} 