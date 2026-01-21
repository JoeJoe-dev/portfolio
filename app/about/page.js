"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, Linkedin, Github, X, Eye } from "lucide-react"; // Added X and Eye
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";

// --- Resume Modal Component ---
const ResumeModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl h-full bg-[#1A1A1A] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-white/10">
        
        {/* Header / Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#252525] border-b border-white/5">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">My Resume / CV</span>
            <a 
              href={pdfUrl} 
              download 
              className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-4 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-2"
            >
              <Download size={14} /> Download
            </a>
          </div>
          <button 
            onClick={onClose}
            className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-4 py-1.5 rounded text-xs font-bold transition-colors"
          >
            Close
          </button>
        </div>

        {/* Content Area (As seen in your UI image) */}
        <div className="flex-1 bg-[#333333] relative">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-none shadow-inner"
            title="Resume Viewer"
          />
        </div>
      </div>
    </div>
  );
};

// Simple Reusable Animated Section Component
const AnimatedSection = ({ children, delay = "0s" }) => {
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

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeUrl = "/documents/Joseph_Kalu_CV.pdf";

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const capabilities = [
    "HTML",
    "CSS3",
    "TAILWIND CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT.JS",
    "NEXT.JS",
    "GIT",
    "FIGMA",
    "SHADCN UI",
    "TRELLO",
    "JIRA",
    "AI",
  ];

  const experiences = [
    {
      title: "Website Developer",
      company: "Odyssey Educational Foundation",
      period: "Aug 2025 — Present",
      description:
        "Build and update responsive pages with a focus on usability, performance, and clarity. Collaborate with internal teams to translate requirements into functional web features.",
    },
    {
      title: "Front-End Developer Intern",
      company: "Larmda",
      period: "Nov 2022 — Feb 2023",
      description:
        "Developed user-friendly web interfaces using React, HTML, CSS, and JavaScript. Collaborated with designers to ensure responsive design across devices.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#D5D5D5] text-black font-sans pt-24 md:pt-32 overflow-x-hidden"
      id="about"
    >
      {/* ADD MODAL COMPONENT */}
      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pdfUrl={resumeUrl} 
      />

      <div className="max-w-10xl mx-auto md:px-12 lg:px-16">
        <div className="px-6">
          {/* Intro Section */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                  About <br className="hidden md:block" /> Me
                </h1>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-light leading-relaxed">
                  I am a <span className="font-bold">Frontend Developer</span>{" "}
                  and Website Designer based in Nigeria, with a background in
                  Microbiology.
                </h2>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed max-w-xl">
                  I deliver modular, industry-standard code for engineering
                  teams and high-trust, intuitive designs for business owners.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {/* UPDATED BUTTON: Instead of direct download, it opens the modal */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-black text-white px-6 md:px-8 py-3 rounded-full font-bold text-xs md:text-sm uppercase 
                    tracking-wide hover:bg-transparent hover:text-black border-2 border-black transition-all flex items-center gap-2"
                  >
                    <Eye size={18} /> View CV
                  </button>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="w-full h-[1px] bg-gray-400 my-20 md:my-32"></div>

          {/* Capabilities Section */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20 md:mb-32">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                My Capabilities
              </h2>
              <div className="space-y-8">
                <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
                  I am always looking to add more skills and stay updated with
                  modern technologies.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {capabilities.map((skill, index) => (
                    <span
                      key={index}
                      style={{ transitionDelay: `${index * 50}ms` }}
                      className="px-4 md:px-6 py-2 border-2 border-black rounded-full text-[10px] md:text-xs font-bold bg-black text-white uppercase tracking-wider hover:bg-transparent hover:text-black transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="w-full h-[1px] bg-gray-400 mb-20 md:my-32"></div>

          {/* Experience Section */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                My Experience
              </h2>

              <div className="space-y-16">
                <div className="space-y-10">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="group border-l-4 border-transparent hover:border-black pl-4 transition-all"
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl md:text-2xl font-bold uppercase">
                          {exp.title}
                        </h3>
                        <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-black font-black mb-4 uppercase tracking-wider">
                        {exp.company}
                      </p>
                      <p className="text-sm md:text-base text-gray-600 font-semibold leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* <div className="pt-10 border-t border-gray-400 space-y-10">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                    Selected Projects
                  </h3>
                  <div className="grid gap-8">
                    {[
                      {
                        name: "Mrs. Awosika Portfolio",
                        desc: "Full portfolio using Next.js and Tailwind CSS.",
                      },
                      {
                        name: "Paragon NGO Website",
                        desc: "NGO platform supporting sports using modern web tools.",
                      },
                    ].map((proj, idx) => (
                      <div key={idx} className="group cursor-default">
                        <p className="text-lg font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">
                          {proj.name}
                        </p>
                        <p className="text-sm md:text-base text-gray-600 font-semibold leading-relaxed">
                          {proj.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="w-full h-[1px] bg-gray-400 mt-20 md:mt-32"></div>

        <AnimatedSection delay="0.2s">
          <ContactSection />
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
