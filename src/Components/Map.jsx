"use client"

import { useEffect, useRef } from "react"

const Map = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real project, you would use a library like Google Maps, Mapbox, or Leaflet
    const canvas = mapRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw a stylized map background
    const drawMap = () => {
      // Background
      ctx.fillStyle = "#1a1a1a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      ctx.strokeStyle = "#333333"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i < canvas.height; i += 30) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      // Draw some roads
      ctx.strokeStyle = "#444444"
      ctx.lineWidth = 8

      // Main road
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.5)
      ctx.stroke()

      // Cross roads
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.5, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.8)
      ctx.stroke()

      // Location marker
      ctx.fillStyle = "#dc2626"
      ctx.beginPath()
      ctx.arc(canvas.width * 0.5, canvas.height * 0.5, 10, 0, Math.PI * 2)
      ctx.fill()

      // Pulse effect
      ctx.strokeStyle = "#dc2626"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(canvas.width * 0.5, canvas.height * 0.5, 20, 0, Math.PI * 2)
      ctx.stroke()
    }

    drawMap()

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawMap()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="w-full h-full min-h-[400px] relative">
      <canvas ref={mapRef} className="w-full h-full"></canvas>
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm p-3 rounded-lg text-white text-sm">
        <p className="font-semibold">St Louis, MO</p>
        <p className="text-gray-400 text-xs mt-1">Available for remote work & relocation</p>
      </div>
    </div>
  )
}

export default Map
