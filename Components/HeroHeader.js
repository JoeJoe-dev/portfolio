'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroHeader() {
  return (
    <div className="relative h-[93vh] w-full overflow-hidden">
      {/* Main Content */}
      <div className="relative ">
        {/* Background Split */}
        <div className="absolute inset-0 h-screen">
          {/* Left gray section */}
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gray-200" />
          
          {/* Right black section */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-black" />
          
          {/* Diagonal transition */}
          <div 
            className="absolute top-0 bottom-0 w-32 bg-gray-200" 
            style={{
              left: '55%',
              transform: 'skewX(-10deg)',
              transformOrigin: 'top left',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container h-[93vh] mx-auto px-8 flex items-center">
          <div className="grid md:grid-cols-2 gap-12 w-full items-center">
            {/* Left Content */}
            <div className=" md:pt-0">
              <p className="text-gray-600 text-lg mb-2 font-normal">Hi, I am</p>
              
              <h1 className="text-7xl md:text-8xl font-black mb-4 text-black leading-none">
                Tomasz Gajda
              </h1>
              
              <p className="text-gray-500 text-xl md:text-2xl mb-16 font-normal">
                Front-end Developer / UI Designer
              </p>

              {/* Social Icons */}
              <div className="flex gap-6">
                <a 
                  href="mailto:example@email.com"
                  className="w-14 h-14 bg-gray-300 hover:bg-gray-400 rounded-xl flex items-center justify-center transition-all shadow-md"
                  aria-label="Email"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <text x="12" y="16" fontSize="12" fill="black" textAnchor="middle" fontWeight="bold">@</text>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-300 hover:bg-gray-400 rounded-xl flex items-center justify-center transition-all shadow-md"
                  aria-label="GitHub"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-300 hover:bg-gray-400 rounded-xl flex items-center justify-center transition-all shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex justify-end items-center">
              <div className="relative w-full max-w-lg">
                {/* Professional Photo Placeholder */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  {/* You can replace this with an actual image using Next.js Image component */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-black">
                    {/* Placeholder for actual photo */}
                    <Image
                      src="/api/placeholder/600/800"
                      alt=""
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Photo Note */}
                <div className="absolute bottom-8 right-8 bg-white px-4 py-3 rounded-lg shadow-xl max-w-[180px]">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    this is not my photo,<br />
                    but I dearly hope to<br />
                    get one just like this
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}