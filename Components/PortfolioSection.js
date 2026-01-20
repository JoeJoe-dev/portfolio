import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    title: 'Paragon Website',
    description: 'Bootstrap, CSS3, HTML5, JS',
    image: '/assets/Images/Paragon.jpg',
    demoLink: 'https://paragonwebsite.netlify.app',
    moreLink: '/project',
  },
  {
    id: 2,
    title: 'Mrs. Awosika Portfolio',
    description: 'Next.js, Tailwind CSS',
    image: '/assets/Images/Awosika.jpg',
    demoLink: 'https://ibukunawosika.vercel.app',
    moreLink: '/project',
  },
  {
    id: 3,
    title: 'Samuel Book Website',
    description: 'HTML5, CSS3, JS',
    image: '/assets/Images/Book.jpg',
    demoLink: 'https://bookwebsite-test.netlify.app',
    moreLink: '/project',
  },
];

const ProjectCard = ({ project, index, isVisible }) => (
  <div 
    className={`group relative overflow-hidden bg-[#0d0d0d] rounded-sm cursor-pointer h-80 border border-white/10 transition-all duration-700 ease-in-out ${
      isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-20 scale-95'
    }`}
    // This creates the staggered "one after the other" effect
    style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : '0ms' }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
    />
    <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
      <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-sm font-medium text-gray-400 mb-6">{project.description}</p>
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-white/50" />
        <a href={project.demoLink} className="text-xs font-bold tracking-widest text-white hover:text-gray-300 transition-colors">DEMO</a>
        <div className="w-[1px] h-4 bg-white/50" />
        <a href={project.moreLink} className="text-xs font-bold tracking-widest text-white hover:text-gray-300 transition-colors">MORE</a>
        <div className="w-8 h-[1px] bg-white/50" />
      </div>
    </div>
  </div>
);

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This will now toggle true/false as you scroll in and out
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1, // Triggers when 10% of the section is visible
        rootMargin: "-50px 0px -50px 0px" // Adds a buffer so it doesn't flicker at the very edge
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen font-sans overflow-hidden bg-scroll md:bg-fixed bg-cover bg-center py-20"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200")' }}
      id="portfolio"
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />

      <div className="relative z-10">
        {/* Header Title */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="border-4 border-white px-12 md:px-20 py-4 bg-black/40">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-white text-center">PORTFOLIO</h2>
          </div>
        </div>

        {/* Filter Label */}
        <div 
          className={`flex justify-center pb-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          <span className="text-sm font-bold tracking-[0.2em] text-gray-300 border-b border-gray-500 pb-2">
            LATEST PROJECTS
          </span>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto pb-24 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>

          {/* Bottom Link */}
          <div className={`text-center mt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
          >
            <Link href="/projects" className="inline-block group">
              <p className="text-gray-300 text-lg underline underline-offset-8 decoration-gray-500 group-hover:text-white group-hover:decoration-white transition-all">
                See All Projects!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}