"use client"

import { motion } from "framer-motion"

const SkillBar = ({ name, level, delay, inView }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  )
}

export default SkillBar
