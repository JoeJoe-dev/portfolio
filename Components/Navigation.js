"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navbarHeight = 100; // Adjust based on your navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.error(`Element with id "${targetId}" not found`);
        console.log('Available IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id));
      }
    });
  };

  const handleContactClick = (e) => {
    // e.preventDefault();
    handleScrollToSection(e, '#contact');
  };

  return (
    <nav className="fixed top-0 w-full z-50 font-sans bg-black">
       <div 
        className="absolute inset-0 bg-[#E5E5E5] z-10"
        style={{ clipPath: 'polygon(0 0, 48.7% 0%, 47.6% 100%, 0% 100%)' }}
      ></div>

      <div className="flex justify-between items-center px-6 md:px-24 py-6 relative z-20">
        <Link 
          href="/"
          className="text-2xl font-bold tracking-tighter z-50"
        >
          <span className="px-2 py-1 text-black">
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
                // onClick={(e) => handleScrollToSection(e, link.href)}
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

        {/* Mobile Toggle Button - Now with higher z-index */}
        <button 
          className="md:hidden relative z-[60] p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} className="text-black" /> : <Menu size={32} className="text-black" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleScrollToSection(e, link.href)}
            className="text-3xl font-black uppercase tracking-tighter text-black hover:text-gray-500 transition-colors cursor-pointer"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={handleContactClick}
          className="mt-4 bg-black text-white px-10 py-4 rounded-full font-black text-sm"
        >
          CONTACT ME
        </button>
      </div>
    </nav>
  );
}