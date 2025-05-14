"use client"

import { motion } from "framer-motion"

const SkillCard = ({ skill, delay, inView }) => {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-red-600/30 transition-all duration-300 group w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)" }}
    >
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-600/30 transition-all duration-300">
          <skill.icon className="text-lg text-red-500" />
        </div>
        <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>

      <div className="mt-2">
        <div className="w-full bg-gray-800 rounded-full h-1.5 mb-1">
          <motion.div
            className="bg-gradient-to-r from-red-600 to-red-400 h-1.5 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          ></motion.div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Beginner</span>
          <span>Advanced</span>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCard