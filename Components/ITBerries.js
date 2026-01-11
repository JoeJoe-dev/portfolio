import React from "react";

export default function ITberries() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-8 md:px-24 relative overflow-hidden">
      <div className="max-w-4xl">
        <h1 className="text-[1rem] font-bold tracking-[0.2em] mb-6 uppercase">
            Bridging the Gap Between AI-Enhanced Speed and Human-Centered Design.
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-10xl">
          In this era, the primary barrier for any professional or
          organization—whether a solo entrepreneur, a growing business, or a
          mission-driven NGO—is no longer just "getting a website," but avoiding
          the trap of technical dependency and unmanageable code. You deserve a
          digital presence that serves as a high-performance asset rather than a
          liability, yet too many visitors find themselves abandoned by "black
          box" systems they cannot control or update without expensive
          intervention. By choosing a Frontend Developer and Website Designer
          who leverages AI-driven workflows, you bridge the gap between
          sophisticated, bespoke design and effortless usability. This modern
          approach uses AI to accelerate development and optimize performance,
          ensuring your platform is built with the precision of a large agency
          but remains entirely under your command. Whether you are launching a
          personal brand, a medical portal, or a global school initiative, you
          gain a secure, compliant, and beautiful digital home that evolves
          alongside your goals, giving you total narrative control without the
          fear of post-launch failure.
        </p>

        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 bg-gray-500"></div>
          <button className="text-xs font-bold tracking-widest hover:text-gray-400 transition">
            Joseph Kalu
          </button>
          <div className="h-[1px] w-8 bg-gray-500"></div>
        </div>
      </div>

      {/* Decorative Background Text/Icon */}
      <div className="absolute right-0 bottom-0 opacity-10 select-none pointer-events-none">
        <h1 className="text-[15rem] font-black leading-none transform translate-y-20 translate-x-20">
          IT
        </h1>
      </div>
    </section>
  );
}
