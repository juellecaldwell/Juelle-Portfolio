"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Link } from "react-scroll"
import Typed from "typed.js"
import { FaArrowDown, FaCode, FaLaptopCode } from "react-icons/fa"
import ParticlesBackground from "../Components/ParticlesBackground"

const Hero = () => {
  const ref = useRef(null)
  const typedRef = useRef(null)
  const typedElementRef = useRef(null)
  const isInView = useInView(ref, { once: false })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: [
          "Full Stack Developer",
          "Web Application Developer",
          "Problem Solver",
          "Creative Coder",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      })
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy()
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }
  

  // Fixed easing function - changed cubic-bezier to use valid values
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 1.2 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950" 
      ref={ref}
    >
      {/* Background components */}
      <ParticlesBackground />

      {/* Animated background gradients */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Content container - increased z-index and added background for better visibility */}
      <div className="container mx-auto px-4 z-20 relative pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6 inline-block" variants={itemVariants}>
            <span className="inline-block bg-red-600/20 text-red-500 text-sm font-semibold py-1 px-3 rounded-full border border-red-600/30">
              <FaCode className="inline-block mr-2" />
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white" variants={itemVariants}>
            Hi, I'm <span className="text-red-600">Juelle Caldwell</span>
          </motion.h1>

          <motion.div className="text-2xl md:text-4xl font-bold mb-8 text-gray-300 h-16" variants={itemVariants}>
            <span ref={typedElementRef}></span>
          </motion.div>

          <motion.p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
            I create Cool Functional Mern Stack and Asp .Net Core MVC Websites
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-full font-semibold flex items-center justify-center gap-2 group relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-700 to-red-800 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
              <span className="relative flex items-center">
                <FaLaptopCode className="mr-2" />
                Let's Work Together
              </span>
            </motion.a>

            <Link to="about" spy={true} smooth={true} offset={-70} duration={800}>
              <motion.button
                className="bg-transparent border-2 border-red-600 text-red-600 py-4 px-8 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="w-10 h-10 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <FaArrowDown />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero