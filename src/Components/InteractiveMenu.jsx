"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-scroll"
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaLightbulb } from "react-icons/fa"

const InteractiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState(null)

  const menuItems = [
    { icon: FaHome, label: "Home", to: "home" },
    { icon: FaUser, label: "About", to: "about" },
    { icon: FaLightbulb, label: "Why Hire Me", to: "why-hire-me" },
    { icon: FaBriefcase, label: "Projects", to: "projects" },
    { icon: FaEnvelope, label: "Contact", to: "contact" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveTooltip(null)
  }

  const handleMouseEnter = (index) => {
    setActiveTooltip(index)
  }

  const handleMouseLeave = () => {
    setActiveTooltip(null)
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* Main Button */}
        <motion.button
          className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white flex items-center justify-center shadow-lg relative z-20"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </motion.div>
        </motion.button>

        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-full py-3 px-4 border border-gray-800 shadow-xl"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <item.icon />
                      </motion.div>
                    </Link>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {activeTooltip === index && (
                        <motion.div
                          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.label}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rotate-45"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default InteractiveMenu
