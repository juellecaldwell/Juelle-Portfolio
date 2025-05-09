"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "../Components/SectionTitle"
import SkillCard from "../Components/SkillCard"
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaDatabase,
    FaGitAlt,
    FaDocker,
    FaFigma,
    FaCode,
    FaServer,
    FaMobile,
  } from "react-icons/fa";
  import {
    SiCsharp,
    SiDotnet,
    SiMicrosoftsqlserver,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiVisualstudio,
    SiPostman,
    SiNpm,
  } from "react-icons/si";
  


const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const skillCategories = [
    {
        title: "Frontend Development",
    icon: FaCode,
    skills: [
      { name: "React", icon: FaReact, level: 90 },
      { name: "JavaScript", icon: FaJs, level: 95 },
      { name: "HTML5", icon: FaHtml5, level: 98 },
      { name: "CSS3", icon: FaCss3Alt, level: 95 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "Bootstrap", icon: FaCss3Alt, level: 85 }, 
      ],
    },
    {
    title: "Backend Development",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "C#", icon: SiCsharp, level: 80 },
      { name: "ASP.NET Core", icon: SiDotnet, level: 75 },
      { name: "SQL", icon: FaDatabase, level: 85 },
      { name: "SQL Server", icon: SiMicrosoftsqlserver, level: 80 },
      { name: "Entity Framework", icon: SiDotnet, level: 75 },
      ],
    },
    {
    title: "Tools & Technologies",
    icon: FaMobile,
    skills: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "GitHub", icon: FaGitAlt, level: 90 }, // No specific GitHub icon in react-icons
      { name: "Postman", icon: SiPostman, level: 80 },
      { name: "Visual Studio", icon: SiVisualstudio, level: 85 },
      { name: "NPM", icon: SiNpm, level: 85 },
      { name: "REST APIs", icon: FaServer, level: 85 }, // Representing with server icon
      { name: "ChatGPT", icon: FaReact, level: 80 },
      ],
    },
    {
        title: "Databases",
        icon: FaDatabase,
        skills: [
          { name: "MongoDB", icon: SiMongodb, level: 85 },
          { name: "SQL Server", icon: SiMicrosoftsqlserver, level: 80 },
        ],
      },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle title="My Skills" subtitle="What I bring to the table" />

        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} className="mb-16 last:mb-0" variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-2xl text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <div className="flex-grow ml-4 h-px bg-gradient-to-r from-red-600/50 to-transparent"></div>
              </div>

              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-full">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    inView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
