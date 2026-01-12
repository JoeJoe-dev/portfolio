import React from 'react';

const html5Icon = '/assets/icons/html.png'
const css3Icon = '/assets/icons/css.png';
const tailwindcssIcon = '/assets/icons/tailwindcss.png';
const bootstrapIcon = '/assets/icons/bootstrap.png';
const javascriptIcon = '/assets/icons/js.png';
const reactIcon = '/assets/icons/react.png';
const nextjsIcon = '/assets/icons/nextjs.png';
const gitIcon = '/assets/icons/git.png';

const figmaIcon = '/assets/icons/figma.png';
const nodejsIcon = '/assets/icons/node.png';
const mysqlIcon = '/assets/icons/mysql.png';
const mongodbIcon = '/assets/icons/mongodb.png';
const typescriptIcon = '/assets/icons/typescript.png';

const shadcnIcon = '/assets/icons/shadcn.png';
const trelloIcon = '/assets/icons/trello.png';
const jiraIcon = '/assets/icons/jira.png';
const aiIcon = '/assets/icons/ai.png';


export default function Skills() {
  const usingNowSkills = [
    { name: 'HTML5', icon: html5Icon, color: '#E44D26' },
    { name: 'CSS3', icon: css3Icon, color: '#1572B6' },
    { name: 'TAILWIND CSS', icon: tailwindcssIcon, color: '#CC6699' },
    { name: 'BOOTSTRAP', icon: bootstrapIcon, color: '#7952B3' },
    { name: 'JAVASCRIPT', icon: javascriptIcon, color: '#F7DF1E' },
    { name: 'REACT', icon: reactIcon, color: '#61DAFB' },
    { name: 'NEXT.JS', icon: nextjsIcon, color: '#7952B3' },
    { name: 'GIT', icon: gitIcon, color: '#F05032' },
    { name: 'FIGMA', icon: figmaIcon, color: '#F24E1E' },
  ];

  const learningSkills = [
    { name: 'NODEJS', icon: nodejsIcon, color: '#339933' },
    { name: 'MySQL', icon: mysqlIcon, color: '#4479A1' },
    { name: 'MONGODB', icon: mongodbIcon, color: '#47A248' },
    { name: 'TYPESCRIPT', icon: typescriptIcon, color: '#3178C6' },
  ];

    const otherSkills = [
    { name: 'SHADCN UI', icon: shadcnIcon, color: '#339933' },
    { name: 'TRELLO', icon: trelloIcon, color: '#4479A1' },
    { name: 'JIRA', icon: jiraIcon, color: '#47A248' },
    { name: 'AI', icon: aiIcon, color: '#3178C6' },
  ];

  return (
    <section className="bg-[#D5D5D5] py-20 px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-16">
          <div className="border-4 border-black px-20 py-4">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-black">SKILLS</h2>
          </div>
        </div>

        {/* Using Now Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-black mb-8 tracking-wide">USING NOW:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {usingNowSkills.map((skill, index) => (
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

        {/* Learning Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-black mb-8 tracking-wide">LEARNING:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {learningSkills.map((skill, index) => (
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

        {/* Other Skills Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-black mb-8 tracking-wide">OTHER SKILLS:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {otherSkills.map((skill, index) => (
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
      </div>
    </section>
  );
}