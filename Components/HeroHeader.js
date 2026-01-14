import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function HeroHeader() {
  return (
    <header className="relative min-h-screen flex flex-col md:flex-row bg-black overflow-hidden font-sans">
      <style>{`
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandSlant {
          from {
            clip-path: polygon(0 0, 0% 0, 0% 100%, 0% 100%);
          }
          to {
            clip-path: polygon(0 0, 48% 0, 38% 100%, 0% 100%);
          }
        }
        
        .animate-slant {
          animation: expandSlant 1s ease-out;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-right {
          animation: slideInRight 1s ease-out;
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .stagger-2 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
        .stagger-3 { animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards; }
        .stagger-4 { animation-delay: 0.7s; opacity: 0; animation-fill-mode: forwards; }
      `}</style>

      {/* Left Slanted Section */}
      <div 
        className="absolute inset-0 bg-[#E5E5E5] z-10 animate-slant"
        style={{ clipPath: 'polygon(0 0, 48% 0, 38% 100%, 0% 100%)' }}
      ></div>

      <div className="relative z-20 w-full mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center min-h-screen mt-[-10rem]">
        {/* Text Area */}
        <div className="w-full md:w-1/2 pt-32 md:pt-0 flex flex-col justify-center md:ml-[1rem]">
          <h3 className="text-xl font-bold text-gray-800 mb-10 animate-fade-up stagger-1">Hi, I am</h3>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-2 tracking-tight animate-slide-left stagger-2">
            Kalu Joseph
          </h1>
          <p className="text-gray-500 font-[600] text-lg mb-8 animate-fade-up stagger-3">
            Front-end Developer / Website Designer
          </p>

          {/* Refined Social Icons with Box Shadow */}
          <div className="flex gap-6 animate-fade-up stagger-4">
            <a 
              href="https://github.com/JoeJoe-dev" 
              target="_blank" 
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joseph-kalu-934506237" 
              target="_blank" 
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/JosephKalu001"
              target="_blank"
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            </a>
          </div>
        </div>

        {/* Image Area */}
        <div className="w-full md:w-1/2 h-full flex items-end justify-center relative mt-[-10rem]">
          <img 
            src="/assets/Images/Heroheader_img(2).png" 
            alt="Kalu Joseph"
            className="h-[80vh] object-contain z-30 animate-slide-right rounded-full"
          />
        </div>
      </div>
    </header>
  );
}