"use client";
import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About me", href: "/about#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/project" },
  ];

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    
    requestAnimationFrame(() => {
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navbarHeight = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 100;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 font-sans bg-black">
      <div 
        className="hidden md:block absolute inset-0 bg-[#E5E5E5] z-10"
        style={{ clipPath: 'polygon(0 0, 48.7% 0%, 47.6% 100%, 0% 100%)' }}
      ></div>

      <div className="flex justify-between items-center px-6 md:px-24 py-4 md:py-6 relative z-20">
        <Link 
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter z-50"
        >
          <span className="px-2 py-1 text-white md:text-black">
            Kalu Joseph
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-10 font-bold text-sm uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="hover:text-gray-500 transition-colors cursor-pointer text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button 
            onClick={handleContactClick}
            className="bg-white text-black px-8 py-3 rounded-full font-black text-xs shadow-md hover:bg-black hover:text-white transition-all duration-300 border-2 border-white"
          >
            CONTACT ME
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden relative z-[60] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-[#1a1a1a] z-50 flex flex-col items-center justify-between py-20 transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {/* Menu Links */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-white hover:text-gray-400 transition-colors cursor-pointer uppercase tracking-wide"
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white hover:text-gray-400 transition-colors cursor-pointer uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hero Content for Mobile */}
        <div className="flex flex-col items-center text-center px-6">
          {/* Profile Image */}
          <div className="mb-6">
            <img 
              src="/assets/Images/Heroheader_img(2).png"
              alt="Kalu Joseph"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-700"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a 
              href="https://github.com/JoeJoe-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all"
            >
              <Github size={20} className="text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/joseph-kalu-934506237"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
                href="https://x.com/JosephKalu001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all"
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

          {/* Text */}
          <p className="text-sm text-gray-400 mb-2">Hi, I am</p>
          <h1 className="text-3xl font-bold text-white mb-2">Kalu Joseph</h1>
          <p className="text-sm text-gray-400 mb-8">Front-end Developer / Website Designer</p>

          {/* Contact Button */}
          <button 
            onClick={handleContactClick}
            className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-200 transition-all w-full max-w-xs"
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </nav>
  );
}