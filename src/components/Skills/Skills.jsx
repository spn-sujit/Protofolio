import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
        Technical Skills
      </h2>
      <div className="w-20 h-1.5 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
      <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium">
        A collection of my technical expertise and academic foundations, 
        honed through full-stack projects and competitive programming.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 
          shadow-2xl hover:border-[#8245ec]/50 transition-all duration-500 group"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-8 border-b border-gray-800 pb-4 group-hover:text-[#8245ec] transition-colors">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.03}
            transitionSpeed={2000}
            perspective={1200}
          >
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 bg-gray-800/50 border border-gray-700 rounded-2xl py-2.5 px-4 
                  hover:bg-[#8245ec]/10 hover:border-[#8245ec]/40 transition-all cursor-default"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                  <span className="text-sm font-semibold text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;