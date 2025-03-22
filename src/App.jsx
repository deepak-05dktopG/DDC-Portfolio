import "./App.css";
import React, { useState, useEffect } from "react";
// Router
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";
// components import
import SplashCursor from "./components/magicui/Splashcurser";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import Aboutme from "./components/aboutpage/Aboutme";
import Service from "./components/servicepage/Service";
import Contact from "./components/contactpage/Contact";
import { motion, useScroll, useSpring } from "framer-motion";


function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoader(false)
    }, 500);
  }, [1])

  // useEffect(() => {
  //   const handleLoad = () => {
  //     // Start the interval only after the window has loaded
  //     const intervalId = setInterval(() => {
  //       setLoader(false);
  //       clearInterval(intervalId); // Clear the interval after setting loader to false
  //     }, 5000);
  //   };

  //   // Add event listener for window load
  //   window.addEventListener('load', handleLoad);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  function ScrollToTop() {
    const location = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <div className="Body">

      <SplashCursor />

      {loader ?

        <div className="loader">
          <div className="ph1">
            <div className="record"></div>
            <div className="record-text ">WELCOME</div>
          </div>
          <div className="ph2">
            <div className="laptop-b"></div>
            <svg
              className="laptop-t"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 30"
            >
              <path
                d="M21 1H5C2.78 1 1 2.78 1 5V25a4 4 90 004 4H37a4 4 90 004-4V5c0-2.22-1.8-4-4-4H21"
                pathLength="100"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              ></path>
            </svg>
          </div>
          <div className="icon1"></div>
        </div>













        : <div>

          <motion.div className="z-2 progress-bar-top" style={{ scaleX }} ></motion.div>
          <Router basename="/DDC-Portfolio">
            <ScrollToTop />
            <Routes>
              <Route path="/about" element={<Home />} />
              <Route path="/" element={<Aboutme />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>

        </div>}


    </div>
  );
}

export default App;
