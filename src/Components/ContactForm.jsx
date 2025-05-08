"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

      // Send the email via EmailJS
  emailjs
  .send('service_2pl30eo', 'template_jmcw0ly', formData, 'w1NzKLHH-gmR3tfxV')
  .then(
    () => {
      alert("Email sent!");  // Success message
      setSubmitStatus("success");  // Set submission status to success
    },
    (err) => {
      console.log(err);  // Log any error to the console
      setSubmitStatus("error");  // Set submission status to error
    }
  );

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ from_name: "", from_email: "", subject: "", message: "" })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <form  onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
            Your Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-800 text-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
            Your Email
          </label>
          <input
            type="from_email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-800 text-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-gray-900 border border-gray-800 text-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full bg-gray-900 border border-gray-800 text-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 resize-none"
        ></textarea>
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-md font-semibold transition-all duration-300 relative overflow-hidden ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-700 to-red-800 transition-transform duration-300 transform translate-y-full hover:translate-y-0"></span>
        <span className="relative flex items-center justify-center">
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </span>
      </motion.button>

      {submitStatus === "success" && (
        <motion.div
          className="mt-4 p-3 bg-green-600/20 border border-green-600/30 text-green-500 rounded-md text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Your message has been sent successfully!
        </motion.div>
      )}
    </form>
  )
}

export default ContactForm
