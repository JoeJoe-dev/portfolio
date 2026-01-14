"use client";
import React, { useEffect, useRef, useState } from "react";
import { Palette, Code, Wrench } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#D5D5D5] py-20 px-8 font-sans" 
      id="about"
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(30px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes scaleOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.9);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-50px);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(50px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-out-down {
          animation: fadeOutDown 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-out {
          animation: fadeOut 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-out {
          animation: scaleOut 0.6s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-out-left {
          animation: slideOutLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-out-right {
          animation: slideOutRight 0.8s ease-out forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.9s; }
        .stagger-6 { animation-delay: 1s; }
        .stagger-7 { animation-delay: 1.1s; }
        .stagger-8 { animation-delay: 1.2s; }
        
        .hidden-initially {
          opacity: 0;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className={`flex justify-center mb-8 ${
          isVisible ? 'animate-scale-in stagger-1' : 'animate-scale-out stagger-1'
        }`}>
          <div className="border-4 border-black px-16 py-4">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-black">
              ABOUT ME
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className={`text-center text-sm text-black leading-relaxed mb-8 max-w-2xl mx-auto 
          ${isVisible ? 'animate-fade-in-up stagger-2' : 'animate-fade-out-down stagger-2'}`}>
          I&apos;m Kalu Joseph, a creative Frontend Developer and Website
          Designer based in Nigeria. I&apos;m a fast-learning, eager programmer
          who believes that excellence only counts if it brings true
          satisfaction to the person using it. Whether I&apos;m building a sleek
          personal brand site or a complex platform for an organization, my goal
          is always the same: to create something captivating and intuitive that
          gives the user the best of experience and total control over your
          story.
        </p>

        {/* Explore Button */}
        <div className={`flex justify-center mb-12 ${
          isVisible ? 'animate-fade-in stagger-3' : 'animate-fade-out stagger-3'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-black"></div>
            <Link href="/about" className="cursor-pointer">
              <button className="text-black cursor-pointer text-sm font-bold tracking-widest hover:opacity-70 transition-opacity">
                READ MORE
              </button>
            </Link>
            <div className="w-12 h-[2px] bg-black"></div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className={`flex justify-center items-center mb-16 ${
          isVisible ? 'animate-fade-in stagger-4' : 'animate-fade-out stagger-4'
        }`}>
          <div className="w-16 h-[2px] bg-black"></div>
          <div className="mx-3">
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="black" />
              <path d="M10 10 L20 0 L30 10 L20 20 Z" fill="black" />
            </svg>
          </div>
          <div className="w-16 h-[2px] bg-black"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Design */}
          <div className={`text-center ${
            isVisible ? 'animate-slide-left stagger-5' : 'animate-slide-out-left stagger-5'
          }`}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-transparent">
                <Palette size={28} className="text-black" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide">
              WEB DESIGN
            </h3>
            <p className="text-sm text-black text-justify leading-relaxed">
              Recently, the primary friction for both recruiters and clients is
              the &quot;Visual Disconnect&quot;, recruiters struggle to find
              designers who understand how to build for actual code
              implementation, while clients are tired of beautiful websites that
              are impossible for non-tech users to manage. I solve this by
              delivering high-performance, AI-optimized web designs that
              prioritize both systematic consistency for professional dev teams
              and total narrative control for business owners. I bridge the gap
              between high-end aesthetics and practical usability.
            </p>
          </div>

          {/* Development */}
          <div className={`text-center ${
            isVisible ? 'animate-slide-right stagger-6' : 'animate-slide-out-right stagger-6'
          }`}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-transparent">
                <Code size={28} className="text-black" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide">
              WEB DEVELOPMENT
            </h3>
            <p className="text-sm text-black text-justify leading-relaxed">
              I eliminate the frustration of &apos;Rigid Codebases&apos; by
              delivering high-performance, AI-accelerated solutions built for
              both scale and simplicity. For recruiters, I prioritize modular,
              industry-standard code that fits seamlessly into professional
              engineering workflows. For clients, I ensure your platform is easy
              to manage and strictly built to convert—creating a high-trust
              experience that turns your visitors into loyal partners.
            </p>
          </div>
        </div>

        {/* Maintenance - Centered */}
        <div className={`text-center max-w-md mx-auto mb-16 ${
          isVisible ? 'animate-fade-in-up stagger-7' : 'animate-fade-out-down stagger-7'
        }`}>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-transparent">
              <Wrench size={28} className="text-black" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-black mb-4 tracking-wide">
            WEB MAINTENANCE
          </h3>
          <p className="text-sm text-black leading-relaxed">
            The biggest risk for any website is &apos;Maintenance Abandonment&apos;, where
            recruiters see a portfolio of broken links and outdated code, and
            clients are left with a slow site they&apos;re afraid to update. 
            I solve showing a commitment to clean, long-term code health and
            performance optimization. For clients, I handle the technical
            updates so your visitors always experience a professional,
            high-trust environment that keeps your mission moving forward
          </p>
        </div>

        {/* Bottom Decorative Divider */}
        <div className={`flex justify-center items-center ${
          isVisible ? 'animate-fade-in stagger-8' : 'animate-fade-out stagger-8'
        }`}>
          <div className="w-16 h-[2px] bg-black"></div>
          <div className="mx-3">
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="black" />
              <path d="M10 10 L20 0 L30 10 L20 20 Z" fill="black" />
            </svg>
          </div>
          <div className="w-16 h-[2px] bg-black"></div>
        </div>
      </div>
    </section>
  );
}