"use client";

import React from "react";
import { Download, Linkedin, Github } from "lucide-react";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";
     
export default function AboutPage() {
  const capabilities = [
    "HTML5",
    "CSS3",
    "TAILWIND CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT.JS",
    "NEXT.JS",
    "GIT",
    "FIGMA",
    "SHADCN UI",
    "TRELLO",
    "JIRA",
    "AI",
  ];

  const experiences = [
    {
      title: "Front-End Developer Intern",
      company: "Larmda",
      period: "Nov 2022",
      description:
        "Developed user-friendly web interfaces using React, HTML, CSS, and JavaScript. Collaborated with designers to ensure responsive design across devices. Enhanced UI components, improving usability and maintaining code organization.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#D5D5D5] text-black font-sans pt-20 md:mt-[5rem]"
      id="about"
    >
      <div className="max-w-8xl mx-18 md:mt-[5rem]">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight">
              About Me
            </h1>
          </div>

          {/* Right Side - Image */}
          <div>
            {/* Main Heading */}
            <h2 className="text-2xl md:text-[1.3rem] font-light leading-relaxed">
              I am a Frontend Developer and Website Designer based in Nigeria.
              <br />
              Has a Microbiology Background
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 font-bold leading-relaxed max-w-xl md:pt-4">
              I deliver modular, industry-standard code for engineering teams
              and high-trust, intuitive designs for business owners. Leveraging
              React.js, Next.js, and Tailwind CSS, and AI-optimized workflows, I
              build solutions that balance technical performance with total
              narrative control. Whether architecting a scalable codebase for a
              corporate hire or a captivating brand for a client, I ensure every
              project is simple, professional, and built for the current digital
              landscape.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm 
              uppercase tracking-wide hover:bg-transparent hover:outline-solid hover:outline-black 
              hover:text-black transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </button>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <div className="">
              <div className="w-full h-[1px] bg-gray-800 mb-32 mt-32"></div>

              {/* My Capabilities Section */}
              <div className="mb-32">
                <div className="grid md:grid-cols-2 gap-16">
                  {/* Left - Title */}
                  <div>
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
                      My Capabilities
                    </h2>
                  </div>

                  {/* Right - Description and Skills */}
                  <div className="space-y-8">
                    <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
                      I am always looking to add more skills. Motivated
                      front-end developer with hands-on experience from
                      internships and personal projects. Skilled in creating
                      responsive and intuitive web interfaces using modern
                      technologies.
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-3">
                      {capabilities.map((skill, index) => (
                        <span
                          key={index}
                          className="px-6 py-2 border border-2 font-bold border-black rounded-full text-xs font-bold bg-black text-white
                          uppercase tracking-wider hover:bg-transparent hover:text-black transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-gray-800 mb-32"></div>

              {/* My Experience Section */}
              <div>
                <div className="grid md:grid-cols-2 gap-16">
                  {/* Left - Title */}
                  <div>
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
                      My Experience
                    </h2>
                  </div>

                  {/* Right - Experience List */}
                  <div className="space-y-12">
                    {experiences.map((exp, index) => (
                      <div key={index} className="space-y-3">
                        {/* Job Title and Period */}
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl md:text-2xl font-bold">
                            {exp.title}
                          </h3>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                            {exp.period}
                          </span>
                        </div>

                        {/* Company Name */}
                        <p className="text-sm text-gray-400">{exp.company}</p>

                        {/* Description */}
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ))}

                    {/* Personal Projects */}
                    <div className="space-y-3 pt-8">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl md:text-2xl font-bold">
                          Personal Projects
                        </h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                          2023 — Present
                        </span>
                      </div>

                      <p className="text-sm text-gray-400 font-semibold">
                        Book Upload Website
                      </p>

                      <p className="text-sm text-gray-400 leading-relaxed">
                        Built a platform allowing authors to upload and display
                        books easily using React, HTML, CSS, and JavaScript.
                        Designed intuitive UI with implemented forms, file
                        upload, and dynamic display. Overcame challenges in form
                        validation and data handling efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-800 mb-32 mt-32"></div>

            </div>
          </div>
        </div>

        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
