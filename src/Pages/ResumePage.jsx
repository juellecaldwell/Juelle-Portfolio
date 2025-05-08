"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const sections = [
    {
      title: "Professional Experience",
      items: [
        // Note: Since no professional experience was provided in your details,
        // this section remains empty but the structure is maintained for future updates
      ],
    },
    {
      title: "Education",
      items: [
        {
          title: "Associate's Degree in Web Development",
          company: "Ranken Technical College",
          period: "Expected 2025",
          description:
            "Relevant Coursework: Full-Stack Development, Databases, Object-Oriented Programming",
        },
        {
          title: "Bachelor's Degree in Computer Science",
          company: "Planned after Associate's Degree completion",
          period: "Future",
          description: "Future education goal",
        },
      ],
    },
    {
      title: "Skills",
      skills: [
        {
          category: "Programming Languages",
          items: [
            "JavaScript (Fetch API, Async/Await, error handling, Asynchronous programming)",
            "HTML (Forms, Accessibility, tables, lists, headers, divs, sections, navigation)",
            "CSS (Flexbox, Tailwind CSS, Bootstrap)",
            "C# (.NET, Entity Framework, Inheritance, Interfaces, LINQ, Entity Framework, async/await, classes)",
            "SQL (Joins, Queries)",
          ],
        },
        {
          category: "Frameworks & Libraries",
          items: [
            "React (Hooks, Framer Motion, State Management, forms and validation, react hooks, routing)",
            "Node.js (Express, REST APIs, debugging, backend-development, asynchronous programming, Database interaction)",
            "ASP.NET Core MVC (Debugging, Razor Views, Routing, IActionResults, Areas, Model Bindings, LINQ, Razor Syntax, filters, data annotations, Validation)",
          ],
        },
        {
          category: "Databases",
          items: [
            "MongoDB (Mongoose, Aggregations)",
            "SQL Server (Joins, Queries, Performance Optimization)",
          ],
        },
        {
          category: "Tools & Technologies",
          items: [
            "Git",
            "GitHub",
            "Postman",
            "Visual Studio",
            "ChatGPT",
            "NPM",
            "REST APIs",
          ],
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          title: "Inventory Management Website",
          company: "ASP.NET MVC Project",
          period: "Work in progress",
          description: "ASP.NET MVC project for managing product inventory",
          achievements: ["Google Authentication", "Entity Framework Identity"],
        },
        {
          title: "Note-Taking App",
          company: "Full-stack MERN App",
          period: "",
          description:
            "Full-stack MERN app with user authentication & CRUD operations.",
          achievements: ["Key Features: React, Node-Js, Express, MongoDB"],
        },
        {
          title: "Game Tracker App",
          company: "C# Desktop App",
          period: "",
          description: "C# desktop app for tracking game trophies.",
          achievements: [
            "Key Features: C#, SQL Database",
            "YouTube Demo available",
          ],
        },
        {
          title: "Issue Tracker App",
          company: "MERN Stack App",
          period: "",
          description:
            "MERN stack app with user authentication & CRUD operations.",
          achievements: [
            "Key Features: React, Node-Js, Express-Js, MongoDB, bcrypt, joi validation, mailgun API, Json web tokens",
            "YouTube Demo available",
          ],
        },
        {
          title: "Auction Application",
          company: "Project",
          period: "Coming soon",
          description: "Details coming soon",
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          title: "JavaScript Algorithms & Data Structures",
          company: "FreeCodeCamp",
          period: "",
          description: "Certification in JavaScript programming fundamentals",
        },
        {
          title: "Portfolio Website Published",
          company: "juelles-portfolio.vercel.app",
          period: "",
          description:
            "Personal portfolio website showcasing projects and skills",
        },
      ],
    },
    {
      title: "Contact Information",
      contactInfo: [
        { label: "Email", value: "Juellecc@gmail.com" },
        { label: "Phone", value: "(314) 986-9400" },
        { label: "Location", value: "St. Louis, MO (63110)" },
        { label: "Portfolio", value: "juelles-portfolio.vercel.app" },
      ],
    },
    {
      title: "Summary",
      description:
        "Passionate web developer with experience in React, C#, and ASP.NET MVC. Currently pursuing an Associate's Degree in Web Development at Ranken Technical College (expected 2025). Skilled in building user-friendly applications, problem-solving, and leveraging AI-powered tools. Seeking hands-on experience to further develop my skills and contribute to a development team.",
    },
  ];

  return (
    <div className="bg-black min-h-screen pt-24 pb-20">
      <motion.div
        className="container mx-auto px-4"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
          variants={itemVariants}
        >
          <div>
            <Link
              to="/"
              className="inline-flex items-center text-red-500 hover:text-red-600 mb-4"
            >
              <FaArrowLeft className="mr-2" /> Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              My Resume
            </h1>
          </div>

          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
          >
            <FaDownload className="mr-2" /> Download PDF
          </a>
        </motion.div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 shadow-xl">
          <motion.div className="mb-10" variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Juelle Caldwell
                </h2>
                <p className="text-xl text-red-500 mt-1">
                  Full Stack Developer
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-gray-400">Juellecc@gmail.com</p>
                <p className="text-gray-400">+1 (314) 986-9400</p>
                <p className="text-gray-400">St.Louis, MO</p>
              </div>
            </div>

            <div className="mt-6 pb-6 border-b border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                Passionate web developer with experience in React, C#, and
                ASP.NET MVC. Currently pursuing an Associate’s Degree in Web
                Development at Ranken Technical College (expected 2025). Skilled
                in building user-friendly applications, problem-solving, and
                leveraging AI-powered tools. Seeking hands-on experience to
                further develop my skills and contribute to a development team.
              </p>
            </div>
          </motion.div>

          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="mb-10 last:mb-0"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
                {section.title}
              </h3>

              {section.items && (
                <div className="space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="relative pl-6 border-l-2 border-red-600"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full"></div>
                      <h4 className="text-xl font-bold text-white">
                        {item.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-2">
                        <p className="text-red-500 font-medium">
                          {item.company}
                        </p>
                        <p className="text-gray-500">{item.period}</p>
                      </div>
                      <p className="text-gray-400 mb-3">{item.description}</p>

                      {item.achievements && (
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                          {item.achievements.map(
                            (achievement, achievementIndex) => (
                              <li key={achievementIndex}>{achievement}</li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.skills && (
                <div className="grid md:grid-cols-2 gap-6">
                  {section.skills.map((skillGroup, skillGroupIndex) => (
                    <div
                      key={skillGroupIndex}
                      className="bg-gray-800/50 rounded-lg p-4"
                    >
                      <h4 className="text-lg font-bold text-white mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage;
