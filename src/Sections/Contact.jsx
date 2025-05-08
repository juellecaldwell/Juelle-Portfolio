"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaSkype, FaDiscord } from "react-icons/fa"
import SectionTitle from "../Components/SectionTitle"
import ContactForm from "../Components/ContactForm"
import Map from "../Components/Map"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "Juellecc@gmail.com",
      link: "mailto:juellecc@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+1 (314) 986-9400",
      link: "tel:+13149869400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "St.Louis, MO",
      link: "https://www.google.com/maps/place/St.+Louis,+MO/@38.6530345,-90.4084223,11z/data=!3m1!4b1!4m6!3m5!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!8m2!3d38.6270025!4d-90.1994042!16zL20vMDZ3eHc?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "N/A",
      link: "https://wa.me/15551234567",
    },
    {
      icon: FaSkype,
      title: "Skype",
      value: "N/A",
      link: "skype:live:username?chat",
    },
    {
      icon: FaDiscord,
      title: "Discord",
      value: "Deezkeys21",
      link: "https://discordapp.com/users/941751387581218860",
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle title="Contact Me" subtitle="Let's get in touch" />

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-600/50 transition-all duration-300 group flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)" }}
            >
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-all duration-300">
                <info.icon className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-gray-400">{info.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-full">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Have a project in mind or want to discuss a potential collaboration? Fill out the form, and I'll get back
              to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden h-full">
            <Map />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
