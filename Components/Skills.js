"use client"

import React, { useEffect, useRef, useState } from 'react';

// Icons (keep your existing imports)
const html5Icon = '/assets/icons/html.png';
const css3Icon = '/assets/icons/css.png';
const tailwindcssIcon = '/assets/icons/tailwindcss.png';
const bootstrapIcon = '/assets/icons/bootstrap.png';
const javascriptIcon = '/assets/icons/js.png';
const reactIcon = '/assets/icons/react.png';
const nextjsIcon = '/assets/icons/nextjs.png';
const gitIcon = '/assets/icons/git.png';
const wordpressIcon = '/assets/icons/WordPress.png';
const hostingerIcon = '/assets/icons/hostinger.png';
const nodejsIcon = '/assets/icons/node.png';
const mysqlIcon = '/assets/icons/mysql.png';
const mongodbIcon = '/assets/icons/mongodb.png';
const typescriptIcon = '/assets/icons/typescript.png';
const shadcnIcon = '/assets/icons/shadcn.png';
const trelloIcon = '/assets/icons/trello.png';
const jiraIcon = '/assets/icons/jira.png';
const aiIcon = '/assets/icons/ai.png';

// Small helper component for individual section animations
const AnimatedSection = ({ title, skills, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

useEffect(() => {
  // Capture the current ref value in a variable
  const currentRef = domRef.current;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => setIsVisible(entry.isIntersecting));
  }, { threshold: 0.1 });
  
  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    // Use the captured variable to safely unobserve
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, []);

  return (
    <div
      ref={domRef}
      className={`mb-24 transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      } ${className}`}
    >
      <h3 className="text-xl font-bold ml-[3.2rem] text-black mb-8 md:ml-[5.4rem] tracking-wide">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center mb-3">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-sm font-bold text-black tracking-wide">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const usingNowSkills = [
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'TAILWIND CSS', icon: tailwindcssIcon },
    { name: 'BOOTSTRAP', icon: bootstrapIcon },
    { name: 'JAVASCRIPT', icon: javascriptIcon },
    { name: 'REACT', icon: reactIcon },
    { name: 'NEXT.JS', icon: nextjsIcon },
    { name: 'WORDPRESS', icon: wordpressIcon },
    { name: 'HOSTINGER', icon: hostingerIcon },
    { name: 'GIT', icon: gitIcon },
  ];

  const learningSkills = [
    { name: 'NODEJS', icon: nodejsIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'MONGODB', icon: mongodbIcon },
    { name: 'TYPESCRIPT', icon: typescriptIcon },
  ];

  const otherSkills = [
    { name: 'SHADCN UI', icon: shadcnIcon },
    { name: 'TRELLO', icon: trelloIcon },
    { name: 'JIRA', icon: jiraIcon },
    { name: 'AI', icon: aiIcon },
  ];

  return (
    <section className="bg-[#D5D5D5] py-20 px-8 font-sans" id="skills">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Title */}
        <div className="flex justify-center mb-16">
          <div className="border-4 border-black px-20 py-4">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-black">SKILLS</h2>
          </div>
        </div>

        {/* Animated Sections */}
        <AnimatedSection title="USING NOW:" skills={usingNowSkills} />
        <AnimatedSection title="LEARNING:" skills={learningSkills} />
        <AnimatedSection title="OTHER SKILLS:" skills={otherSkills} />

      </div>
    </section>
  );
}