"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => removeEventListeners()
  }, [])

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: hidden ? 0 : 1,
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 0.8,
      opacity: hidden ? 0 : 1,
    },
    hovered: {
      x: position.x - 24,
      y: position.y - 24,
      scale: 1.5,
      opacity: hidden ? 0 : 0.8,
    },
  }

  const cursorDotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: hidden ? 0 : 1,
    },
    clicked: {
      x: position.x - 4,
      y: position.y - 4,
      scale: 0.5,
      opacity: hidden ? 0 : 1,
    },
    hovered: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: 0,
    },
  }

  return (
    <>
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-8 h-8 border-2 border-red-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={cursorDotVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
      />
    </>
  )
}

export default Cursor
