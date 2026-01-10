import React from 'react';

export default function ITberries() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-8 md:px-24 relative overflow-hidden">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold tracking-[0.2em] mb-6">IT BERRIES</h2>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. 
          Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. 
          Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. 
          Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
        </p>

        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 bg-gray-500"></div>
          <button className="text-xs font-bold tracking-widest hover:text-gray-400 transition">
            READ MORE
          </button>
          <div className="h-[1px] w-8 bg-gray-500"></div>
        </div>
      </div>

      {/* Decorative Background Text/Icon */}
      <div className="absolute right-0 bottom-0 opacity-10 select-none pointer-events-none">
        <h1 className="text-[15rem] font-black leading-none transform translate-y-20 translate-x-10">
          IT
        </h1>
      </div>
    </section>
  );
}