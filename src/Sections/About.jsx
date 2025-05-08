"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDownload,
  FaUserGraduate,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import CountUp from "react-countup";
import Grad from "../Images/me3.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    { icon: FaUserGraduate, value: 2, suffix: "+", text: "Years Experience" },
    { icon: FaLaptopCode, value: 5, suffix: "+", text: "Projects Completed" },
    { icon: FaAward, value: 1, suffix: "+", text: "Awards Received" },
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <motion.div
          className="grid md:grid-cols-2 gap-10 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-red-600/20 shadow-xl shadow-red-900/10">
              <img
                src={Grad}
                alt="Profile"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-red-600">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello, Viewer. I’m a super passionate developer. I started coding
              at 17 when I began college. At first, I didn’t really know what I
              was getting into — I was actually supposed to be in cybersecurity,
              but I accidentally ended up in a web development course. It turned
              out to be more like software development, and honestly, I
              struggled during my first two semesters. But then something
              clicked. I realized I liked the challenge — whether it was a bug
              or an error, I was always determined to fix it. I enjoyed solving
              problems and finding solutions, and that’s what pulled me into web
              development. It’s been two years now, and I genuinely love what I
              do.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 2 years of experience building projects at Ranken
              Technical College, I’ve worked on everything from beginner
              websites to more complex web applications with database
              relationships. I love solving problems — and if I can’t figure it
              out on my own, I’m not afraid to dig through the internet to find
              a solution.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-red-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    {isInView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    )}
                  </h4>
                  <p className="text-gray-400 text-sm">{stat.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link
                to="/resume"
                className="inline-flex items-center bg-red-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <FaDownload className="mr-2" /> View Resume
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center bg-transparent border-2 border-red-600 text-red-600 py-3 px-6 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
