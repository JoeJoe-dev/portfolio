import React, { useState } from 'react';
import Link from 'next/link';

// Import your project images
const project1Img = '/assets/Images/Paragon.jpg';
const project2Img = '/assets/Images/Awosika.jpg';
const project3Img = '/assets/Images/Book.jpg';
const project4Img = '/assets/Images/Easy_Banking.jpg';
const project5Img = '/assets/Images/Bankist.jpg';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: 'Paragon Website',
      description: 'Bootstrap, CSS3, HTML5, JS',
      image: project1Img,
      demoLink: 'https://paragonwebsite.netlify.app',
      moreLink: '/projects',
    },
    {
      id: 2,
      title: 'Mrs. Awosika Portfolio Website',
      description: 'Next.js, Tailwind CSS',
      image: project2Img,
      demoLink: 'https://ibukunawosika.vercel.app',
      moreLink: '/projects',
    },
    {
      id: 3,
      title: 'Samuel Book Website',
      description: 'HTML5, CSS3, JS',
      image: project3Img,
      demoLink: 'https://bookwebsite-test.netlify.app',
      moreLink: '/project',
    },
    // {
    //   id: 4,
    //   title: 'Project Four',
    //   category: 'DESIGNED',
    //   type: 'ui/ux',
    //   description: 'Mobile App Design',
    //   image: project4Img,
    //   demoLink: '#',
    //   moreLink: '#',
    // },
    // {
    //   id: 5,
    //   title: 'Project Five',
    //   category: 'CODED',
    //   type: 'frontend',
    //   description: 'React Application',
    //   image: project5Img,
    //   demoLink: '#',
    //   moreLink: '#',
    // },
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="bg-[#1a1a1a] text-white font-sans">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative border-4 border-white px-20 py-4 bg-black bg-opacity-50">
          <h2 className="text-3xl font-bold tracking-[0.3em] text-white">PORTFOLIO</h2>
        </div>
      </div>

      {/* Filter Tabs */}
      {/* <div className="bg-[#0d0d0d] border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-center gap-16 py-6">
          {['ALL', 'CODED', 'DESIGNED'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-bold tracking-widest transition-colors ${
                activeFilter === filter
                  ? 'text-white border-b-2 border-white pb-1'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div> */}

       <div className="bg-[#0d0d0d] border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-center gap-16 py-6">
            <button>
              LATEST PROJECTS
            </button>
        </div>
      </div> 

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-16 px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-[3rem]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-black rounded-sm cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[24rem] h-[38rem] transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute to-transparent opacity-80"></div>
              </div>

              {/* Project Info Overlay */}
              <div className="absolute group-hover:inset-0 bg-gradient-to-t from-black via-black/70 flex flex-col 
              items-center justify-center text-center p-8">
                {/* Action Buttons */}
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-6">{project.description}</p>
                    <div className="flex items-center gap-4">  
                        <div className="w-12 h-[1px] bg-white"></div>
                        <a
                            href={project.demoLink}
                            className="text-xs font-bold tracking-widest hover:text-gray-300 transition-colors"
                        >
                            DEMO
                        </a>
                        <div className="w-[1px] h-4 bg-white"></div>
                        <a
                            href={project.moreLink}
                            className="text-xs font-bold tracking-widest hover:text-gray-300 transition-colors"
                        >
                            MORE
                        </a>
                    <div className="w-12 h-[1px] bg-white"></div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link 
        href="/projects"
        className="text-center mt-16 text-gray-400 text-lg">
          <p className="text-gray-400 text-lg underline">See All Projects!</p>
        </Link>
      </div>
    </section>
  );
}