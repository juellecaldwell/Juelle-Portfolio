
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
// Sections
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import WhyHireMe from "./Sections/WhyHireMe";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";
import Projects from "./Sections/Projects";
import Freelance from "./Sections/Freelance";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

//Pages
import ResumePage from "./Pages/ResumePage"

// Components
import BackToTop from "./Components/BackToTop";
import Cursor from "./Components/Cursor";
import PageTransition from "./Components/PageTransition"

//Styles
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          className="app bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Cursor />
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <main>
                    <Hero />
                    <About />
                    <Skills />
                    <WhyHireMe />
                    <Education />
                    <Projects />
                    <Freelance />
                    <Contact />
                  </main>
                </PageTransition>
              }
            />
            <Route
              path="/resume"
              element={
                <PageTransition>
                  <ResumePage />
                </PageTransition>
              }
            />
          </Routes>

          <Footer />
          <BackToTop />
        </motion.div>
      </AnimatePresence>
    </Router>
  )
}

export default App;
