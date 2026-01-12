"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 font-sans bg-black ">
       <div 
        className="absolute inset-0 bg-[#E5E5E5] z-10"
        style={{ clipPath: 'polygon(0 0, 48.7% 0%, 47.6% 100%, 0% 100%)' }}
      ></div>

      <div className="flex justify-between items-center px-6 md:px-24 py-6 relative z-20">
        {/* Logo - Adjusted to KJ for Kalu Joseph */}
           {/* <div className="text-black relative w-10 h-10">
             <Image 
              src="/assets/logo_2.png" 
              alt="Logo" 
              fill 
              className="object-contain w-[10rem]"
              priority
          /> 
           </div>*/}
        <Link 
        href="/"
        className="text-2xl font-bold tracking-tighter z-50">
          <span className=" px-2 py-1 text-black">
            Kalu Joseph
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-10 font-bold text-sm uppercase tracking-widest">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-gray-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-full font-black text-xs shadow-md hover:bg-black hover:text-white transition-all duration-300 border-2 border-white">
            CONTACT ME
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-50 p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black uppercase tracking-tighter hover:text-gray-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-black text-white px-10 py-4 rounded-full font-black text-sm"
        >
          CONTACT ME
        </button>
      </div>
    </nav>
  );
}