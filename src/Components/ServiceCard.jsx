"use client"

import { motion } from "framer-motion"

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon
  
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-red-600/10 h-12 w-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-red-500 text-xl" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
      
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ServiceCard