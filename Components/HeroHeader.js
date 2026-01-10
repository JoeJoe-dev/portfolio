import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function HeroHeader() {
  return (
    <header className="relative min-h-screen flex flex-col md:flex-row bg-black overflow-hidden font-sans">
      {/* Left Slanted Section */}
      <div 
        className="absolute inset-0 bg-[#E5E5E5] z-10"
        style={{ clipPath: 'polygon(0 0, 48% 0, 38% 100%, 0% 100%)' }}
      ></div>

      <div className="relative z-20 w-full  mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center min-h-screen">
        
        {/* Text Area */}
        <div className="w-full md:w-1/2 pt-32 md:ml-[100rem] bg-red-500">
          <h3 className="text-xl font-bold text-gray-800 mb-10">Hi, I am</h3>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-2 tracking-tight">
            Kalu Joseph
          </h1>
          <p className="text-gray-500 font-[600] text-lg mb-8">
            Front-end Developer / Website Designer
          </p>

          {/* Refined Social Icons with Box Shadow */}
          <div className="flex gap-6">
            <a 
              href="mailto:your-email@example.com" 
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Image Area */}
        <div className="w-full md:w-1/2 h-full flex items-end justify-center relative">
          <img 
            src="/profile-placeholder.png" 
            alt="Kalu Joseph"
            className="h-[80vh] object-contain z-30"
          />
          <p className="absolute bottom-10 right-0 text-[10px] text-gray-400 max-w-[150px] leading-tight text-right">
            this is not my photo, but I dearly hope to get one just like this
          </p>
        </div>
      </div>
    </header>
  );
}