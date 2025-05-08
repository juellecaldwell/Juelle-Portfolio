"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const testimonials = [
    {
      quote:
        "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations.",
      name: "Sarah Johnson",
      title: "CEO, Fashion Boutique",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Exceptional work on our company website redesign. The attention to detail and responsiveness to feedback made the process smooth and the results outstanding.",
      name: "Michael Chen",
      title: "Marketing Director, Tech Solutions",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "I've worked with many developers, but few have the combination of technical skill and creative vision that this developer brings to the table.",
      name: "Jessica Williams",
      title: "Product Manager, SaaS Platform",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const nextTestimonial = () => {
    setDirection("right")
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6">
              <FaQuoteLeft className="text-2xl text-red-600" />
            </div>
            <p className="text-gray-300 text-lg md:text-xl italic mb-8 max-w-3xl mx-auto leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-red-600 mb-3"
              />
              <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-400">{testimonials[currentIndex].title}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left")
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-red-600 w-6" : "bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
        aria-label="Previous testimonial"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
        aria-label="Next testimonial"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

export default TestimonialSlider
