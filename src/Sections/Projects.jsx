"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import SectionTitle from "../Components/SectionTitle"
import ProjectCard from "../Components/ProjectCard"
import IssueTracker from "../Images/IssueTracker.png"
import SolarView from "../Images/SolarView.png"
import Spider from "../Images/Spider-man-Suit-Tracker.png"
import TrophyTracker from "../Images/TrophyTracker.png"
import InvenTrack from "../Images/InvenTrack.png"
import InDevelopment from "../Images/InDevelopment.jpg" 



const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Issue Tracker App",
      description:
        "A full-featured Issue Tracker platform with user authentication, and admin Features.",
      image: IssueTracker,
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      category: "fullstack",
      github: "#",
      live: "https://youtu.be/Ohoq-viTuzw",
    },
    {
      title: "Solar View Website",
      description: "This Website was an class challenge given by the buy of out school and this is how it turned out its an static site .",
      image: SolarView,
      tags: ["html", "css"],
      category: "frontend",
      github: "#",
      live: "#",
    },
    {
      title: "Spider-Man Suit Tracker",
      description: "A application that just uses CRUD Operations.",
      image: Spider,
      tags: ["React", "css",],
      category: "fullstack",
      github: "#",
      live: "https://www.youtube.com/watch?v=MJ-qIrSkq1Y&list=PLFu-5_Ltz39uY9DOIZCWqcOOaeD2FcrIH&index=6",
    },
    {
      title: "Trophy Tracker",
      description: "A CRUD application Thats connected to a SQL Database.",
      image: TrophyTracker,
      tags: ["c#", "SQL Database"],
      category: "fullstack",
      github: "#",
      live: "https://youtu.be/fs6zpC5-YCA",
    },
    {
      title: "Inventory Management System",
      description: "This is an Inventory Management application With stripe payment integration and also email features when making an Order.",
      image: InvenTrack,
      tags: ["C#", "ASP.NET Core", "SQL Server", "Bootstrap", "Entity Framework", "More+"],
      category: "fullstack",
      github: "#",
      live: "https://youtu.be/urDgumc87IQ",
    },
    {
      title: "(In Development 5/4/2025) Service Booking Platform",
      description: "In Development",
      image: InDevelopment,
      tags: ["Asp", ".Net", "More+"],
      category: "fullstack",
      github: "#",
      live: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle title="My Projects" subtitle="Recent work I've done" />

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10 mb-12"
          variants={filterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-full border border-gray-800 flex flex-wrap justify-center">
            {filters.map((item, index) => (
              <button
                key={index}
                onClick={() => setFilter(item.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === item.value ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 group"
          >
            <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
