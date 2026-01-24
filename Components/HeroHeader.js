import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
        
        @keyframes slideUpOverlay {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        
        /* Mobile animations */
        .mobile-image-zoom {
          animation: zoomIn 1.2s ease-out;
        }
        
        .mobile-overlay-slide {
          animation: slideUpOverlay 0.8s ease-out;
        }
        
        .mobile-text-fade {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .mobile-icon-fade {
          animation: fadeIn 0.5s ease-out;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .stagger-2 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
        .stagger-3 { animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards; }
        .stagger-4 { animation-delay: 0.7s; opacity: 0; animation-fill-mode: forwards; }
        
        /* Mobile stagger delays */
        .mobile-stagger-1 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
        .mobile-stagger-2 { animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards; }
        .mobile-stagger-3 { animation-delay: 0.7s; opacity: 0; animation-fill-mode: forwards; }
        .mobile-stagger-4 { animation-delay: 0.9s; opacity: 0; animation-fill-mode: forwards; }
        
        /* Mobile slanted overlay */
        .slanted-overlay {
          clip-path: polygon(0 45%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>

      {/* Left Slanted Section - Desktop Only */}
      <div
        className="absolute inset-0 bg-[#E5E5E5] z-10 animate-slant hidden md:block"
        style={{ clipPath: "polygon(0 0, 48% 0, 38% 100%, 0% 100%)" }}
      ></div>

      {/* Desktop View */}
      <div className="hidden md:flex relative z-20 w-full mx-auto px-8 md:px-24 flex-col md:flex-row items-center min-h-screen mt-[-10rem]">
        {/* Text Area */}
        <div className="w-full md:w-1/2 pt-32 md:pt-0 flex flex-col justify-center md:ml-[1rem]">
          <h3 className="text-xl font-bold text-gray-800 mb-10 animate-fade-up stagger-1">
            Hi, I am
          </h3>
<<<<<<< HEAD
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-5 tracking-tight animate-slide-left stagger-2 md:ml-[-.3rem]">
            Maazjnr
          </h1>
          <p className="text-gray-500 font-[600] text-lg mb-8 animate-fade-up stagger-3">
             I am a Self-Taught Web & Mobile developer <br /> based in Nigeria (West Africa)
          </p>

          {/* Refined Social Icons with Box Shadow */}
          <div className="flex gap-6 animate-fade-up stagger-4">
            <a
              href="https://github.com/JoeJoe-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-kalu-934506237"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4C4C4] p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-black"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/JosephKalu001"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Image Area - Desktop */}
        <div className="w-full md:w-1/2 h-full flex items-end justify-center relative mt-[-10rem]">
          <img
            src="/assets/Images/maaz.jpg"
            alt="Kalu Joseph"
            className="h-[80vh] object-contain z-30 animate-slide-right rounded-full"
          />
        </div>
      </div>

      {/* Mobile View - With Animations */}
      <div className="md:hidden relative w-full h-screen bg-black overflow-hidden">
        {/* Full 100vh Image Background - Zoom In Animation */}
        <div className="absolute inset-0 w-full h-screen">
          <img
            src="/assets/Images/maaz.jpg"
            alt="Kalu Joseph"
            className="w-full h-full object-cover object-top mobile-image-zoom"
          />
        </div>

        {/* Slanted Semi-Transparent Dark Overlay at Bottom - Slide Up Animation */}
        <div className="absolute bottom-[-1rem] left-0 right-0 h-[19rem] bg-black/40 slanted-overlay mobile-overlay-slide overflow-hidden">
          {/* Subtle gradient to ensure text pops against the background image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-8 py-8 flex items-end justify-between z-10">
            {/* Text Content - Left Side - Fade Up with Stagger */}
            <div className="text-left flex-1">
              <p className="text-3xl font-bold text-gray-300 mb-1 mobile-text-fade mobile-stagger-1">
                Hi, I am
              </p>
              <h1 className="text-4xl font-bold text-white mb-1 leading-tight mobile-text-fade mobile-stagger-2">
                Maazjnr
              </h1>
              <p className="text-[1rem] font-bold text-gray-200 mobile-text-fade mobile-stagger-3">
                I am a Self-Taught Web & Mobile developer <br /> based in Nigeria (West Africa)
              </p>
            </div>

            {/* Social Icons - Vertical Stack on Right - Fade In with Stagger */}
            <div className="flex flex-col gap-3 ml-4">
              <a
                href="https://github.com/JoeJoe-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all shadow-lg mobile-icon-fade mobile-stagger-2"
              >
                <Github size={18} className="text-gray-800" />
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-kalu-934506237"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all shadow-lg mobile-icon-fade mobile-stagger-3"
              >
                <Linkedin size={18} className="text-gray-800" />
              </a>
              <a
                href="https://x.com/JosephKalu001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all shadow-lg text-black mobile-icon-fade mobile-stagger-4"
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
        </div>
      </div>
    </header>
  );
}
