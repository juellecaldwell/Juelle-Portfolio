"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa"
import Logo from "../Components/Logo"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = location.pathname === "/"

  const navItems = [
    { name: "Home", to: "hero", path: "/" },
    { name: "About", to: "about", path: "/" },
    { name: "Skills", to: "skills", path: "/" },
    { name: "Why Hire Me", to: "why-hire-me", path: "/" },
    { name: "Education", to: "education", path: "/" },
    { name: "Projects", to: "projects", path: "/" },
    { name: "Freelance", to: "freelance", path: "/" },
    { name: "Contact", to: "contact", path: "/" },
    { name: "Resume", to: "", path: "/resume" },
  ]

  const socialLinks = [
    { icon: FaGithub, url: "#", label: "GitHub" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaDribbble, url: "#", label: "Dribbble" },
    { icon: FaBehance, url: "#", label: "Behance" },
  ]

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: "spring", stiffness: 100 } },
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
  }

  const socialVariants = {
    initial: { opacity: 0, x: 20 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
  }

  return (
    <motion.header
      id="header"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg shadow-red-900/20" : "bg-transparent py-5"
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
      style={{ opacity, scale }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => {
              if (item.path === "/resume") {
                return (
                  <motion.div key={index} custom={index} variants={navItemVariants} initial="initial" animate="animate">
                    <RouterLink
                      to={item.path}
                      className="text-white hover:text-red-500 transition-colors duration-300 relative group font-medium"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </RouterLink>
                  </motion.div>
                )
              }

              return isHomePage ? (
                <motion.div key={index} custom={index} variants={navItemVariants} initial="initial" animate="animate">
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:text-red-500 transition-colors duration-300 cursor-pointer relative group font-medium"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                </motion.div>
              ) : (
                <motion.div key={index} custom={index} variants={navItemVariants} initial="initial" animate="animate">
                  <RouterLink
                    to={item.path}
                    className="text-white hover:text-red-500 transition-colors duration-300 relative group font-medium"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </RouterLink>
                </motion.div>
              )
            })}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white hover:text-red-500 transition-all duration-300 transform hover:scale-110"
                custom={i}
                variants={socialVariants}
                initial="initial"
                animate="animate"
                whileHover={{
                  y: -5,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <RouterLink
              to="/resume"
              className="mr-4 inline-block bg-red-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </RouterLink>
            <button
              className="text-white focus:outline-none bg-gray-900 hover:bg-gray-800 p-2 rounded-lg transition-colors duration-300"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu")
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden")
                }
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="lg:hidden hidden bg-black/95 backdrop-blur-md border-t border-gray-800 mt-3">
        <div className="container mx-auto px-4 py-5">
          <nav className="flex flex-col space-y-4">
            {navItems
              .filter((item) => item.name !== "Resume")
              .map((item, index) =>
                isHomePage ? (
                  <ScrollLink
                    key={index}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:text-red-500 transition-colors duration-300 py-2 border-b border-gray-800"
                    onClick={() => {
                      const mobileMenu = document.getElementById("mobile-menu")
                      if (mobileMenu) {
                        mobileMenu.classList.add("hidden")
                      }
                    }}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={index}
                    to={item.path}
                    className="text-white hover:text-red-500 transition-colors duration-300 py-2 border-b border-gray-800"
                    onClick={() => {
                      const mobileMenu = document.getElementById("mobile-menu")
                      if (mobileMenu) {
                        mobileMenu.classList.add("hidden")
                      }
                    }}
                  >
                    {item.name}
                  </RouterLink>
                ),
              )}
          </nav>
          <div className="flex items-center space-x-4 mt-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white hover:text-red-500 transition-all duration-300"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
