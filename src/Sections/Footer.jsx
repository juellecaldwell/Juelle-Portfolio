"use client"

import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaHeart,
  FaPaperPlane,
} from "react-icons/fa"
import Logo from "../Components/Logo"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, url: "#", label: "GitHub" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaDribbble, url: "#", label: "Dribbble" },
    { icon: FaBehance, url: "#", label: "Behance" },
  ]

  const footerLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
    { name: "Resume", url: "/resume" },
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
  ]

  return (
    <footer className="bg-black relative overflow-hidden pt-20 border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo />
            <p className="text-gray-400 mt-6 leading-relaxed">
              Creating nice Web Experiences with technology and great design.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.slice(4, 7).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on new projects and announcements.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 border border-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-600 w-full"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors duration-300"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Juelles-Portfolio. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            Made with <FaHeart className="text-red-600 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
