"use client"

import { motion } from "framer-motion"

const TimelineItem = ({ item, index, isInView }) => {
  const colorMap = {
    red: "bg-red-600/20 text-red-500",
    blue: "bg-blue-600/20 text-blue-500",
    green: "bg-green-600/20 text-green-500",
  }

  const iconBgClass = colorMap[item.color] || "bg-red-600/20 text-red-500"

  return (
    <motion.div
      className="relative pl-8 pb-8 border-l border-gray-800 last:border-0 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={`absolute -left-3 w-6 h-6 rounded-full flex items-center justify-center ${iconBgClass}`}>
        <item.icon className="text-sm" />
      </div>

      <div className="bg-gray-900/30 backdrop-blur-sm p-5 rounded-lg border border-gray-800 hover:border-red-600/30 transition-all duration-300">
        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
          <p
            className={`font-medium ${item.color === "red" ? "text-red-500" : item.color === "blue" ? "text-blue-500" : "text-green-500"}`}
          >
            {item.organization}
          </p>
          <p className="text-gray-500 text-sm">{item.period}</p>
        </div>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default TimelineItem
