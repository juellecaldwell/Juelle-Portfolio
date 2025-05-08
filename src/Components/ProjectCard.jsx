"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"


const ProjectCard = ({ project, index }) => {
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
        },
      }

return (
    <motion.div
    className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-500"
    variants={itemVariants}
    whileHover={{ y: -10 }}
  >
    <div className="relative overflow-hidden h-64">
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
    </div>

    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs font-medium text-white px-2 py-1 rounded-full border border-gray-700">
      {project.category === "frontend" && "Frontend"}
      {project.category === "backend" && "Backend"}
      {project.category === "fullstack" && "Full Stack"}
    </div>
  </motion.div>
)}

export default ProjectCard