"use client";
import React, { useEffect, useRef, useState } from "react";
import { Smartphone, TabletSmartphone, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This triggers when the user scrolls the section into view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Slight offset so it feels more natural
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#D5D5D5] py-20 px-8 font-sans overflow-hidden"
      id="about"
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOutDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(50px); }
        }
        
        /* The logic: only run animation if isVisible is true */
        .scroll-trigger { 
          opacity: 0;
          animation: ${isVisible ? "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "fadeOutDown 0.6s ease-in forwards"};
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        
        /* Specific delays for the grid to wait for the text above */
        .grid-delay-1 { animation-delay: 0.6s; }
        .grid-delay-2 { animation-delay: 0.8s; }
        .grid-delay-3 { animation-delay: 1.0s; }
        .divider-delay { animation-delay: 1.2s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-12 scroll-trigger delay-1">
          <div className="border-4 border-black px-12 py-4">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-black uppercase">
              About Me
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-base text-black leading-relaxed mb-8 max-w-2xl mx-auto scroll-trigger delay-2">
          I&apos;m well known as Maaz, I am a Self-Taught Web & Mobile developer
          based in Nigeria. I&apos;m a passionate programmer who love to build
          useful software an solve technical problems with my skills. I also
          possess excellent problem-solving skills, attention to detail, and a
          commitment to meeting deadlines. I am a quick learner and always eager
          to expand my skillset to take on new challenges and improve my
          abilities.
        </p>

        {/* Explore Button */}
        <div className="flex justify-center items-center gap-6 mb-20 scroll-trigger delay-3">
          <div className="w-12 h-[2px] bg-black"></div>
          <Link href="/about">
            <button className="text-black text-sm font-extrabold tracking-widest hover:opacity-60 transition-all uppercase cursor-pointer">
              Read More
            </button>
          </Link>
          <div className="w-12 h-[2px] bg-black"></div>
        </div>

        {/* Services Grid - Only slides up when section isVisible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 w-full px-4">
          {/* iOS Development */}
          <div className="text-center scroll-trigger grid-delay-1">
            <ServiceIcon Icon={Smartphone} />
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide uppercase">
              iOS Development
            </h3>
            <p className="text-sm text-black leading-relaxed lg:text-justify">
              I build clean, intuitive iPhone apps that feel right at home in a
              user's hand. My focus is on creating smooth experiences that make
              your brand a seamless part of their daily routine.
            </p>
          </div>

          {/* Android Development */}
          <div className="text-center scroll-trigger grid-delay-2">
            <ServiceIcon Icon={TabletSmartphone} />
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide uppercase">
              Android Development
            </h3>
            <p className="text-sm text-black leading-relaxed lg:text-justify">
              I develop versatile Android applications designed to perform
              across the vast world of devices. I make sure your service stays
              fast, accessible, and reliable for every single user.
            </p>
          </div>

          {/* Web Development */}
          <div className="text-center scroll-trigger grid-delay-3 md:col-span-2 lg:col-span-1">
            <ServiceIcon Icon={Globe} />
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide uppercase">
              Web Development
            </h3>
            <p className="text-sm text-black leading-relaxed max-w-md mx-auto lg:max-w-none lg:text-justify">
              I create dedicated home bases that give you total control over
              your narrative. From clean landing pages to complex web apps, I
              build digital spaces that actually help you grow.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center items-center scroll-trigger divider-delay">
          <div className="w-20 h-[2px] bg-black"></div>
          <div className="mx-4 flex gap-1 text-black">
            <DiamondIcon />
            <DiamondIcon />
          </div>
          <div className="w-20 h-[2px] bg-black"></div>
        </div>
      </div>
    </section>
  );
}

const ServiceIcon = ({ Icon }) => (
  <div className="flex justify-center mb-6">
    <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-transparent">
      <Icon size={28} className="text-black" strokeWidth={1.5} />
    </div>
  </div>
);

const DiamondIcon = () => (
  <svg width="20" height="20" viewBox="0 0 30 20" fill="currentColor">
    <path d="M0 10 L10 0 L20 10 L10 20 Z" />
  </svg>
);
