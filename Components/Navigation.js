'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Main Content */}
      <div className="relative ">
        {/* Background Split */}
        <div className="absolute inset-0">
          {/* Left gray section */}
          <div className="absolute left-0 top-0 bottom-0 w-[63%] bg-gray-200" />
          
          {/* Right black section */}
          <div className="absolute right-0 top-0 bottom-0 w-[37%] bg-black" />
          
          {/* Diagonal transition */}
          <div 
            className="absolute top-0 bottom-0 w-32 bg-gray-200" 
            style={{
              left: '55%',
              transform: 'skewX(-9deg)',
              transformOrigin: 'bottom left',
            }}
          />
        </div>

        {/* Navigation */}
        <div className="relative container mx-auto px-8">
            <div className="flex items-center justify-end h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-12 w-full items-center gap-8">
                <Image 
                href="/portfolio/assets/logo.png"
                alt=''
                className="col-span-2 mb-4 w-10 h-10 relative"
                />
                
                <div className='md:flex gap-8'>
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-white hover:text-gray-300 transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium"
                        >
                        CONTACT ME
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white"
                aria-label="Toggle menu"
            >
                <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                )}
                </svg>
            </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden pb-4">
                {navItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="block py-2 text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    {item.label}
                </Link>
                ))}
                <Link
                href="#contact"
                className="block mt-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
                >
                CONTACT ME
                </Link>
            </div>
            )}
        </div>
      </div>
    </nav>
  );
}