"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaLightbulb, FaRocket, FaUsers, FaCode } from "react-icons/fa"
import SectionTitle from "../Components/SectionTitle"

const WhyHireMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const reasons = [
    {
      icon: FaLightbulb,
      title: "Creative Problem Solver",
      description:
        "I bring hands-on experience and a proactive mindset, turning real-world problems into working solutions with readable code and nice design",
    },
    {
      icon: FaRocket,
      title: "Ready To Learn",
      description:
        "Im Ready to learn new technologies and adapt to changing requirements, ensuring I stay up to date of the industry.",
    },
    {
      icon: FaUsers,
      title: "Team Player",
      description:
        "I like collaborative environments and communicate a lot with team members.",
    },
    {
      icon: FaCode,
      title: "Debugging Advocate",
      description: "I'm always ready to debug code using breakpoints and logging whenever I encounter a bug or error.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="why-hire-me" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle title="Why Hire Me" subtitle="What sets me apart" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-red-600/50 transition-all duration-300 group hover:transform hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-all duration-300">
                <reason.icon className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm really dedicated to making high quality websites to the best of my ability. I'm always Looking for job opportunity wether they pay or not im only here for the experience and challenge
          </p>
          <a
            href="#projects"
            className="inline-block mt-8 bg-transparent border-2 border-red-600 text-red-600 py-3 px-8 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyHireMe
