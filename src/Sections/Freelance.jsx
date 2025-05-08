"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaCode, FaPalette, FaServer, FaMobileAlt, FaRocket, FaHeadset } from "react-icons/fa"
import SectionTitle from "../Components/SectionTitle"
import ServiceCard from "../Components/ServiceCard"
import TestimonialSlider from "../Components/TestimonialSlider"

const Freelance = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "Custom websites built with the latest technologies to ensure fast loading, responsiveness, and optimal user experience.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"],
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description:
        "User-centered design that focuses on creating intuitive, accessible, and visually appealing interfaces.",
      features: ["Wireframing", "Prototyping", "User Testing", "Visual Design"],
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Robust server-side solutions that power your applications with secure, scalable, and efficient code.",
      features: ["API Development", "Database Design", "Authentication", "Cloud Integration"],
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across devices.",
      features: ["iOS & Android", "React Native", "Performance Optimization", "App Store Submission"],
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description:
        "Speed up your existing applications by identifying and resolving bottlenecks and implementing best practices.",
      features: ["Load Time Reduction", "Caching Strategies", "Code Splitting", "Resource Optimization"],
    },
    {
      icon: FaHeadset,
      title: "Consultation & Support",
      description:
        "Expert advice on technology choices, architecture decisions, and ongoing support for your projects.",
      features: ["Technical Consulting", "Code Reviews", "Maintenance", "Training"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="freelance" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle title="Freelance Services" subtitle="How I can help you" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What Clients Say</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </div>

          <TestimonialSlider />

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block bg-red-600 text-white py-4 px-8 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Freelance
