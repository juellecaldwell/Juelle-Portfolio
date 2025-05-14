"use client"

import { motion } from "framer-motion"

const SkillCard = ({ skill, delay, inView }) => {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-gray-800 hover:border-red-600/30 transition-all duration-300 group w-full block"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: delay }}
      whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(220, 38, 38, 0.2)" }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="flex items-center mb-2 md:mb-3">
        <div className="min-w-6 h-6 md:min-w-8 md:h-8 bg-red-600/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-red-600/30 transition-all duration-300">
          <skill.icon className="text-sm md:text-lg text-red-500" />
        </div>
        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-500 transition-colors duration-300 truncate">
          {skill.name}
        </h3>
      </div>

      <div className="mt-2">
        <div className="w-full bg-gray-800 rounded-full h-1 md:h-1.5 mb-1">
          <motion.div
            className="bg-gradient-to-r from-red-600 to-red-400 h-1 md:h-1.5 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            style={{
              willChange: 'width',
              transform: 'translate3d(0, 0, 0)'
            }}
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

