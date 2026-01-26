"use client";

import React, { useState, useEffect, useRef } from "react";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";

// Animation Wrapper Component
const FadeUp = ({ children, delay = "0s" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "Paragon Website",
      description: "Bootstrap, CSS3, HTML5, JS",
      image: "/assets/Images/Paragon.jpg",
      demoLink: "https://paragonwebsite.netlify.app",
    },
    {
      id: 2,
      title: "Mrs. Awosika Portfolio Website",
      description: "Next.js, Tailwind CSS",
      image: "/assets/Images/Awosika.jpg",
      demoLink: "https://ibukunawosika.vercel.app",
    },
    {
      id: 3,
      title: "Samuel Book Website",
      description: "HTML5, CSS3, JS",
      image: "/assets/Images/Book.jpg",
      demoLink: "https://bookwebsite-test.netlify.app",
    },
    {
      id: 4,
      title: "Bankist Website",
      description: "HTML5, CSS3, JS",
      image: "/assets/Images/Bankist.jpg",
      demoLink: "https://bankistwebsitedemo.netlify.app",
    },
    {
      id: 5,
      title: "KlinTech Website",
      description: "HTML5, CSS3, JS",
      image: "/assets/Images/Klintech.jpg",
      demoLink: "https://klintech-hub-123.vercel.app",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#D5D5D5] text-black font-sans pt-24 md:pt-32"
      id="project"
    >
      <div className="max-w-10xl mx-auto md:px-12 lg:px-20">
        <div className="px-6">
          {/* Header Section */}
          <FadeUp>
            <div className="mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                PORTFOLIO
              </h1>
              <p className="text-lg md:text-xl text-gray-700 font-bold border-l-4 border-black pl-2 ml-1">
                Here are my completed personal projects
              </p>
            </div>
          </FadeUp>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-32">
            {projects.map((project, index) => (
              <FadeUp key={project.id} delay={`${index * 100}ms`}>
                <div className="group relative overflow-hidden bg-black rounded-sm aspect-[4/5] cursor-pointer shadow-xl">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />

                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-6 md:p-8 backdrop-blur-sm">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm font-bold text-gray-300 mb-8 uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      <div className="w-8 h-[1px] bg-white/50"></div>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xs font-black tracking-[0.3em] hover:text-gray-400 transition-colors uppercase py-2 px-4 border border-white/30 hover:border-white rounded-full"
                      >
                        VIEW DEMO
                      </a>
                      <div className="w-8 h-[1px] bg-white/50"></div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <FadeUp>
          <div className="border-t border-gray-400 pt-20">
            <ContactSection />
          </div>
        </FadeUp>
      </div>

      <Footer />
    </div>
  );
}
