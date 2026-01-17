"use client";

import React from "react";
import { Download, Linkedin, Github } from "lucide-react";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";
import { useState } from "react";

// Import your project images
const project1Img = "/assets/Images/Paragon.jpg";
const project2Img = "/assets/Images/Awosika.jpg";
const project3Img = "/assets/Images/Book.jpg";
const project4Img = "/assets/Images/Bankist.jpg";
const project5Img = "/assets/Images/KlinTech.jpg";

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const projects = [
    {
      id: 1,
      title: "Paragon Website",
      description: "Bootstrap, CSS3, HTML5, JS",
      image: project1Img,
      demoLink: "https://paragonwebsite.netlify.app",
      moreLink: "/projects",
    },
    {
      id: 2,
      title: "Mrs. Awosika Portfolio Website",
      description: "Next.js, Tailwind CSS",
      image: project2Img,
      demoLink: "https://ibukunawosika.vercel.app",
      moreLink: "/projects",
    },
    {
      id: 3,
      title: "Samuel Book Website",
      description: "HTML5, CSS3, JS",
      image: project3Img,
      demoLink: "https://bookwebsite-test.netlify.app",
      moreLink: "/project",
    },
    {
      id: 4,
      title: 'Bankist Website',
      description: 'HTML5, CSS3, JS',
      image: project4Img,
      demoLink: '#',
      moreLink: 'projects',
    },
    {
      id: 5,
      title: 'KlinTech Website',
      description: 'HTML5, CSS3, JS',
      image: project5Img,
      demoLink: '#',
      moreLink: 'projects',
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div
      className="min-h-screen bg-[#D5D5D5] text-black font-sans pt-[7rem] md:mt-[5rem]"
      id="project"
    >
      <div className="">
        {/* Hero Section with Background Image */}
        <div className="md:ml-[6.2rem]">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight tracking-[0.3em]">
            PORTFOLIO
          </h1>
          <p className="text-xl pl-[.3rem] pt-3 md:text-base text-gray-700 font-bold leading-relaxed">
            Here are my completed personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`mx-[3rem] py-16 px-[6.6rem]`}>
          <div className="grid md:grid-cols-3 gap-20 mb-[3rem]">
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
                <div
                  className="absolute group-hover:inset-0 bg-gradient-to-t from-black via-black/70 flex flex-col 
                    items-center justify-center text-center p-8"
                >
                  {/* Action Buttons */}
                  <div
                    className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white"
                  >
                    <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                    <p className="text-sm font-bold text-gray-300 mb-6">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-[1px] bg-white"></div>
                      <a
                        href={project.demoLink}
                        className="text-xs font-bold tracking-widest hover:text-gray-500 transition-colors"
                      >
                        DEMO
                      </a>
                      {/* <div className="w-[1px] h-4 bg-white"></div>
                              <a
                                  href={project.moreLink}
                                  className="text-xs font-bold tracking-widest hover:text-gray-500 transition-colors"
                              >
                                  MORE
                              </a> */}
                      <div className="w-12 h-[1px] bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ContactSection />
        </div>

        <Footer />
      </div>
    </div>
  );
}
