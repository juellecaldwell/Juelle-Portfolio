"use client"

import { motion } from "framer-motion"

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
        {title}
        <motion.span
          className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.span>
      </h2>
      {subtitle && <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}

export default SectionTitle
