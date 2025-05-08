"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaLaptopCode } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle";
import TimelineItem from "../Components/TimelineItem";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const educationItems = [
    {
      icon: FaGraduationCap,
      title: "Associate of Science in Computer Science",
      organization: "Ranken Technical College",
      period: "2023 - 2025",
      description: "Graduated With no problems ",
      color: "red",
    },
    {
      icon: FaGraduationCap,
      title: "(Future Education) Bachelor's in Computer Science",
      organization: "Webster University",
      period: "2025 - ?",
      description:
        "Im going to take 6 months to job hunt if i don't find an job during that period then i will go back to school to further my education",
      color: "red",
    },
  ];

  const certifications = [
    // {
    //   icon: FaCertificate,
    //   title: "Full Stack Web Development",
    //   organization: "Udemy",
    //   period: "2019",
    //   description:
    //     "Comprehensive course covering modern web development technologies including React, Node.js, and MongoDB.",
    //   color: "blue",
    // },
    // {
    //   icon: FaCertificate,
    //   title: "Microsoft Certified: Azure Developer Associate",
    //   organization: "Microsoft",
    //   period: "2021",
    //   description:
    //     "Professional certification for designing, building, testing, and maintaining cloud applications on Microsoft Azure.",
    //   color: "blue",
    // },
  ];
  const experience = [
    {
      icon: FaLaptopCode,
      title: "MERN Stack Issue Tracker",
      organization: "Ranken Technical College",
      period: "2024",
      description:
        "Built a full-stack issue tracker using React, Node.js, Express, and MongoDB. Implemented user authentication, routing, and CRUD features for managing project issues.",
      color: "green",
    },
    {
      icon: FaLaptopCode,
      title: "Inventory Management System",
      organization: "Ranken Technical College",
      period: "2025",
      description:
        "Developed an inventory tracking system using ASP.NET Core MVC with Razor views, model validation, and Entity Framework for database management.",
      color: "green",
    },
    {
      icon: FaLaptopCode,
      title: "Portfolio Website",
      organization: "Personal Project",
      period: "2024",
      description:
        "Created a personal portfolio using HTML, CSS, JavaScript, and React to showcase projects and skills. Deployed with Vercel for fast and responsive user experience.",
      color: "green",
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Education & Training"
          subtitle="My academic journey and professional development"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mr-4">
                <FaGraduationCap className="text-2xl text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            {educationItems.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                <FaCertificate className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            {certifications.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mr-4">
                <FaLaptopCode className="text-2xl text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Training</h3>
            </div>

            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
