import React from "react";

export default function ITberries() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-8 md:px-24 relative overflow-hidden">
      <div className="max-w-4xl">
        <h1 className="text-[1rem] font-bold tracking-[0.2em] mb-6 uppercase">
          Building Digital Homes You Actually Own and Control.
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-10xl">
          I build high-quality websites that give you total control and
          eliminate the need for expensive technical help later on. For
          organizations and businesses, I deliver clean, professional work that
          fits perfectly into established teams. For startups and individuals, I
          create beautiful, easy-to-manage platforms that grow with your brand.
          My goal is to ensure your digital home is secure and reliable, so you
          can focus on your mission without worrying about your website breaking
          or failing after it launches.
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
