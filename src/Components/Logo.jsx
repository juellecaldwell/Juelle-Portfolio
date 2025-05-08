"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="cursor-pointer">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mr-2 transform rotate-45 shadow-lg shadow-red-600/20">
          <span className="text-white font-bold text-xl transform -rotate-45">JC</span>
        </div>
        <span className="text-white font-bold text-xl">Juelle Caldwell</span>
      </motion.div>
    </Link>
  )
}

export default Logo
