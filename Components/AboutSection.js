import React from "react";
import { Palette, Code, Wrench } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#D5D5D5] py-20 px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <div className="border-4 border-black px-16 py-4">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-black">
              ABOUT ME
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-sm text-black leading-relaxed mb-8 max-w-2xl mx-auto">
          I&apos;m Kalu Joseph, a creative Frontend Developer and Website
          Designer based in Nigeria. I&apos;m a fast-learning, eager programmer
          who believes that excellence only counts if it brings true
          satisfaction to the person using it. Whether I&apos;m building a sleek
          personal brand site or a complex platform for an organization, my goal
          is always the same: to create something captivating and intuitive that
          gives you total control over your story.
        </p>

        {/* Explore Button */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-black"></div>
            <button className="text-black text-sm font-bold tracking-widest hover:opacity-70 transition-opacity">
              EXPLORE
            </button>
            <div className="w-12 h-[2px] bg-black"></div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center mb-16">
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
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-transparent">
                <Palette size={28} className="text-black" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide">
              DESIGN
            </h3>
            <p className="text-sm text-black leading-relaxed">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          {/* Development */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-transparent">
                <Code size={28} className="text-black" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide">
              DEVELOPMENT
            </h3>
            <p className="text-sm text-black leading-relaxed">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>

        {/* Maintenance - Centered */}
        <div className="text-center max-w-md mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-transparent">
              <Wrench size={28} className="text-black" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-black mb-4 tracking-wide">
            MAINTENANCE
          </h3>
          <p className="text-sm text-black leading-relaxed">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>

        {/* Bottom Decorative Divider */}
        <div className="flex justify-center items-center">
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
